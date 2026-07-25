import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  Download,
  Plus,
  Minus,
  Sparkles,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const LINKEDIN_URL = "https://linkedin.com/in/kaviya-rajendran-7b5b20292";
const GITHUB_URL = "https://github.com/Kaviya1808";
const EMAIL = "kaviya.raju2005@gmail.com";
const PHONE = "+91 84895 34340";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Arsenal", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

const SKILLS: { icon: string; name: string }[] = [
  { icon: "☕", name: "Java" },
  { icon: "⚡", name: "C" },
  { icon: "📜", name: "JavaScript" },
  { icon: "🌐", name: "HTML5" },
  { icon: "🎨", name: "CSS3" },
  { icon: "⚛️", name: "React.js" },
  { icon: "🟢", name: "Node.js" },
  { icon: "🍃", name: "MongoDB" },
  { icon: "🗄️", name: "MySQL" },
  { icon: "🔀", name: "Git" },
  { icon: "🧠", name: "UI / UX" },
  { icon: "📐", name: "Figma" },
];

const PROJECTS = [
  {
    n: "01",
    title: "Recipe Management Application",
    year: "2025",
    range: "AUG — DEC 2025",
    tag: "Full-Stack Web App",
    stack: ["React", "Node.js", "MongoDB", "REST"],
    body: "A social recipe platform where users discover, save and publish recipes with step-by-step video walkthroughs, likes and threaded comments.",
    role: "Full-stack Developer",
    highlights: [
      "React frontend with dynamic browsing, filters and search",
      "Node.js backend for CRUD on recipes, likes and comments",
      "Embedded video walkthroughs and per-user recipe collections",
      "Role-based authentication and personalised feeds",
    ],
    link: GITHUB_URL,
  },
  {
    n: "02",
    title: "Learning Management System",
    year: "2024",
    range: "AUG 2024",
    tag: "Full-Stack Platform",
    stack: ["Full-stack", "RBAC", "Auth"],
    body: "A scalable LMS with course creation, enrollment and progress tracking — with secure, role-based dashboards for Administrators, Instructors and Students.",
    role: "Full-stack Developer",
    highlights: [
      "Role-based dashboards for Admins, Instructors and Students",
      "Course creation, enrollment and progress tracking flows",
      "Secure authentication with per-role authorisation",
      "Scalable data model designed for growing catalogs",
    ],
    link: GITHUB_URL,
  },
  {
    n: "03",
    title: "Food Menu & Ordering App",
    year: "2025",
    range: "JULY 2025 · TECHVOLT",
    tag: "Frontend Internship",
    stack: ["HTML5", "CSS3", "JavaScript", "REST"],
    body: "Responsive menu-viewing and ordering experience with interactive components — built during my internship with a focus on dynamic data and cross-browser reliability.",
    role: "Frontend Intern",
    highlights: [
      "Responsive menu and ordering UI across mobile and desktop",
      "Interactive components with dynamic data rendering",
      "REST API integration for live menu and order flow",
      "Cross-browser compatibility and UX polish",
    ],
    link: GITHUB_URL,
  },
];

const JOURNEY = [
  {
    when: "JULY 2025",
    org: "TechVolt Software Pvt. Ltd.",
    role: "Frontend Developer Intern",
    body: "Built a responsive food menu and ordering interface. Focused on dynamic data rendering, REST API integration and cross-browser reliability.",
    status: "COMPLETED",
  },
  {
    when: "2023 — 2027",
    org: "Dr. Mahalingam College of Engineering & Technology",
    role: "B.E. Computer Science and Engineering · CGPA 8.9",
    body: "Coursework across Operating Systems, DBMS, Computer Networks and Software Engineering. Active in campus tech and UI/UX communities.",
    status: "IN PROGRESS",
  },
  {
    when: "2022 — 2023",
    org: "Malar Matric Higher Secondary School, Paramathi",
    role: "Higher Secondary Certificate · 94%",
    body: "State-board science stream with a strong grounding in mathematics and computer science.",
    status: "COMPLETED",
  },
];

const CERTS = [
  { org: "MongoDB University", name: "Introduction to MongoDB" },
  { org: "NPTEL", name: "Introduction to C Programming" },
  { org: "Cambridge", name: "LinguaSkill · CEFR B2 (avg. 169)" },
];

