import { CTA } from "@/components/landing/cta";
import { Features } from "@/components/landing/features";
import { Footer } from "@/components/landing/footer";
import { GithubStats } from "@/components/landing/github-stats";
import { Hero } from "@/components/landing/hero";
import { Navbar } from "@/components/landing/navbar";

export const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <GithubStats />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};
