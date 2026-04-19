import { useState, useEffect } from "react";
import { fetchKernelRepositories, type Project } from "@/services/githubService";

export function useGithubRepositories() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const repos = await fetchKernelRepositories();
        setProjects(repos);
      } catch (err) {
        const message = err instanceof Error ? err.message : "Failed to load repositories";
        setError(message);
        console.error("Error loading projects:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return { projects, loading, error };
}
