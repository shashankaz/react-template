import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-4 pt-40 text-center">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-foreground mb-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          The React template
          <br />
          <span className="text-muted-foreground">built to ship fast</span>
        </h1>

        <p className="text-muted-foreground mx-auto mb-8 max-w-xl text-lg leading-relaxed">
          A production-ready starter with Tailwind CSS, shadcn/ui, TypeScript,
          and Vite — everything configured so you can focus on building your
          product.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" className="gap-2 px-5">
            Get started
            <ArrowRight className="size-4" />
          </Button>
          <Button variant="outline" size="lg" className="gap-2 px-5" asChild>
            <a href="https://github.com/shashankaz/react-template" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </Button>
        </div>

        <p className="text-muted-foreground mt-6 text-sm">
          Free and open-source · MIT License
        </p>
      </div>

      <div className="border-border bg-muted/30 mx-auto mt-16 w-full max-w-4xl overflow-hidden rounded-2xl border shadow-xl">
        <div className="border-border flex items-center gap-1.5 border-b px-4 py-3">
          <span className="bg-destructive/60 size-2.5 rounded-full" />
          <span className="size-2.5 rounded-full bg-yellow-400/60" />
          <span className="size-2.5 rounded-full bg-green-400/60" />
          <span className="text-muted-foreground ml-3 text-xs">app.tsx</span>
        </div>
        <pre className="overflow-x-auto p-6 text-left text-sm leading-relaxed">
          <code>
            <span className="text-muted-foreground">
              {"// Your app starts here\n"}
            </span>
            <span className="text-blue-500 dark:text-blue-400">{"import"}</span>
            <span className="text-foreground">{" { App } "}</span>
            <span className="text-blue-500 dark:text-blue-400">{"from"}</span>
            <span className="text-green-600 dark:text-green-400">
              {' "./app"'}
            </span>
            <span className="text-foreground">{";\n\n"}</span>
            <span className="text-blue-500 dark:text-blue-400">
              {"export default"}
            </span>
            <span className="text-foreground">{" function "}</span>
            <span className="text-yellow-600 dark:text-yellow-400">
              {"Page"}
            </span>
            <span className="text-foreground">{"() {\n  "}</span>
            <span className="text-blue-500 dark:text-blue-400">{"return"}</span>
            <span className="text-foreground">{" <"}</span>
            <span className="text-orange-500">{"App"}</span>
            <span className="text-foreground">{" />\n}"}</span>
          </code>
        </pre>
      </div>
    </section>
  );
}