function Portfolio() {
  const [openProject, setOpenProject] = useState<string | null>("01");
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        })
      );
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2 font-mono text-sm tracking-widest text-ink">
            <span className="h-6 w-6 rounded-md grid place-items-center bg-gradient-to-br from-accent to-accent-2 text-accent-foreground font-display font-semibold">
              K
            </span>
            KAVIYA<span className="text-accent">.AR</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-muted-foreground hover:text-ink transition-colors relative group"
              >
                {n.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent group-hover:w-full transition-all" />
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <a
              href="/kaviya-ar-resume.pdf"
              download="Kaviya-AR-Resume.pdf"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase border border-border px-3 py-2 rounded-full hover:border-accent hover:text-ink transition-colors"
            >
              <Download className="h-3.5 w-3.5" /> Resume
            </a>
            <span className="font-mono text-[11px] text-muted-foreground tracking-widest hidden lg:inline">
              IST {time}
            </span>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10 pt-24 md:pt-36 pb-20 md:pb-28">
          <div className="fade-up flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.32em] text-muted-foreground mb-10">
            <span className="h-px w-8 bg-accent" />
            00 — Introduction
            <span className="ml-2 h-2 w-2 rounded-full bg-emerald-400" style={{ animation: "pulseDot 2s ease-in-out infinite" }} />
            <span className="text-emerald-400">Available for opportunities</span>
          </div>

          <h1 className="fade-up font-display text-[13vw] md:text-[8.5rem] leading-[0.88] text-ink">
            Kaviya <br />
            <span className="text-gradient">A&nbsp;R.</span>
          </h1>

          <div className="mt-10 grid md:grid-cols-12 gap-8 items-end">
            <p className="fade-up md:col-span-7 text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed">
              Computer Science engineer crafting{" "}
              <span className="font-display italic text-ink">thoughtful, user-centric</span> web
              products — from frontend interfaces to full-stack applications.
            </p>
            <div className="fade-up md:col-span-5 md:justify-self-end space-y-2 text-sm font-mono">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" /> POLLACHI · TAMIL NADU
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-accent-2" /> FRONTEND · FULL-STACK · UI/UX
              </div>
            </div>
          </div>

          <div className="fade-up mt-12 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full pl-6 pr-2 py-2 text-sm font-medium bg-gradient-to-r from-accent to-accent-2 text-accent-foreground hover:opacity-90 transition"
            >
              View Projects
              <span className="h-9 w-9 rounded-full bg-background/25 grid place-items-center group-hover:translate-x-0.5 transition-transform">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
            <a
              href="/kaviya-ar-resume.pdf"
              download="Kaviya-AR-Resume.pdf"
              className="inline-flex items-center gap-2 text-sm font-medium border border-border-strong px-5 py-3 rounded-full hover:border-accent hover:text-ink transition-colors"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <div className="flex items-center gap-1 ml-1">
              <IconLink href={GITHUB_URL} label="GitHub"><Github className="h-4 w-4" /></IconLink>
              <IconLink href={LINKEDIN_URL} label="LinkedIn"><Linkedin className="h-4 w-4" /></IconLink>
              <IconLink href={`mailto:${EMAIL}`} label="Email"><Mail className="h-4 w-4" /></IconLink>
            </div>
          </div>

          {/* stats */}
          <div className="fade-up mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border">
            <Stat k="8.9" v="CGPA · Sem 5" />
            <Stat k="03" v="Projects Shipped" />
            <Stat k="01" v="Internships" />
            <Stat k="B2" v="LinguaSkill CEFR" />
          </div>
        </div>

        {/* marquee band */}
        <div className="border-y border-border bg-surface/50 overflow-hidden">
          <div className="flex marquee whitespace-nowrap py-5 font-display text-2xl md:text-4xl text-ink/90">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-center gap-10 pr-10 shrink-0">
                <span>Frontend Development</span>
                <span className="text-accent">✦</span>
                <span className="italic text-gradient">UI / UX Design</span>
                <span className="text-accent">✦</span>
                <span>React & Node</span>
                <span className="text-accent">✦</span>
                <span className="italic text-gradient">Interaction Design</span>
                <span className="text-accent">✦</span>
                <span>Databases</span>
                <span className="text-accent">✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SectionLabel n="01" label="About" />
            <p className="mt-6 font-mono text-xs text-muted-foreground tracking-widest">
              WHO / WHAT / WHY
            </p>
          </div>
          <div className="md:col-span-8 space-y-6">
            <p className="font-display text-3xl md:text-5xl leading-[1.15] text-ink">
              I’m a CSE undergraduate at Dr. Mahalingam College of Engineering, drawn to the
              intersection of <span className="text-gradient">engineering</span> and{" "}
              <span className="italic">design</span>.
            </p>
            <p className="text-foreground/75 text-lg leading-relaxed max-w-2xl">
              I build for the web with React and Node, and I care deeply about how interfaces
              feel — the small frictions, the rhythm of a page, the way a button responds. I’m
              looking for roles that let me blend software development with UI/UX to ship
              products people actually enjoy.
            </p>
          </div>
        </div>
      </section>

      {/* ARSENAL / SKILLS */}
      <section id="skills" className="relative bg-surface/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
          <div className="flex items-end justify-between mb-12">
            <SectionLabel n="02" label="Arsenal" icon={<Code2 className="h-3.5 w-3.5" />} />
            <span className="hidden md:block font-mono text-xs text-muted-foreground tracking-widest">
              STACK / TOOLS
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-ink max-w-3xl">
            Technical <span className="italic text-gradient">Skills</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Languages, frameworks and tools I reach for when building on the web.
          </p>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {SKILLS.map((s) => (
              <div
                key={s.name}
                className="group relative rounded-xl border border-border bg-surface/70 p-5 hover:border-accent hover:-translate-y-1 hover:bg-surface-2 transition-all"
              >
                <div className="text-3xl">{s.icon}</div>
                <div className="mt-3 font-mono text-xs tracking-widest text-muted-foreground group-hover:text-ink transition-colors">
                  {s.name.toUpperCase()}
                </div>
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none glow-ring" />
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-2">
            {["Adaptability", "Communication", "Quick Learner", "Stress Tolerance"].map((s) => (
              <span
                key={s}
                className="font-mono text-[11px] tracking-widest uppercase px-3 py-1.5 rounded-full border border-border text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-end justify-between mb-12">
          <SectionLabel n="03" label="Work" icon={<Briefcase className="h-3.5 w-3.5" />} />
          <span className="hidden md:block font-mono text-xs text-muted-foreground tracking-widest">
            2024 — 2025
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl text-ink max-w-3xl">
          Selected <span className="italic text-gradient">Projects</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl">
          Click any project to expand its details, role and highlights.
        </p>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {PROJECTS.map((p) => {
            const isOpen = openProject === p.n;
            return (
              <article key={p.n} className="group">
                <button
                  type="button"
                  onClick={() => setOpenProject(isOpen ? null : p.n)}
                  aria-expanded={isOpen}
                  className="w-full text-left grid md:grid-cols-12 gap-6 py-10 md:py-14 items-start hover:bg-surface/40 transition-colors px-2 md:px-4 -mx-2 md:-mx-4 rounded-md cursor-pointer"
                >
                  <div className="md:col-span-1 font-mono text-xs text-accent pt-2">PROJ-{p.n}</div>
                  <div className="md:col-span-6">
                    <h3 className="font-display text-3xl md:text-5xl text-ink leading-tight group-hover:text-gradient transition-all">
                      {p.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span className="uppercase tracking-widest text-muted-foreground">{p.tag}</span>
                      <span className="text-border-strong">·</span>
                      <span className="text-muted-foreground">{p.range}</span>
                    </div>
                  </div>
                  <div className="md:col-span-4 space-y-4">
                    <p className="text-foreground/80 leading-relaxed">{p.body}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-border bg-surface/80 text-foreground/70"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-1 md:justify-self-end pt-2">
                    <span
                      className={`h-10 w-10 rounded-full border grid place-items-center transition-all ${
                        isOpen
                          ? "bg-accent text-accent-foreground border-accent"
                          : "border-border-strong text-ink hover:bg-ink hover:text-background"
                      }`}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid md:grid-cols-12 gap-6 pb-10 md:pb-14 px-2 md:px-4">
                      <div className="md:col-span-1" />
                      <div className="md:col-span-6">
                        <div className="text-[11px] font-mono uppercase tracking-widest text-accent mb-3">
                          Role
                        </div>
                        <p className="text-ink">{p.role}</p>
                        <div className="mt-6 flex flex-wrap gap-2">
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 text-sm font-medium border border-border-strong px-4 py-2 rounded-full hover:bg-ink hover:text-background transition-colors"
                          >
                            <Github className="h-4 w-4" /> View on GitHub
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                          <a
                            href={LINKEDIN_URL}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 text-sm font-medium border border-border px-4 py-2 rounded-full text-muted-foreground hover:text-ink hover:border-accent transition-colors"
                          >
                            <Linkedin className="h-4 w-4" /> Connect
                          </a>
                        </div>
                      </div>
                      <div className="md:col-span-5">
                        <div className="text-[11px] font-mono uppercase tracking-widest text-accent mb-3">
                          Highlights
                        </div>
                        <ul className="space-y-2">
                          {p.highlights.map((h) => (
                            <li key={h} className="flex gap-3 text-foreground/85">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-2 shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="bg-surface/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
          <div className="flex items-end justify-between mb-12">
            <SectionLabel n="04" label="Journey" icon={<GraduationCap className="h-3.5 w-3.5" />} />
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-ink max-w-3xl">
            Professional <span className="italic text-gradient">Journey</span>
          </h2>

          <div className="mt-14 relative pl-6 md:pl-10">
            <div className="absolute left-1 md:left-3 top-2 bottom-2 w-px bg-border" />
            {JOURNEY.map((j) => (
              <div key={j.org} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[19px] md:-left-[27px] top-2 h-3 w-3 rounded-full bg-accent glow-ring" />
                <div className="grid md:grid-cols-12 gap-6">
                  <div className="md:col-span-3">
                    <div className="font-mono text-[11px] tracking-widest text-muted-foreground">{j.when}</div>
                    <div className="mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-accent-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-2" /> {j.status}
                    </div>
                  </div>
                  <div className="md:col-span-9">
                    <h4 className="font-display text-2xl md:text-3xl text-ink leading-tight">{j.org}</h4>
                    <p className="mt-1 text-sm text-accent">{j.role}</p>
                    <p className="mt-3 text-foreground/75 max-w-2xl">{j.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-end justify-between mb-12">
          <SectionLabel n="05" label="Credentials" icon={<Award className="h-3.5 w-3.5" />} />
        </div>
        <h2 className="font-display text-4xl md:text-6xl text-ink max-w-3xl">
          Certifications
        </h2>
        <ul className="mt-12 grid md:grid-cols-3 gap-4">
          {CERTS.map((c, i) => (
            <li
              key={c.name}
              className="relative rounded-xl border border-border bg-surface/60 p-6 hover:border-accent transition-colors group"
            >
              <div className="font-mono text-[11px] tracking-widest text-accent">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-3 font-display text-xl md:text-2xl text-ink leading-snug">
                {c.name}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{c.org}</div>
              <ArrowUpRight className="absolute top-6 right-6 h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
            </li>
          ))}
        </ul>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative border-t border-border">
        <div className="absolute inset-0 grid-bg opacity-70" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-28 md:py-40">
          <SectionLabel n="06" label="Connect" />
          <h2 className="font-display text-5xl md:text-[9rem] leading-[0.95] text-ink mt-8">
            Let’s build <br />
            <span className="italic text-gradient">something good.</span>
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Open to frontend / full-stack developer roles, internship extensions and collaborative
            projects. Based in Pollachi, Tamil Nadu — available worldwide.
          </p>

          <div className="mt-14 grid md:grid-cols-2 gap-10">
            <div className="space-y-2">
              <ContactRow icon={<Mail className="h-4 w-4" />} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
              <ContactRow icon={<Phone className="h-4 w-4" />} label="Phone" value={PHONE} href={`tel:${PHONE.replace(/\s/g, "")}`} />
              <ContactRow icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" value="kaviya-rajendran" href={LINKEDIN_URL} />
              <ContactRow icon={<Github className="h-4 w-4" />} label="GitHub" value="Kaviya1808" href={GITHUB_URL} />
            </div>
            <div className="flex md:justify-end items-end">
              <a
                href={`mailto:${EMAIL}`}
                className="group inline-flex items-center gap-4 rounded-full pl-8 pr-3 py-3 bg-gradient-to-r from-accent to-accent-2 text-accent-foreground hover:opacity-90 transition"
              >
                <span className="font-display text-2xl">Say hello</span>
                <span className="h-11 w-11 rounded-full bg-background/25 grid place-items-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-mono text-muted-foreground tracking-widest">
          <span>© 2026 KAVIYA A R · CRAFTED WITH CARE</span>
          <span>POLLACHI · INDIA · IST {time}</span>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({ n, label, icon }: { n: string; label: string; icon?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.32em] text-muted-foreground">
      <span className="text-accent">{n}</span>
      <span className="h-px w-8 bg-border-strong" />
      <span className="flex items-center gap-2 text-ink">
        {icon}
        {label}
      </span>
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="bg-surface/70 p-6 md:p-8">
      <div className="font-display text-4xl md:text-5xl text-gradient">{k}</div>
      <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground mt-2">
        {v}
      </div>
    </div>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      aria-label={label}
      className="h-10 w-10 grid place-items-center rounded-full border border-border text-muted-foreground hover:text-ink hover:border-accent transition-colors"
    >
      {children}
    </a>
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
      className="flex items-center justify-between py-4 border-b border-border group hover:border-accent transition-colors"
    >
      <div className="flex items-center gap-4">
        <span className="h-10 w-10 rounded-full border border-border grid place-items-center text-muted-foreground group-hover:text-accent-foreground group-hover:bg-accent group-hover:border-accent transition-colors">
          {icon}
        </span>
        <div>
          <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
            {label}
          </div>
          <div className="text-ink">{value}</div>
        </div>
      </div>
      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
    </a>
  );
}
