import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Megaphone, Rocket, Globe2, Sparkles, ArrowRight, Code2, Zap, Search } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dubiflow — Get your code seen. Get hired worldwide." },
      {
        name: "description",
        content:
          "Dubiflow helps developers stand out in the age of AI. Publish projects, reach global employers, and promote your work with built-in tools for visibility and growth.",
      },
      { property: "og:title", content: "Dubiflow — Get your code seen." },
      {
        property: "og:description",
        content:
          "The platform where developers get discovered. Showcase projects, land global jobs, and promote your work — all in one place.",
      },
    ],
  }),
});

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="h-4 w-4" />
          </span>
          Dubiflow
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#how" className="hover:text-foreground transition">How it works</a>
          <a href="#features" className="hover:text-foreground transition">Features</a>
          <a href="#developers" className="hover:text-foreground transition">For developers</a>
        </nav>
        <a
          href="#cta"
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
        >
          Join waitlist <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div className="mx-auto max-w-5xl px-6 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Built for developers in the age of AI
        </div>
        <h1 className="mt-6 text-5xl md:text-7xl font-semibold leading-[1.05] text-foreground">
          Great code shouldn't{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-accent)" }}>
            go unseen.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Dubiflow is the platform where developers get discovered. Publish your projects,
          promote your work, and connect with companies hiring world-class talent — across borders,
          beyond the noise.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            Claim your profile <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#how"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-6 py-3 text-sm font-medium hover:bg-card transition"
          >
            See how it works
          </a>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Free to join · No portfolio site required · Used by developers in 40+ countries
        </p>
      </div>
    </section>
  );
}

function Problem() {
  const points = [
    {
      icon: Code2,
      title: "AI made shipping easy.",
      body: "Anyone can build. Standing out is the new hard part.",
    },
    {
      icon: Search,
      title: "Great work gets buried.",
      body: "Repos go silent. Side projects vanish. Recruiters can't find you.",
    },
    {
      icon: Globe2,
      title: "Borders limit careers.",
      body: "Global opportunities exist — but they rarely reach the right people.",
    },
  ];
  return (
    <section id="how" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-primary">The new developer reality</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
          Building is no longer the bottleneck. Being noticed is.
        </h2>
        <p className="mt-4 text-muted-foreground">
          In a world where AI ships features overnight, talented developers are getting lost in the
          flood. Dubiflow exists to change that.
        </p>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {points.map((p) => (
          <div key={p.title} className="rounded-2xl border border-border bg-card p-6">
            <p.icon className="h-5 w-5 text-primary" />
            <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: Rocket,
      title: "Publish your projects",
      body: "Turn repos and side projects into polished, shareable showcases — in minutes, not weekends.",
    },
    {
      icon: Megaphone,
      title: "Promote your work",
      body: "Built-in tools to advertise across the web, get traction, and put your craft in front of the right eyes.",
    },
    {
      icon: Briefcase,
      title: "Land global opportunities",
      body: "Get matched with companies hiring top developers — remote, on-site, anywhere on the map.",
    },
    {
      icon: Zap,
      title: "Stand out, automatically",
      body: "Smart visibility boosts surface your strongest work to recruiters and collaborators who care.",
    },
  ];
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">What Dubiflow does</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
            One platform to ship, showcase, and get hired.
          </h2>
        </div>
        <p className="md:max-w-sm text-muted-foreground">
          Everything a modern developer needs to turn skill into visibility — and visibility into a
          career.
        </p>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl border border-border bg-card p-7 hover:border-primary/40 transition"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-semibold">{f.title}</h3>
            <p className="mt-2 text-muted-foreground">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Developers() {
  const stats = [
    { k: "40+", v: "Countries" },
    { k: "10k+", v: "Projects published" },
    { k: "3x", v: "More profile views" },
    { k: "24h", v: "Avg. time to first match" },
  ];
  return (
    <section id="developers" className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-3xl border border-border bg-card p-10 md:p-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Your work, finally working for you.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Whether you're a senior engineer chasing your next role or a rising builder shipping
              your first product, Dubiflow turns the work you're already doing into momentum — for
              your career, your projects, and your reach.
            </p>
            <a
              href="#cta"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
            >
              Get started free <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.v} className="rounded-2xl border border-border bg-background/50 p-6">
                <div className="font-display text-3xl md:text-4xl text-primary">{s.k}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-4xl px-6 py-24 text-center">
      <h2 className="text-4xl md:text-5xl font-semibold">
        Ready to be seen?
      </h2>
      <p className="mt-4 text-lg text-muted-foreground">
        Join the developers using Dubiflow to publish, promote, and land opportunities worldwide.
      </p>
      <form
        className="mx-auto mt-8 flex max-w-md flex-col sm:flex-row gap-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          required
          placeholder="you@domain.dev"
          className="flex-1 rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary transition"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
        >
          Join waitlist <ArrowRight className="h-4 w-4" />
        </button>
      </form>
      <p className="mt-3 text-xs text-muted-foreground">No spam. Just early access and updates.</p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Sparkles className="h-3 w-3" />
          </span>
          © {new Date().getFullYear()} Dubiflow
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-foreground transition">Privacy</a>
          <a href="#" className="hover:text-foreground transition">Terms</a>
          <a href="#" className="hover:text-foreground transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Features />
        <Developers />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
