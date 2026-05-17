import "server-only";

const GITHUB_API = "https://api.github.com";

export interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

export async function getOrgContributors(org: string = "two-tech-dev"): Promise<Contributor[]> {
  const token = process.env.GITHUB_TOKEN;
  
  if (!token) {
    console.warn("GITHUB_TOKEN is missing. Returning mock data.");
    return [
      { login: "harryitz", avatar_url: "https://avatars.githubusercontent.com/u/1?v=4", html_url: "https://github.com/harryitz", contributions: 1240 },
      { login: "jaspert", avatar_url: "https://avatars.githubusercontent.com/u/2?v=4", html_url: "https://github.com/jaspert", contributions: 856 },
      { login: "dev3", avatar_url: "https://avatars.githubusercontent.com/u/3?v=4", html_url: "https://github.com/dev3", contributions: 432 },
      { login: "contributor4", avatar_url: "https://avatars.githubusercontent.com/u/4?v=4", html_url: "https://github.com/contributor4", contributions: 120 },
      { login: "coder5", avatar_url: "https://avatars.githubusercontent.com/u/5?v=4", html_url: "https://github.com/coder5", contributions: 45 },
    ];
  }

  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github.v3+json",
  };

  try {
    // Fetch the list of repositories in the org (including private ones)
    const reposRes = await fetch(`${GITHUB_API}/orgs/${org}/repos?per_page=100&type=all`, {
      headers,
      next: { revalidate: 120 },
    });
    
    if (!reposRes.ok) {
      const errorText = await reposRes.text();
      console.error(`Failed to fetch repos: ${reposRes.status} ${reposRes.statusText} - ${errorText}`);
      throw new Error("Failed to fetch repositories");
    }
    const repos = await reposRes.json();
    console.log(`Successfully fetched ${repos.length} repositories for org ${org}.`);

    // Fetch the list of members in the org
    const membersRes = await fetch(`${GITHUB_API}/orgs/${org}/members?per_page=100`, {
      headers,
      next: { revalidate: 120 },
    });
    
    const contributorMap = new Map<string, Contributor>();

    let orgMemberLogins = new Set<string>();
    if (membersRes.ok) {
      const members = await membersRes.json();
      if (Array.isArray(members)) {
        members.forEach((m: any) => {
          const login = m.login.toLowerCase();
          orgMemberLogins.add(login);
          // Initialize every member with 0 contributions
          contributorMap.set(login, {
            login: m.login,
            avatar_url: m.avatar_url,
            html_url: m.html_url,
            contributions: 0,
          });
        });
      }
      console.log(`Successfully fetched ${orgMemberLogins.size} members for org ${org}.`);
    } else {
      console.warn("Could not fetch org members. Filtering will not be applied.");
    }

    // Iterate over each repo to get the contributor count
    await Promise.all(
      repos.map(async (repo: any) => {
        try {
          const statsRes = await fetch(`${GITHUB_API}/repos/${org}/${repo.name}/contributors?per_page=100`, {
            headers,
            next: { revalidate: 120 },
          });
          
          if (!statsRes.ok) {
             console.warn(`Could not fetch contributors for repo: ${repo.name} (Status: ${statsRes.status})`);
             return;
          }
          if (statsRes.status === 204) return; // Empty repository
          
          const text = await statsRes.text();
          if (!text) return;
          
          const contributors = JSON.parse(text);
          
          if (Array.isArray(contributors)) {
            contributors.forEach((c: any) => {
              if (c.type === "User") {
                const loginKey = c.login.toLowerCase();
                const existing = contributorMap.get(loginKey);
                if (existing) {
                  existing.contributions += c.contributions;
                } else {
                  contributorMap.set(loginKey, {
                    login: c.login,
                    avatar_url: c.avatar_url,
                    html_url: c.html_url,
                    contributions: c.contributions,
                  });
                }
              }
            });
          }
        } catch (e) {
          console.error(`Error processing repo ${repo.name}:`, e);
        }
      })
    );

    // Filter to only include organization members (if we successfully fetched them)
    let finalContributors = Array.from(contributorMap.values());
    if (orgMemberLogins.size > 0) {
      finalContributors = finalContributors.filter(c => orgMemberLogins.has(c.login.toLowerCase()));
    }

    // Sort by commit count in descending order
    return finalContributors.sort((a, b) => b.contributions - a.contributions);
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return [];
  }
}
