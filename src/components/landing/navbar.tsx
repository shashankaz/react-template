import { useState } from "react";
import { Menu, Star, X, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

const navLinks = [
  { label: "Changelog", href: "#" },
  { label: "Roadmap", href: "#" },
  { label: "Docs", href: "#" },
  { label: "Blog", href: "#" },
];

const GITHUB_URL = "https://github.com/shashankaz/react-template";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-border/60 bg-background/80 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <Zap className="fill-primary text-primary size-5" />
          <span>React Template</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-1 md:flex">
          <Button variant="ghost" size="sm" className="gap-1.5" asChild>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <Star className="size-3.5" />
              Star on GitHub
            </a>
          </Button>
          <ModeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ModeToggle />
          <button
            className="text-muted-foreground hover:text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-border/60 bg-background border-t px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-3 pt-4 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4">
            <Button
              variant="outline"
              size="sm"
              className="w-full gap-1.5"
              asChild
            >
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <Star className="size-3.5" />
                Star on GitHub
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
