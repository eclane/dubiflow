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

/* ---------- hand-drawn-ish SVG illustrations ---------- */

function SketchTerminal({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 220" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="14" width="300" height="190" rx="6" />
      <path d="M10 40 H310" />
      <circle cx="26" cy="27" r="3.5" />
      <circle cx="40" cy="27" r="3.5" />
      <circle cx="54" cy="27" r="3.5" />
      <path d="M26 60 l8 8 -8 8" />
      <path d="M44 76 H120" />
      <path d="M26 96 H180" opacity=".55" />
      <path d="M26 112 H140" opacity=".55" />
      <path d="M26 128 H200" opacity=".55" />
      <path d="M26 152 l8 8 -8 8" />
      <path d="M44 168 H100" />
      <rect x="105" y="161" width="9" height="14" />
      <path d="M230 90 q20 -8 36 6 q12 12 -2 28 q-14 14 -32 4 q-18 -10 -2 -38 z" />
      <path d="M244 102 l8 6 -6 8" />
    </svg>
  );
}

function SketchOrbit({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 260" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <ellipse cx="130" cy="130" rx="120" ry="44" />
      <ellipse cx="130" cy="130" rx="44" ry="120" />
      <ellipse cx="130" cy="130" rx="86" ry="86" />
      <circle cx="130" cy="130" r="14" fill="currentColor" />
      <circle cx="250" cy="130" r="4" fill="currentColor" />
      <circle cx="130" cy="10" r="4" fill="currentColor" />
      <circle cx="36" cy="195" r="4" fill="currentColor" />
      <circle cx="216" cy="60" r="4" fill="currentColor" />
      <circle cx="60" cy="80" r="4" fill="currentColor" />
      <text x="256" y="128" fontSize="8" fill="currentColor" stroke="none" fontFamily="monospace">SF</text>
      <text x="118" y="8" fontSize="8" fill="currentColor" stroke="none" fontFamily="monospace">BLR</text>
      <text x="20" y="210" fontSize="8" fill="currentColor" stroke="none" fontFamily="monospace">LIS</text>
      <text x="220" y="58" fontSize="8" fill="currentColor" stroke="none" fontFamily="monospace">LGS</text>
    </svg>
  );
}

function SketchStack({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 220" className={className} fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <rect x="40" y="30" width="180" height="40" rx="4" />
      <rect x="50" y="80" width="180" height="40" rx="4" />
      <rect x="30" y="130" width="180" height="40" rx="4" />
      <path d="M58 50 H140" opacity=".6" />
      <path d="M68 100 H170" opacity=".6" />
      <path d="M48 150 H120" opacity=".6" />
      <circle cx="200" cy="50" r="6" />
      <circle cx="210" cy="100" r="6" fill="currentColor" />
      <circle cx="190" cy="150" r="6" />
      <path d="M14 192 q60 -20 120 0 t120 0" opacity=".5" />
    </svg>
  );
}

function SketchSignal({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 180" className={className} fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
      <circle cx="60" cy="120" r="10" fill="currentColor" />
      <path d="M60 120 q40 -90 80 -40" />
      <path d="M60 120 q60 -50 110 -10" opacity=".7" />
      <path d="M60 120 q90 -10 150 30" opacity=".5" />
      <circle cx="140" cy="80" r="5" />
      <circle cx="170" cy="110" r="5" />
      <circle cx="210" cy="150" r="5" />
      <path d="M20 160 H240" opacity=".4" />
      <path d="M20 160 v-90" opacity=".4" />
    </svg>
  );
}

function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14 q4 -10 8 -10 t8 10" />
      <path d="M4 14 q4 10 8 10 t8 -10" opacity=".4" />
    </svg>
  );
}

/* ---------- sections ---------- */

