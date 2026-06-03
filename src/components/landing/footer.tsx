import { Zap } from "lucide-react";

const links: Record<string, { label: string; href: string }[]> = {
  Product: [
    { label: "Features", href: "#" },
    { label: "Changelog", href: "#" },
    { label: "Roadmap", href: "#" },
    { label: "Pricing", href: "#" },
  ],
  Resources: [
    { label: "Docs", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Components", href: "#" },
    { label: "GitHub", href: "https://github.com/shashankaz/react-template" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "License", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-border/60 border-t px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <a href="#" className="mb-3 flex items-center gap-2 font-semibold">
              <Zap className="fill-primary text-primary size-4" />
              <span>React Template</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A modern React template for shipping products fast.
            </p>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-foreground mb-3 text-sm font-semibold">
                {group}
              </h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-border/60 flex flex-col items-center justify-between gap-4 border-t pt-6 text-sm sm:flex-row">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} React Template. MIT License.
          </p>
          <p className="text-muted-foreground">
            Built with React, Tailwind CSS & shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
}
