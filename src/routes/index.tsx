import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Mail, Phone, Github, Linkedin, MapPin, Download, Plus, Minus } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const PROJECTS = [
  {
    n: "01",
    title: "Recipe Management Application",
    year: "2025",
    tag: "Web App",
    stack: ["React", "Node.js", "HTML", "CSS"],
    body: "A social recipe platform where users discover, save and publish recipes. Features step-by-step instructions, video walkthroughs, likes and threaded comments.",
  },
  {
    n: "02",
    title: "Learning Management System",
    year: "2024",
    tag: "Web App",
    stack: ["Full-stack", "Role-based Auth"],
    body: "A scalable LMS with course creation, student enrollment and progress tracking. Engineered secure, role-based dashboards for Administrators, Instructors and Students.",
  },
  {
    n: "03",
    title: "Food Menu & Ordering App",
    year: "2025",
    tag: "Internship · TechVolt",
    stack: ["HTML5", "CSS3", "JavaScript", "REST"],
    body: "Responsive menu-viewing and ordering experience. Built interactive UI components with a focus on dynamic data rendering, API integration and cross-browser reliability.",
  },
];

const SKILLS: Record<string, string[]> = {
  Languages: ["Java", "C", "JavaScript"],
  Web: ["HTML", "CSS", "React", "Node.js"],
  Data: ["MySQL", "MongoDB"],
  Foundations: ["Operating Systems", "Computer Networks", "UI/UX Design"],
};

const EDUCATION = [
  {
    school: "Dr. Mahalingam College of Engineering and Technology",
    place: "Pollachi",
    detail: "B.E. Computer Science and Engineering · CGPA 8.9 (through Sem 5)",
    years: "2023 — 2027",
  },
  {
    school: "Malar Matric Higher Secondary School",
    place: "Paramathi",
    detail: "Higher Secondary Certificate · 94%",
    years: "2022 — 2023",
  },
];

