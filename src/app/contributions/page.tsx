import { getOrgContributors } from "@/lib/github";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, GitCommitHorizontal, UserCheck } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.085.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.254-.447-1.27.097-2.646 0 0 .84-.269 2.75 1.025A9.548 9.548 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.394.1 2.646.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.307.679.915.679 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);
import { teamMembers } from "@/data/team";

export const metadata = {
  title: "Contributions - 2Tech Studio",
  description: "Leaderboard of open-source contributions for the 2Tech organization.",
};

export default async function ContributionsPage() {
  // Runs on the server, automatically fetching data
  const contributors = await getOrgContributors("two-tech-dev");

  return (
    <main className="flex min-h-screen flex-col w-full">
      <Navbar />
      <div className="container mx-auto px-4 py-24 flex-1 w-full">
        <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-sm">
            Developer Leaderboard
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognizing the incredible developers building the future of 2Tech. Here are our top contributors based on GitHub commits.
          </p>
        </div>

        {!process.env.GITHUB_TOKEN && (
          <div className="bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded-xl p-4 text-center flex flex-col sm:flex-row items-center justify-center gap-3 shadow-lg shadow-amber-500/5">
            <span className="text-2xl">⚠️</span>
            <div className="text-sm">
              <strong>Missing GITHUB_TOKEN</strong> — You need to add this environment variable to your <code className="bg-amber-500/20 px-1 py-0.5 rounded text-amber-400">.env.local</code> file to fetch real data. (Displaying mock data)
            </div>
          </div>
        )}

        {contributors.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contributors.map((contributor, index) => {
              const isTop3 = index < 3;
              // Map GitHub login to a real team member if they provided a githubUsername
              const teamMember = teamMembers.find(m => m.githubUsername && m.githubUsername.toLowerCase() === contributor.login.toLowerCase());
              const displayName = teamMember?.name || contributor.login;
              const displayAvatar = teamMember?.avatar || contributor.avatar_url;

              return (
                <Card 
                  key={contributor.login} 
                  className={`relative overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20 border-white/5 ${
                    isTop3 ? 'bg-gradient-to-b from-card to-card/50' : 'bg-card'
                  }`}
                >
                  {/* Lighting effect for Top 3 */}
                  {index === 0 && <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-400/20 to-transparent blur-3xl group-hover:opacity-100 transition-opacity" />}
                  {index === 1 && <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-slate-300/20 to-transparent blur-3xl group-hover:opacity-100 transition-opacity" />}
                  {index === 2 && <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-400/20 to-transparent blur-3xl group-hover:opacity-100 transition-opacity" />}
                  
                  <CardHeader className="flex flex-row items-start gap-4 pb-2 z-10 relative">
                    <div className="relative">
                      <Avatar className={`w-16 h-16 border-2 shadow-lg ${index === 0 ? 'border-yellow-500/50 shadow-yellow-500/20' : index === 1 ? 'border-slate-400/50 shadow-slate-400/20' : index === 2 ? 'border-orange-500/50 shadow-orange-500/20' : 'border-background shadow-background/20'}`}>
                        <AvatarImage src={displayAvatar} alt={displayName} className="object-cover" />
                        <AvatarFallback className="bg-muted text-lg font-bold">{displayName.substring(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      {isTop3 && (
                        <div className="absolute -bottom-2 -right-2 bg-background rounded-full p-1.5 shadow-xl border border-white/10">
                          <Trophy className={`w-4 h-4 ${index === 0 ? 'text-yellow-500' : index === 1 ? 'text-slate-300' : 'text-orange-500'}`} />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 space-y-1">
                      <CardTitle className="text-xl">
                        <a href={contributor.html_url} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors line-clamp-1">
                          {displayName}
                        </a>
                      </CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground gap-2 font-medium flex-wrap">
                        <div className="flex items-center gap-1.5">
                          <GithubIcon className="w-3 h-3" />
                          <span>{contributor.login}</span>
                        </div>
                        <span className="text-border">•</span>
                        <span>Rank #{index + 1}</span>
                        {teamMember?.role && (
                          <>
                            <span className="text-border">•</span>
                            <span className="flex items-center gap-1 text-emerald-400">
                              <UserCheck className="w-3 h-3" />
                              {teamMember.role}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="z-10 relative mt-2">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-black/20 border border-white/5">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <GitCommitHorizontal className="w-4 h-4 text-emerald-400" />
                        <span className="font-mono text-lg font-bold text-foreground">{contributor.contributions}</span>
                        <span className="text-xs uppercase tracking-wider">commits</span>
                      </div>
                      {isTop3 && (
                        <Badge variant="outline" className={`border-0 ${index === 0 ? 'bg-yellow-500/10 text-yellow-500' : index === 1 ? 'bg-slate-400/10 text-slate-300' : 'bg-orange-500/10 text-orange-500'}`}>
                          {index === 0 ? 'MVP' : index === 1 ? 'Elite' : 'Pro'}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-24 border border-dashed border-white/10 rounded-2xl bg-card/20 backdrop-blur-sm">
            <GithubIcon className="w-16 h-16 text-muted-foreground mx-auto mb-6 opacity-40" />
            <h3 className="text-xl font-medium">No data found</h3>
            <p className="text-muted-foreground mt-2 max-w-sm mx-auto">Please check your GitHub Token and ensure the organization has public repositories.</p>
          </div>
        )}
      </div>
    </div>
    <Footer />
  </main>
  );
}
