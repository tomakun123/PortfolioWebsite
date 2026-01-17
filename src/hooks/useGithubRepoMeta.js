// src/hooks/useGithubRepoMeta.js
import { useEffect, useMemo, useState } from "react";

function pickRepoFields(r) {
  return {
    html_url: r.html_url,
    stargazers_count: r.stargazers_count,
    forks_count: r.forks_count,
    updated_at: r.updated_at,
    language: r.language,
    homepage: r.homepage || "",
    archived: r.archived,
    visibility: r.visibility,
  };
}

export function useGithubRepoMeta(username, projects) {
  const repoNames = useMemo(
    () => projects.map((p) => p.repo).filter(Boolean),
    [projects]
  );

  const [metaByRepo, setMetaByRepo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        setLoading(true);
        setError("");

        // Fetch each repo endpoint (clean + simple + works well for small lists)
        const results = await Promise.all(
            repoNames.map(async (repo) => {
                try {
                const res = await fetch(`https://api.github.com/repos/${username}/${repo}`);
                if (!res.ok) return [repo, null]; // don't throw
                const data = await res.json();
                return [repo, pickRepoFields(data)];
                } catch {
                return [repo, null];
                }
        })
        );

        const next = Object.fromEntries(results.filter(([, v]) => v));
        if (!cancelled) setMetaByRepo(next);

      } catch (e) {
        if (!cancelled) setError(e.message || "Failed to load GitHub metadata");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    // If no repos, don’t fetch
    if (repoNames.length === 0) {
      setMetaByRepo({});
      setLoading(false);
      setError("");
      return;
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [username, repoNames.join("|")]);

  // Merge into project objects
  const enrichedProjects = useMemo(() => {
    return projects.map((p) => {
      const meta = metaByRepo[p.repo];
      const githubUrl = meta?.html_url || `https://github.com/${username}/${p.repo}`;

      return {
        ...p,
        github: meta
          ? {
              updatedAt: meta.updated_at,
              homepage: meta.homepage,
            }
          : null,
        links: {
          ...p.links,
          github: githubUrl,
        },
      };
    });
  }, [projects, metaByRepo, username]);

  return { enrichedProjects, loading, error };
}
