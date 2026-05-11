import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dubiflow — a place for devs who actually ship" },
      {
        name: "description",
        content:
          "Dubiflow is where developers publish projects, get them in front of real people, and find work across borders. Less shouting into the void.",
      },
    ],
  }),
});

function Nav() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-5xl flex items-center justify-between px-6 py-5">
        <a href="/" className="font-display text-base font-medium tracking-tight">
          dubiflow<span className="text-primary">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#why" className="hover:text-foreground transition">why</a>
          <a href="#what" className="hover:text-foreground transition">what you get</a>
          <a href="#who" className="hover:text-foreground transition">who it's for</a>
        </nav>
        <a
          href="#join"
          className="text-sm underline underline-offset-4 decoration-primary/60 hover:decoration-primary"
        >
          get on the list
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-20 pb-16">
      <p className="text-sm text-muted-foreground">— A small note for developers, May 2026</p>
      <h1 className="mt-8 font-display text-4xl md:text-6xl leading-[1.08] tracking-tight max-w-3xl">
        You shipped the thing.
        <br />
        <span className="text-muted-foreground">Now nobody knows it exists.</span>
      </h1>
      <div className="mt-10 grid md:grid-cols-[2fr_1fr] gap-10 items-end">
        <p className="text-lg text-foreground/80 max-w-xl leading-relaxed">
          AI made it cheap to build software. It also made it harder than ever to
          be heard. Repos rot. Demos get scrolled past. Good developers in the
          wrong timezone never get the call.
          <br />
          <br />
          <span className="text-foreground">Dubiflow is the small fix for that.</span>{" "}
          A place to publish what you make, push it out into the world, and get
          on the radar of teams hiring — wherever you happen to live.
        </p>
        <div className="md:text-right">
          <a
            href="#join"
            className="inline-flex items-center gap-1.5 text-sm font-medium border-b border-foreground pb-1 hover:text-primary hover:border-primary transition"
          >
            Put your name down <ArrowUpRight className="h-4 w-4" />
          </a>
          <p className="mt-3 text-xs text-muted-foreground">~600 devs already in.</p>
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="why" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-widest text-primary">01 — the problem</p>
          <h2 className="mt-4 font-display text-2xl md:text-3xl leading-tight">
            Building isn't the bottleneck anymore.
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6 text-foreground/80 leading-relaxed">
          <p>
            Five years ago, the hard part was making the thing. Today the hard
            part is making anyone <em>care</em>. Twitter is exhausting, LinkedIn
            is theatre, and most job boards are a slot machine.
          </p>
          <p>
            Meanwhile the work that would actually get you hired — the side
            project, the weird tool, the clean library — sits at 3 stars on
            GitHub and never finds the people it was made for.
          </p>
          <p className="text-foreground">That's the gap we sit in.</p>
        </div>
      </div>
    </section>
  );
}

function What() {
  const rows = [
    {
      n: "a.",
      t: "Publish, properly.",
      b: "Turn a repo or a half-finished side project into something you'd actually share at dinner. No portfolio site to maintain.",
    },
    {
      n: "b.",
      t: "Get it in front of people.",
      b: "We push your work into the channels that matter — feeds, newsletters, hiring managers' inboxes — instead of leaving you to do it yourself at 11pm.",
    },
    {
      n: "c.",
      t: "Hear back from companies.",
      b: "Teams hiring across 40+ countries browse Dubiflow looking for devs who ship. Remote, on-site, contract, full-time — your call.",
    },
    {
      n: "d.",
      t: "Stay in the background.",
      b: "Your profile keeps working when you don't. New project? It goes out. New role? You're already on the shortlist.",
    },
  ];
  return (
    <section id="what" className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-xs uppercase tracking-widest text-primary">02 — what you get</p>
        <h2 className="mt-4 font-display text-2xl md:text-3xl leading-tight max-w-2xl">
          Four things, done well. Nothing else.
        </h2>
        <ul className="mt-12 divide-y divide-border border-y border-border">
          {rows.map((r) => (
            <li key={r.n} className="grid md:grid-cols-12 gap-6 py-7">
              <div className="md:col-span-2 text-sm text-muted-foreground font-mono">{r.n}</div>
              <div className="md:col-span-3 font-display text-lg">{r.t}</div>
              <p className="md:col-span-7 text-foreground/75 leading-relaxed">{r.b}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Who() {
  return (
    <section id="who" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-xs uppercase tracking-widest text-primary">03 — who it's for</p>
          <h2 className="mt-4 font-display text-2xl md:text-3xl leading-tight">
            Probably you, if any of this lands.
          </h2>
        </div>
        <ul className="space-y-5 text-foreground/85 leading-relaxed">
          <li className="flex gap-4"><span className="text-primary">·</span>You ship more than you post.</li>
          <li className="flex gap-4"><span className="text-primary">·</span>You live somewhere that recruiters forget exists.</li>
          <li className="flex gap-4"><span className="text-primary">·</span>Your best project has 7 stars and you know it deserves more.</li>
          <li className="flex gap-4"><span className="text-primary">·</span>You're tired of dressing up résumés to get ignored.</li>
          <li className="flex gap-4"><span className="text-primary">·</span>You'd rather have the work speak. You just need a louder room.</li>
        </ul>
      </div>
    </section>
  );
}

function Join() {
  return (
    <section id="join" className="border-t border-border">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="font-display text-3xl md:text-4xl leading-tight">
          Want in early?
        </h2>
        <p className="mt-4 text-foreground/75 leading-relaxed">
          We're letting people in slowly so the network stays good. Drop your
          email — we'll write back when there's a spot, not before.
        </p>
        <form
          className="mt-8 flex flex-col sm:flex-row gap-3 border-b border-foreground pb-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="your@email"
            className="flex-1 bg-transparent py-2 text-base outline-none placeholder:text-muted-foreground"
          />
          <button
            type="submit"
            className="text-sm font-medium text-primary hover:text-foreground transition self-start sm:self-auto"
          >
            send it →
          </button>
        </form>
        <p className="mt-4 text-xs text-muted-foreground">
          One email, occasionally. Unsubscribe lives at the bottom of every one.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-start md:items-center justify-between gap-3 px-6 py-8 text-xs text-muted-foreground">
        <div>
          Dubiflow — built by devs, for devs who ship. Made between Lisbon, Lagos & São Paulo.
        </div>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-foreground transition">privacy</a>
          <a href="#" className="hover:text-foreground transition">terms</a>
          <a href="#" className="hover:text-foreground transition">say hi</a>
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
        <Why />
        <What />
        <Who />
        <Join />
      </main>
      <Footer />
    </div>
  );
}
