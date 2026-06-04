import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="px-4 py-24">
      <div className="bg-foreground mx-auto max-w-3xl rounded-2xl px-8 py-16 text-center">
        <h2 className="text-background mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Start building today
        </h2>
        <p className="text-background/70 mx-auto mb-8 max-w-md text-lg">
          Clone the repo, run{" "}
          <code className="bg-background/10 rounded px-1.5 py-0.5 font-mono text-sm">
            npm install
          </code>
          , and your new project is ready.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90 gap-2 px-5"
          >
            Get started free
            <ArrowRight className="size-4" />
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="text-background hover:bg-background/10 hover:text-background gap-2 px-5"
            asChild
          >
            <a
              href="https://github.com/shashankaz/react-template"
              target="_blank"
              rel="noopener noreferrer"
            >
              Star on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
