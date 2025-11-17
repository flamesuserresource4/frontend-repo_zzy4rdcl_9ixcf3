import { motion } from 'framer-motion'
import { ExternalLink, Mail, Phone, Sparkles } from 'lucide-react'

export default function Sections() {
  return (
    <main className="relative z-10">
      <AuroraLines />
      <AboutFullWidth />
      <ExperienceFullWidth />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}

function AuroraLines() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-1/2 top-[30vh] -translate-x-1/2 h-px w-[90vw] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute left-1/2 top-[120vh] -translate-x-1/2 h-px w-[90vw] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  )
}

function SectionShell({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-white"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <p className="mt-2 text-zinc-400">{subtitle}</p>
        )}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {children}
        </div>
      </div>
    </section>
  )
}

function GlowCard({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.04)] ${className}`}
    >
      <div className="absolute -inset-px bg-[conic-gradient(from_90deg_at_50%_50%,_rgba(59,130,246,0.15),_rgba(147,51,234,0.15),_rgba(236,72,153,0.15),_rgba(59,130,246,0.15))] opacity-0 hover:opacity-100 transition-opacity blur-2xl" />
      <div className="relative p-6">
        {children}
      </div>
    </motion.div>
  )
}

// FULL-WIDTH ABOUT
function AboutFullWidth() {
  return (
    <section id="about" className="py-28">
      <div className="mx-auto max-w-[1400px] px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/[0.03] to-transparent"
        >
          <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="relative p-8 md:p-14">
            <div className="flex items-start gap-4">
              <Sparkles className="text-blue-400" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">About</h2>
                <p className="mt-4 text-lg leading-relaxed text-zinc-300 max-w-4xl">
                  Passionate and detail-oriented Computer Engineer with a strong foundation in software development, algorithms, and AI applications. Seeking a developer role to leverage problem-solving skills and technical expertise in designing efficient and scalable solutions. Eager to contribute to innovative projects and committed to continuous learning and professional growth within a dynamic team.
                </p>
              </div>
            </div>

            {/* Floating badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {['Frontend', 'AI', 'Clean UX', 'Performance', 'Teamwork'].map((b) => (
                <motion.span key={b} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-200">
                  {b}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// FULL-WIDTH EXPERIENCE with timeline
function ExperienceFullWidth() {
  const items = [
    {
      title: 'AIC GIM — Frontend Developer (Intern)',
      period: 'Jul 2024 – Aug 2024',
      points: [
        'Applied industry best practices building robust front-end projects in a professional environment.',
        'Hands-on experience contributing to real-world applications using HTML, CSS, PHP, Firebase, MySQL.',
        'Collaborated effectively in a team, enhancing communication and interpersonal skills.',
        'Demonstrated leadership and problem-solving to drive project outcomes.',
      ],
    },
  ]

  return (
    <section id="experience" className="py-28">
      <div className="mx-auto max-w-[1400px] px-4">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold tracking-tight text-white">Experience</motion.h2>

        <div className="relative mt-10">
          {/* timeline axis */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/15 to-white/10" />

          <div className="space-y-10">
            {items.map((it, idx) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className={`relative md:w-1/2 ${idx % 2 === 0 ? 'md:pr-10 md:ml-0 md:mr-auto' : 'md:pl-10 md:ml-auto md:mr-0'}`}
                style={{ paddingLeft: '2.5rem' }}
              >
                {/* node */}
                <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-fuchsia-500 shadow-[0_0_0_4px_rgba(255,255,255,0.06)]" />

                <GlowCard>
                  <h3 className="font-semibold text-lg text-white">{it.title}</h3>
                  <p className="text-sm text-zinc-400">{it.period}</p>
                  <ul className="mt-3 list-disc list-inside text-zinc-300 space-y-1">
                    {it.points.map(p => <li key={p}>{p}</li>)}
                  </ul>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <SectionShell id="projects" title="Projects">
      <GlowCard>
        <h3 className="font-semibold text-lg text-white">Food E‑commerce Website — Full‑Stack Developer (2022)</h3>
        <p className="text-sm text-zinc-400">HTML, CSS, PHP, MySQL</p>
        <p className="mt-2 text-zinc-300">Built a complete food delivery web app with a user-facing front-end and secure admin panel for managing orders and inventory.</p>
        <a className="inline-flex items-center gap-2 mt-3 text-blue-400 hover:text-blue-300" href="#" onClick={(e)=>e.preventDefault()}>
          <ExternalLink size={16}/> View details
        </a>
      </GlowCard>
      <GlowCard>
        <h3 className="font-semibold text-lg text-white">Event Management Website — Lead Developer (2023)</h3>
        <p className="text-sm text-zinc-400">HTML, CSS, PHP, MySQL</p>
        <p className="mt-2 text-zinc-300">Developed a dynamic platform to browse, enroll, and pay for events with role‑based access for users and admins.</p>
        <a className="inline-flex items-center gap-2 mt-3 text-blue-400 hover:text-blue-300" href="#" onClick={(e)=>e.preventDefault()}>
          <ExternalLink size={16}/> View details
        </a>
      </GlowCard>
      <GlowCard>
        <h3 className="font-semibold text-lg text-white">Generative AI for Medical Imaging — Research (2025)</h3>
        <p className="text-sm text-zinc-400">Python, TensorFlow, PyTorch, Keras, NumPy, OpenCV</p>
        <p className="mt-2 text-zinc-300">Explored DCGAN and WGAN variants to improve data scarcity and image quality for medical diagnostics workflows.</p>
        <a className="inline-flex items-center gap-2 mt-3 text-blue-400 hover:text-blue-300" href="#" onClick={(e)=>e.preventDefault()}>
          <ExternalLink size={16}/> View details
        </a>
      </GlowCard>
    </SectionShell>
  )
}

function Skills() {
  const tech = [
    'HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Responsive Design', 'API Integration', 'Git', 'Agile', 'VS Code',
  ]
  return (
    <SectionShell id="skills" title="Skills">
      {tech.map((t) => (
        <GlowCard key={t}>
          <div className="flex items-center justify-between">
            <p className="font-medium text-white">{t}</p>
            <div className="h-2 w-24 rounded-full bg-gradient-to-r from-blue-500 to-fuchsia-500" />
          </div>
        </GlowCard>
      ))}
    </SectionShell>
  )
}

function Education() {
  const schools = [
    { name: 'AJ De Almeida High School', sub: '10th (2018–2019)' },
    { name: 'GVM’s Higher Secondary', sub: '12th (2020–2021)' },
    { name: 'Don Bosco College of Engineering', sub: 'B.Tech Computer Engineering (2021–2025)' },
    { name: 'Vellore Institute of Technology', sub: 'M.Tech Computer Engineering (Cyber Security) (2025–Present)' },
  ]
  return (
    <SectionShell id="education" title="Education">
      {schools.map((s) => (
        <GlowCard key={s.name}>
          <p className="font-semibold text-white">{s.name}</p>
          <p className="text-sm text-zinc-400">{s.sub}</p>
        </GlowCard>
      ))}
    </SectionShell>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold tracking-tight text-white">Contact</motion.h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <GlowCard>
            <div className="flex items-center gap-3">
              <Phone className="text-blue-400" size={18} />
              <div>
                <p className="text-sm text-zinc-400">Phone</p>
                <p className="font-medium text-white">+91 95272 26396</p>
              </div>
            </div>
          </GlowCard>
          <GlowCard>
            <div className="flex items-center gap-3">
              <Mail className="text-blue-400" size={18} />
              <div>
                <p className="text-sm text-zinc-400">Email</p>
                <a href="mailto:gaonkarpratik398@gmail.com" className="font-medium text-blue-300 hover:underline">gaonkarpratik398@gmail.com</a>
              </div>
            </div>
          </GlowCard>
          <GlowCard>
            <div className="flex items-center gap-3">
              <ExternalLink className="text-blue-400" size={18} />
              <div>
                <p className="text-sm text-zinc-400">LinkedIn</p>
                <a href="#" onClick={(e)=>e.preventDefault()} className="font-medium text-blue-300 hover:underline">Pratik Gaonkar</a>
              </div>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-center text-sm text-zinc-400">
          © {new Date().getFullYear()} Pratik Gaonkar. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