function Nav() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-5">
        <a href="/" className="font-display text-base font-medium tracking-tight">
          dubiflow<span className="text-primary">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#why" className="hover:text-foreground transition">why</a>
          <a href="#what" className="hover:text-foreground transition">what you get</a>
          <a href="#how" className="hover:text-foreground transition">how it works</a>
          <a href="#showcase" className="hover:text-foreground transition">showcase</a>
          <a href="#voices" className="hover:text-foreground transition">voices</a>
          <a href="#faq" className="hover:text-foreground transition">faq</a>
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
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-20 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <p className="text-sm text-muted-foreground font-mono">— A small note for developers · Issue №01 · May 2026</p>
          <h1 className="mt-8 font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
            You shipped the thing.
            <br />
            <span className="text-muted-foreground italic">Now nobody knows it exists.</span>
          </h1>
          <p className="mt-8 text-lg text-foreground/80 max-w-xl leading-relaxed">
            AI made it cheap to build software. It also made it harder than ever to
            be heard. Repos rot. Demos get scrolled past. Good developers in the
            wrong timezone never get the call.
          </p>
          <p className="mt-4 text-lg max-w-xl leading-relaxed">
            <span className="bg-primary/15 px-1">Dubiflow</span> is the small fix
            for that. A place to publish what you make, push it out into the
            world, and get on the radar of teams hiring — wherever you happen to live.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#join"
              className="inline-flex items-center gap-1.5 text-sm font-medium border-b border-foreground pb-1 hover:text-primary hover:border-primary transition"
            >
              Put your name down <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#how" className="text-sm text-muted-foreground hover:text-foreground transition">
              or read how it works ↓
            </a>
            <p className="text-xs text-muted-foreground font-mono">~600 devs already in.</p>
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <SketchTerminal className="w-full text-foreground/85" />
          <p className="absolute -bottom-2 right-2 text-xs text-muted-foreground font-mono italic">
            fig. 01 — your repo, before
          </p>
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const items = [
    "shipped weekly",
    "no portfolio site required",
    "remote-first by default",
    "40+ countries",
    "real humans on the other end",
    "your work, finally seen",
  ];
  return (
    <div className="border-b border-border bg-foreground text-background overflow-hidden">
      <div className="flex gap-12 px-6 py-3 whitespace-nowrap text-sm font-mono">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            {t} <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Why() {
  return (
    <section id="why" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-widest text-primary font-mono">01 — the problem</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight">
            Building isn't the bottleneck anymore.
          </h2>
          <SketchSignal className="mt-10 w-full max-w-[260px] text-foreground/80" />
        </div>
        <div className="md:col-span-8 space-y-7 text-foreground/85 leading-relaxed text-lg">
          <p className="text-2xl font-display leading-snug">
            Five years ago, the hard part was making the thing. Today the hard
            part is making anyone <em>care</em>.
          </p>
          <p>
            Twitter is exhausting, LinkedIn is theatre, and most job boards are
            a slot machine. Meanwhile the work that would actually get you
            hired — the side project, the weird tool, the clean library — sits
            at 3 stars on GitHub and never finds the people it was made for.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 pt-4">
            {[
              { k: "92%", v: "of side projects never reach 100 users" },
              { k: "3.4yr", v: "average time stuck in the wrong city" },
              { k: "1 in 27", v: "applications get a real reply" },
            ].map((s) => (
              <div key={s.k} className="border-l-2 border-primary pl-4">
                <div className="font-display text-2xl">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1 leading-snug">{s.v}</div>
              </div>
            ))}
          </div>
          <p className="text-foreground pt-2">That's the gap we sit in.</p>
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  const lines = [
    "Work should travel further than the person who made it.",
    "A great repo deserves more than a star.",
    "Geography is not talent.",
    "Self-promotion shouldn't be a full-time job.",
    "The internet is big. Your audience is on it.",
  ];
  return (
    <section className="border-b border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-widest text-primary font-mono">a small manifesto</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight">
            Five things we believe, plainly.
          </h2>
        </div>
        <ol className="md:col-span-8 space-y-2">
          {lines.map((l, i) => (
            <li key={l} className="flex items-baseline gap-6 border-b border-border py-5">
              <span className="font-mono text-sm text-muted-foreground w-8">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-display text-xl md:text-2xl leading-snug">{l}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function What() {
  const rows = [
    {
      n: "a.",
      t: "Publish, properly.",
      b: "Turn a repo or a half-finished side project into something you'd actually share at dinner. Pulled from your GitHub, dressed up, ready to send. No portfolio site to maintain.",
      tag: "publishing",
    },
    {
      n: "b.",
      t: "Get it in front of people.",
      b: "We push your work into the channels that matter — feeds, newsletters, hiring managers' inboxes — instead of leaving you to do it yourself at 11pm on a Sunday.",
      tag: "distribution",
    },
    {
      n: "c.",
      t: "Hear back from companies.",
      b: "Teams hiring across 40+ countries browse Dubiflow looking for devs who ship. Remote, on-site, contract, full-time — your call, your filters.",
      tag: "opportunities",
    },
    {
      n: "d.",
      t: "Stay in the background.",
      b: "Your profile keeps working when you don't. New project? It goes out. New role surfaces? You're already on the shortlist before you've opened your laptop.",
      tag: "always-on",
    },
  ];
  return (
    <section id="what" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-widest text-primary font-mono">02 — what you get</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight max-w-2xl">
              Four things, done well. Nothing else.
            </h2>
          </div>
          <p className="md:col-span-5 text-muted-foreground leading-relaxed">
            We resisted the urge to bolt on a feed, a chat, a streak counter
            and a coin. The product is small on purpose.
          </p>
        </div>
        <ul className="mt-14 divide-y divide-border border-y border-border">
          {rows.map((r) => (
            <li key={r.n} className="grid md:grid-cols-12 gap-6 py-8 group">
              <div className="md:col-span-2 text-sm text-muted-foreground font-mono">{r.n}</div>
              <div className="md:col-span-3">
                <div className="font-display text-xl">{r.t}</div>
                <div className="mt-2 text-xs text-muted-foreground font-mono">/ {r.tag}</div>
              </div>
              <p className="md:col-span-6 text-foreground/80 leading-relaxed">{r.b}</p>
              <div className="md:col-span-1 flex md:justify-end">
                <Mark className="w-5 h-5 text-primary group-hover:rotate-45 transition" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function How() {
  const steps = [
    {
      n: "step one",
      t: "Connect your GitHub.",
      b: "Two clicks. We pull your projects, READMEs and the languages you actually use, not the ones you listed in 2019.",
      ill: <SketchStack className="w-full text-foreground/80" />,
    },
    {
      n: "step two",
      t: "Pick what to put forward.",
      b: "You choose the three projects that say the most about you. We help write the one-liner that makes someone click.",
      ill: <SketchTerminal className="w-full text-foreground/80" />,
    },
    {
      n: "step three",
      t: "We do the loud part.",
      b: "Your work goes out across our channels and partner publications. Companies hiring see it. You get a quiet email when something matches.",
      ill: <SketchOrbit className="w-full text-foreground/80" />,
    },
  ];
  return (
    <section id="how" className="border-b border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-primary font-mono">03 — how it works</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight">
            Twenty minutes to set up. Then it runs without you.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-10">
          {steps.map((s, i) => (
            <div key={s.t} className="border-t border-foreground pt-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-mono">
                {s.n}
              </p>
              <h3 className="mt-3 font-display text-2xl leading-snug">{s.t}</h3>
              <p className="mt-3 text-foreground/80 leading-relaxed">{s.b}</p>
              <div className="mt-8 aspect-[4/3] flex items-center justify-center bg-background border border-border rounded-sm p-4">
                {s.ill}
              </div>
              <p className="mt-3 text-xs text-muted-foreground font-mono italic">
                fig. 0{i + 2} — {s.t.toLowerCase().replace(".", "")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  const projects = [
    { name: "tinyqueue", lang: "rust", by: "M. Hassan · Lagos", desc: "A 400-line job queue that outpaces Redis on small loads.", views: "12.4k" },
    { name: "paperboy", lang: "ts", by: "L. Andersson · Tallinn", desc: "RSS, but for the parts of the web that don't have feeds.", views: "8.1k" },
    { name: "leaflet.osm", lang: "py", by: "C. Okafor · Nairobi", desc: "Offline-first map tiles for field workers in low-bandwidth areas.", views: "21.7k" },
    { name: "milk-router", lang: "go", by: "I. Petrova · Sofia", desc: "Edge router that survived a 9× traffic spike with no config changes.", views: "5.9k" },
  ];
  return (
    <section id="showcase" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-widest text-primary font-mono">04 — recently surfaced</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight">
              A handful of things that traveled further than expected.
            </h2>
          </div>
          <p className="md:col-span-5 text-muted-foreground leading-relaxed">
            Real projects, recently published through Dubiflow. Each one led to
            either a hire, an acquisition conversation, or a wave of new users.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 gap-px bg-border border border-border">
          {projects.map((p) => (
            <article key={p.name} className="bg-background p-8 hover:bg-card/60 transition group">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs text-muted-foreground font-mono">/{p.lang}</div>
                  <h3 className="mt-2 font-display text-2xl">{p.name}</h3>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
              </div>
              <p className="mt-6 text-foreground/80 leading-relaxed">{p.desc}</p>
              <div className="mt-8 pt-4 border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span>{p.by}</span>
                <span>{p.views} reached</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Voices() {
  const quotes = [
    {
      q: "I'd been writing the same Show HN draft for two years. Posted on Dubiflow on a Tuesday, signed an offer the next Friday.",
      who: "Adaeze N.",
      role: "Backend engineer, ex-fintech",
      where: "Lagos → remote",
    },
    {
      q: "Three people I actually wanted to work with read my repo. That had never happened before.",
      who: "Tomás R.",
      role: "Distributed systems",
      where: "Porto",
    },
    {
      q: "Honestly I joined to lurk. Two months later I'm collaborating with strangers on something I'm proud of.",
      who: "Hina K.",
      role: "Frontend / WebGL",
      where: "Osaka",
    },
  ];
  return (
    <section id="voices" className="border-b border-border bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-widest text-primary font-mono">05 — voices</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight text-background">
              People who got out of the void.
            </h2>
          </div>
          <p className="md:col-span-5 text-background/60 leading-relaxed">
            A few of the early devs on Dubiflow, in their own words. Lightly
            edited for length, not for polish.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-px bg-background/10 border border-background/10">
          {quotes.map((q) => (
            <figure key={q.who} className="bg-foreground p-8 flex flex-col justify-between min-h-[280px]">
              <blockquote className="font-display text-xl leading-snug text-background">
                <span className="text-primary">"</span>
                {q.q}
                <span className="text-primary">"</span>
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-background/15 text-sm text-background/70">
                <div className="text-background">{q.who}</div>
                <div className="font-mono text-xs mt-1">{q.role} · {q.where}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Who() {
  return (
    <section id="who" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-widest text-primary font-mono">06 — who it's for</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight">
            Probably you, if any of this lands.
          </h2>
          <SketchOrbit className="mt-10 w-full max-w-[320px] text-foreground/80" />
        </div>
        <div className="md:col-span-7 space-y-1">
          {[
            "You ship more than you post.",
            "You live somewhere that recruiters forget exists.",
            "Your best project has 7 stars and you know it deserves more.",
            "You're tired of dressing up résumés to get ignored.",
            "You'd rather have the work speak. You just need a louder room.",
            "You like small, sharp tools more than sprawling platforms.",
          ].map((l, i) => (
            <div key={l} className="flex items-baseline gap-6 border-b border-border py-5">
              <span className="font-mono text-xs text-muted-foreground w-6">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-lg text-foreground/85">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "Is Dubiflow free?",
      a: "Yes, for developers. Always. We make money from companies that hire through us — never from you.",
    },
    {
      q: "Do I need to be looking for a job?",
      a: "No. Plenty of people use Dubiflow only to publish work. The hiring side is opt-in and quiet.",
    },
    {
      q: "What kind of work fits?",
      a: "Side projects, libraries, CLIs, design tools, weird experiments, polished products. If you'd link to it in a bio, it fits.",
    },
    {
      q: "How is this different from GitHub or LinkedIn?",
      a: "GitHub stores your code. LinkedIn stores your titles. Dubiflow puts the actual work in front of people who'd care about it.",
    },
    {
      q: "Where are you based?",
      a: "We're a small team distributed between Lisbon, Lagos and São Paulo. The product is built the way we wished it existed.",
    },
  ];
  return (
    <section id="faq" className="border-b border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-widest text-primary font-mono">07 — questions</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight">
            The things people email us about.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Couldn't find yours? Write to{" "}
            <a href="#" className="underline decoration-primary underline-offset-4">hello@dubiflow.com</a>
            {" "}— a real person reads it.
          </p>
        </div>
        <ul className="md:col-span-8 divide-y divide-border border-y border-border">
          {items.map((it) => (
            <li key={it.q} className="py-7">
              <h3 className="font-display text-xl">{it.q}</h3>
              <p className="mt-3 text-foreground/80 leading-relaxed max-w-2xl">{it.a}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Join() {
  return (
    <section id="join" className="border-b border-border">
      <div className="mx-auto max-w-3xl px-6 py-28 text-center">
        <p className="text-xs uppercase tracking-widest text-primary font-mono">08 — the small ask</p>
        <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
          Want in early?
        </h2>
        <p className="mt-6 text-foreground/75 leading-relaxed max-w-xl mx-auto">
          We're letting people in slowly so the network stays good. Drop your
          email — we'll write back when there's a spot, not before.
        </p>
        <form
          className="mt-10 flex flex-col sm:flex-row gap-3 border-b border-foreground pb-2 max-w-xl mx-auto text-left"
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
    <footer>
      <div className="mx-auto max-w-6xl px-6 py-14 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="font-display text-2xl">dubiflow<span className="text-primary">.</span></div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            A small place for developers who'd rather build than perform.
            Made between Lisbon, Lagos & São Paulo.
          </p>
        </div>
        <div className="md:col-span-7 grid grid-cols-3 gap-6 text-sm">
          <div>
            <p className="font-mono text-xs uppercase text-muted-foreground">product</p>
            <ul className="mt-4 space-y-2">
              <li><a href="#what" className="hover:text-primary transition">What you get</a></li>
              <li><a href="#how" className="hover:text-primary transition">How it works</a></li>
              <li><a href="#showcase" className="hover:text-primary transition">Showcase</a></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase text-muted-foreground">company</p>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-primary transition">About</a></li>
              <li><a href="#" className="hover:text-primary transition">Notes</a></li>
              <li><a href="#" className="hover:text-primary transition">Careers</a></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase text-muted-foreground">small print</p>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-primary transition">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition">Terms</a></li>
              <li><a href="#" className="hover:text-primary transition">Say hi</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between text-xs text-muted-foreground font-mono">
          <span>© {new Date().getFullYear()} Dubiflow. Built by devs, for devs who ship.</span>
          <span>v0.9 — preview</span>
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
        <Ticker />
        <Why />
        <Manifesto />
        <What />
        <How />
        <Showcase />
        <Voices />
        <Who />
        <FAQ />
        <Join />
      </main>
      <Footer />
    </div>
  );
}
