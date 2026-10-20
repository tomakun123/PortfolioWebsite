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
    defaultBranch: r.default_branch,
  };
}

// "owner/repo" for a project, or null if it has no public repo
function repoPath(p, username) {
  return p.repo ? `${p.owner || username}/${p.repo}` : null;
}

export function useGithubRepoMeta(username, projects) {
  // [projectId, "owner/repo"] for every project with a repo
  const targets = useMemo(
    () =>
      projects
        .map((p) => [p.id, repoPath(p, username)])
        .filter(([, path]) => path),
    [projects, username]
  );
  // Stable dependency for the fetch effect
  const targetsKey = targets.map(([id, path]) => `${id}=${path}`).join("|");

  const [metaById, setMetaById] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    const list = targetsKey
      ? targetsKey.split("|").map((t) => t.split("="))
      : [];

    async function run() {
      try {
        setLoading(true);
        setError("");

        // Fetch each repo endpoint (clean + simple + works well for small lists)
        const results = await Promise.all(
            list.map(async ([id, path]) => {
                try {
                const res = await fetch(`https://api.github.com/repos/${path}`);
                if (!res.ok) return [id, null]; // don't throw
                const data = await res.json();
                return [id, pickRepoFields(data)];
                } catch {
                return [id, null];
                }
        })
        );

        const next = Object.fromEntries(results.filter(([, v]) => v));
        if (!cancelled) setMetaById(next);

      } catch (e) {
        if (!cancelled) setError(e.message || "Failed to load GitHub metadata");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    // If no repos, don’t fetch
    if (list.length === 0) {
      setMetaById({});
      setLoading(false);
      setError("");
      return;
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [targetsKey]);

  // Merge into project objects
  const enrichedProjects = useMemo(() => {
    return projects.map((p) => {
      const meta = metaById[p.id];
      const path = repoPath(p, username);
      const githubUrl = meta?.html_url || (path && `https://github.com/${path}`);

      return {
        ...p,
        github: meta
          ? {
              updatedAt: meta.updated_at,
              homepage: meta.homepage,
            }
          : null,
        // Project's own links first (live site, store), then GitHub if it has a repo
        links: [
          ...(p.links || []),
          ...(githubUrl ? [{ label: "GitHub", href: githubUrl, github: true }] : []),
        ],
      };
    });
  }, [projects, metaById, username]);

  return { enrichedProjects, loading, error };
}
