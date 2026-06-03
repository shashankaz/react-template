import {
  Blocks,
  Gauge,
  Layers,
  Moon,
  Paintbrush,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Gauge,
    title: "Blazing fast",
    description:
      "Powered by Vite and Rolldown for near-instant HMR and optimized production builds.",
  },
  {
    icon: Paintbrush,
    title: "Tailwind CSS v4",
    description:
      "The latest Tailwind with a modern CSS-first config, design tokens, and utility-first workflow.",
  },
  {
    icon: Blocks,
    title: "shadcn/ui components",
    description:
      "A full library of accessible, composable UI components you own and can customize freely.",
  },
  {
    icon: Layers,
    title: "TypeScript first",
    description:
      "Strict TypeScript throughout — full type safety from component props to API boundaries.",
  },
  {
    icon: Moon,
    title: "Dark mode",
    description:
      "Light and dark themes wired up with next-themes and CSS variables out of the box.",
  },
  {
    icon: ShieldCheck,
    title: "ESLint & Prettier",
    description:
      "Consistent code style enforced automatically with import sorting and Tailwind class ordering.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything you need to ship
          </h2>
          <p className="text-muted-foreground mx-auto max-w-lg text-lg">
            No more config boilerplate. Clone, install, and start building your
            product in minutes.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="border-border bg-card rounded-xl border p-6 transition-shadow hover:shadow-md"
              >
                <div className="bg-muted mb-4 inline-flex rounded-lg p-2.5">
                  <Icon className="text-foreground size-5" />
                </div>
                <h3 className="text-foreground mb-2 font-semibold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
