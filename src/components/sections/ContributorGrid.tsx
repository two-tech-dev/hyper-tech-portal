"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { teamMembers } from "@/data/team";

interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

function SkeletonRow() {
  return (
    <tr className="border-b border-outline-variant/10">
      <td className="py-5 px-6"><div className="h-5 w-6 rounded bg-surface-container-high animate-pulse" /></td>
      <td className="py-5 px-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-surface-container-high animate-pulse" />
          <div className="space-y-2">
            <div className="h-4 w-24 rounded bg-surface-container-high animate-pulse" />
            <div className="h-3 w-16 rounded bg-surface-container-high animate-pulse" />
          </div>
        </div>
      </td>
      <td className="py-5 px-6"><div className="h-4 w-12 rounded bg-surface-container-high animate-pulse" /></td>
      <td className="py-5 px-6"><div className="h-4 w-20 rounded bg-surface-container-high animate-pulse" /></td>
    </tr>
  );
}

export function ContributorGrid() {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/contributions")
      .then((res) => res.json())
      .then((data) => setContributors(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (error || (!loading && contributors.length === 0)) {
    return (
      <div className="text-center py-24 border border-dashed border-outline-variant/20 rounded-2xl bg-surface-container/20 backdrop-blur-sm">
        <span className="material-symbols-outlined text-6xl text-on-surface-variant opacity-40 mb-6 block">
          code
        </span>
        <h3 className="text-xl font-medium text-on-surface">No data found</h3>
        <p className="text-on-surface-variant mt-2 max-w-sm mx-auto">
          Please check your GitHub Token and ensure the organization has public repositories.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-layer-1 rounded-xl overflow-hidden shadow-2xl">
      <div className="overflow-auto max-h-[500px] sm:max-h-[600px]">
        <table className="w-full text-left border-collapse">
          <thead className="sticky top-0 z-10 bg-surface-container-low">
            <tr className="border-b border-outline-variant/20">
              <th className="py-3 sm:py-4 px-3 sm:px-6 text-label-sm text-on-surface-variant uppercase tracking-wider w-12">Rank</th>
              <th className="py-3 sm:py-4 px-3 sm:px-6 text-label-sm text-on-surface-variant uppercase tracking-wider">Engineer</th>
              <th className="py-3 sm:py-4 px-3 sm:px-6 text-label-sm text-on-surface-variant uppercase tracking-wider w-20 text-right">Commits</th>
              <th className="py-3 sm:py-4 px-3 sm:px-6 text-label-sm text-on-surface-variant uppercase tracking-wider text-right hidden sm:table-cell">Role</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/10">
            {loading ? (
              Array.from({ length: 6 }).map((_, i) => <SkeletonRow key={i} />)
            ) : (
              contributors.map((contributor, index) => {
                const teamMember = teamMembers.find(
                  (m) => m.githubUsername && m.githubUsername.toLowerCase() === contributor.login.toLowerCase()
                );
                const displayName = teamMember?.name || contributor.login;
                const displayAvatar = teamMember?.avatar || contributor.avatar_url;

                return (
                  <motion.tr
                    key={contributor.login}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="hover:bg-surface-container/50 transition-colors"
                  >
                    <td className="py-4 sm:py-5 px-3 sm:px-6 text-base sm:text-body-lg font-bold" style={{ color: index === 0 ? 'var(--primary)' : 'var(--on-surface-variant)' }}>
                      {String(index + 1).padStart(2, "0")}
                    </td>
                    <td className="py-4 sm:py-5 px-3 sm:px-6">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <img
                          alt={displayName}
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-outline-variant/30 object-cover shrink-0"
                          src={displayAvatar}
                        />
                        <div className="min-w-0">
                          <a
                            href={contributor.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm sm:text-body-md text-on-surface font-semibold hover:text-primary transition-colors truncate block"
                          >
                            {displayName}
                          </a>
                          <div className="text-label-sm text-on-surface-variant truncate">
                            @{contributor.login}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 sm:py-5 px-3 sm:px-6 text-label-sm text-on-surface text-right">
                      {contributor.contributions.toLocaleString()}
                    </td>
                    <td className="py-4 sm:py-5 px-3 sm:px-6 text-right hidden sm:table-cell">
                      {teamMember?.role && (
                        <span className="px-2 sm:px-3 py-1 bg-surface-container rounded-full text-label-sm text-tertiary-fixed-dim border border-outline-variant/20 whitespace-nowrap">
                          {teamMember.role}
                        </span>
                      )}
                    </td>
                  </motion.tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      <div className="p-6 border-t border-outline-variant/20 bg-surface-container-lowest flex justify-end items-center">
        <a
          href="https://github.com/two-tech-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-transparent border border-outline-variant/30 rounded text-label-sm text-on-surface hover:text-primary hover:border-primary transition-colors"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}
