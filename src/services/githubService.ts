interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  topics: string[];
  language: string | null;
  owner: {
    avatar_url: string;
  };
}

export interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  stars: number;
  tags: string[];
  language: string | null;
  logo?: string;
}

const GITHUB_API = "https://api.github.com";
const ORG_NAME = "kernel-uepa";
const REPOS_LIMIT = 8;

export async function fetchKernelRepositories(): Promise<Project[]> {
  try {
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    const headers: HeadersInit = {
      "Accept": "application/vnd.github.v3+json",
    };

    if (token) {
      headers["Authorization"] = `token ${token}`;
    }

    const response = await fetch(
      `${GITHUB_API}/orgs/${ORG_NAME}/repos?per_page=100&sort=stars&order=desc`,
      { headers }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos: GithubRepo[] = await response.json();

    const projects: Project[] = repos
      .slice(0, REPOS_LIMIT)
      .map((repo) => ({
        id: repo.id,
        title: repo.name,
        description: repo.description || "No description provided",
        link: repo.html_url,
        stars: repo.stargazers_count,
        tags: [...(repo.topics || []), repo.language || ""].filter(Boolean),
        language: repo.language,
        logo: repo.owner.avatar_url,
      }));

    return projects;
  } catch (error) {
    console.error("Failed to fetch GitHub repositories:", error);
    return [];
  }
}