const CERTS = [
  "Introduction to MongoDB",
  "NPTEL — Introduction to C Programming",
  "LinguaSkill · CEFR B2 (avg. 169)",
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between h-16">
          <a href="#top" className="font-display text-2xl leading-none text-ink">
            Kaviya<span className="text-accent">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-muted-foreground hover:text-ink transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="mailto:kaviya.raju2005@gmail.com"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium border border-ink px-4 py-2 rounded-full hover:bg-ink hover:text-background transition-colors"
          >
            Let’s talk <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-10 pt-20 md:pt-32 pb-16 md:pb-24">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-muted-foreground mb-8">
            <span className="h-px w-8 bg-ink/40" />
            Portfolio · 2026
          </div>
          <h1 className="font-display text-[15vw] md:text-[9rem] leading-[0.9] text-ink">
            Kaviya <span className="italic text-accent">A R</span>
          </h1>
          <div className="mt-8 grid md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-7 text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed">
              A computer science engineer designing and building{" "}
              <span className="italic font-display text-2xl md:text-3xl text-ink">thoughtful, user-centric</span>{" "}
              digital products — from frontend interfaces to full-stack web applications.
            </p>
            <div className="md:col-span-5 md:justify-self-end space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" /> Pollachi, India
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
                Open to internships & collaborations
              </div>
            </div>
          </div>
        </div>

        <div className="border-y border-border bg-surface overflow-hidden">
          <div className="flex marquee whitespace-nowrap py-4 font-display text-3xl md:text-5xl text-ink">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-center gap-10 pr-10 shrink-0">
                <span>Frontend Development</span>
                <span className="text-accent">✦</span>
                <span className="italic">UI / UX Design</span>
                <span className="text-accent">✦</span>
                <span>React & Node</span>
                <span className="text-accent">✦</span>
                <span className="italic">Interaction Design</span>
                <span className="text-accent">✦</span>
                <span>Databases</span>
                <span className="text-accent">✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SectionLabel n="01" label="About" />
          </div>
          <div className="md:col-span-8 space-y-6">
            <p className="font-display text-3xl md:text-5xl leading-[1.15] text-ink">
              I’m a CSE undergraduate at Dr. Mahalingam College of Engineering, drawn to the intersection of{" "}
              <em>engineering</em> and <em>design</em>.
            </p>
            <p className="text-foreground/75 text-lg leading-relaxed max-w-2xl">
              I build for the web with React and Node, and I care deeply about how interfaces feel — the small
              frictions, the rhythm of a page, the way a button responds. I’m looking for roles that let me blend
              software development with UI/UX to ship products people actually enjoy.
            </p>
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
              <Stat k="8.9" v="CGPA · Sem 5" />
              <Stat k="3+" v="Shipped projects" />
              <Stat k="1" v="Internship" />
              <Stat k="B2" v="LinguaSkill" />
            </dl>
          </div>
        </div>
      </section>

      <section id="work" className="bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
          <div className="flex items-end justify-between mb-14">
            <SectionLabel n="02" label="Selected Work" />
            <span className="hidden md:block text-sm text-muted-foreground">2024 — 2025</span>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {PROJECTS.map((p) => (
              <article
                key={p.n}
                className="group grid md:grid-cols-12 gap-6 py-10 md:py-14 items-start hover:bg-background/60 transition-colors px-2 md:px-4 -mx-2 md:-mx-4 rounded-md"
              >
                <div className="md:col-span-1 font-mono text-xs text-muted-foreground pt-2">{p.n}</div>
                <div className="md:col-span-6">
                  <h3 className="font-display text-3xl md:text-5xl text-ink leading-tight">{p.title}</h3>
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                    <span className="uppercase tracking-widest text-muted-foreground">{p.tag}</span>
                    <span className="text-border">·</span>
                    <span className="text-muted-foreground">{p.year}</span>
                  </div>
                </div>
                <div className="md:col-span-4 space-y-4">
                  <p className="text-foreground/80 leading-relaxed">{p.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-mono px-2.5 py-1 rounded-full border border-border bg-background text-foreground/70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-1 md:justify-self-end pt-2">
                  <ArrowUpRight className="h-6 w-6 text-ink transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SectionLabel n="03" label="Skills" />
            <p className="mt-6 text-muted-foreground max-w-xs">
              Tools and ideas I reach for when building on the web.
            </p>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-10">
            {Object.entries(SKILLS).map(([group, items]) => (
              <div key={group}>
                <h4 className="font-mono text-xs uppercase tracking-widest text-accent mb-4">{group}</h4>
                <ul className="space-y-2">
                  {items.map((s) => (
                    <li key={s} className="font-display text-2xl text-ink border-b border-border pb-2">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Adaptability", "Communication", "Quick Learner", "Stress Tolerance"].map((s) => (
            <div key={s} className="border border-border rounded-lg px-5 py-6 bg-surface/60">
              <div className="font-display text-xl text-ink">{s}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-14">
          <div className="md:col-span-7">
            <SectionLabel n="04" label="Education" />
            <div className="mt-10 space-y-8">
              {EDUCATION.map((e) => (
                <div key={e.school} className="grid grid-cols-12 gap-4 pb-8 border-b border-border last:border-0">
                  <div className="col-span-4 font-mono text-xs text-muted-foreground pt-1">{e.years}</div>
                  <div className="col-span-8">
                    <h4 className="font-display text-2xl md:text-3xl text-ink leading-tight">{e.school}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{e.place}</p>
                    <p className="mt-3 text-foreground/80">{e.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-5">
            <SectionLabel n="05" label="Certifications" />
            <ul className="mt-10 space-y-4">
              {CERTS.map((c) => (
                <li key={c} className="flex items-start gap-3 p-5 rounded-lg bg-background border border-border">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent shrink-0" />
                  <span className="text-ink">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="relative">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-28 md:py-40">
          <SectionLabel n="06" label="Contact" />
          <h2 className="font-display text-6xl md:text-[10rem] leading-[0.95] text-ink mt-8">
            Let’s build <br />
            <span className="italic text-accent">something good.</span>
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <ContactRow icon={<Mail className="h-4 w-4" />} label="Email" value="kaviya.raju2005@gmail.com" href="mailto:kaviya.raju2005@gmail.com" />
              <ContactRow icon={<Phone className="h-4 w-4" />} label="Phone" value="+91 84895 34340" href="tel:+918489534340" />
              <ContactRow icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" value="kaviya-rajendran" href="https://linkedin.com/in/kaviya-rajendran-7b5b20292" />
              <ContactRow icon={<Github className="h-4 w-4" />} label="GitHub" value="Kaviya1808" href="https://github.com/Kaviya1808" />
            </div>
            <div className="flex md:justify-end items-end">
              <a
                href="mailto:kaviya.raju2005@gmail.com"
                className="group inline-flex items-center gap-4 bg-ink text-background rounded-full pl-8 pr-3 py-3 hover:bg-accent transition-colors"
              >
                <span className="font-display text-2xl">Say hello</span>
                <span className="h-10 w-10 rounded-full bg-background text-ink grid place-items-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© 2026 Kaviya A R. Crafted with care.</span>
          <span className="font-mono">Pollachi · India</span>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">
      <span className="font-mono text-accent">{n}</span>
      <span className="h-px w-8 bg-border" />
      {label}
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-display text-4xl text-ink">{k}</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{v}</div>
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="flex items-center justify-between py-4 border-b border-border group"
    >
      <div className="flex items-center gap-4">
        <span className="h-9 w-9 rounded-full border border-border grid place-items-center text-muted-foreground group-hover:text-accent group-hover:border-accent transition-colors">
          {icon}
        </span>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
          <div className="text-ink">{value}</div>
        </div>
      </div>
      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
    </a>
  );
}
