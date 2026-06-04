import { useEffect, useState } from "react";
import { Bug, Eye, GitFork, Star } from "lucide-react";

interface RepoData {
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  subscribers_count: number;
  watchers_count: number;
  created_at: string;
  updated_at: string;
}

interface StatItem {
  icon: React.ElementType;
  value: string;
  label: string;
}

const CACHE_KEY = "github_stats_react_template";
const CACHE_TTL = 60 * 60 * 1000; // 1 hour in ms

const FALLBACK: RepoData = {
  stargazers_count: 0,
  forks_count: 0,
  open_issues_count: 0,
  subscribers_count: 0,
  watchers_count: 0,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
};

function formatNumber(n: number): string {
  if (n >= 1_000_000)
    return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  return String(n);
}

function formatRelativeDate(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diff / 86_400_000);
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

function readCache(): RepoData | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { data, ts } = JSON.parse(raw) as { data: RepoData; ts: number };
    if (Date.now() - ts > CACHE_TTL) return null;
    return data;
  } catch {
    return null;
  }
}

function writeCache(data: RepoData) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: Date.now() }));
  } catch {
    // localStorage may be unavailable in private browsing
  }
}

export function GithubStats() {
  const [data, setData] = useState<RepoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const cached = readCache();
    if (cached) {
      setData(cached);
      setLoading(false);
      return;
    }

    fetch("https://api.github.com/repos/shashankaz/react-template")
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json() as Promise<RepoData>;
      })
      .then((json) => {
        writeCache(json);
        setData(json);
      })
      .catch(() => {
        setError(true);
        setData(FALLBACK);
      })
      .finally(() => setLoading(false));
  }, []);

  const repo = data ?? FALLBACK;
  const watchers = repo.subscribers_count || repo.watchers_count;

  const stats: StatItem[] = [
    { icon: Star, value: formatNumber(repo.stargazers_count), label: "Stars" },
    { icon: GitFork, value: formatNumber(repo.forks_count), label: "Forks" },
    { icon: Eye, value: formatNumber(watchers), label: "Watchers" },
    { icon: Bug, value: formatNumber(repo.open_issues_count), label: "Issues" },
  ];

  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="text-foreground mb-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Live GitHub Stats
          </h2>
          <p className="text-muted-foreground text-sm">
            {loading
              ? "Fetching latest data…"
              : error
                ? "Showing cached values — GitHub API unavailable"
                : `Last updated ${formatRelativeDate(repo.updated_at)}`}
          </p>
        </div>

        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="border-border bg-card group rounded-xl border p-5 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              {loading ? (
                <div className="bg-muted mx-auto mb-3 h-7 w-16 animate-pulse rounded-md" />
              ) : (
                <p className="text-foreground mb-1 text-3xl font-bold tabular-nums">
                  {value}
                </p>
              )}
              <div className="text-muted-foreground flex items-center justify-center gap-1.5 text-xs font-medium tracking-wider uppercase">
                <Icon className="size-3.5" />
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
