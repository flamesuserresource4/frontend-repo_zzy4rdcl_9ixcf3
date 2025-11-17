import { motion } from 'framer-motion'
import { ExternalLink, Mail, Phone } from 'lucide-react'

export default function Sections() {
  return (
    <main className="relative z-10">
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}

function Card({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border bg-white/70 backdrop-blur shadow-sm p-6"
    >
      {children}
    </motion.div>
  )
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <p className="mt-2 text-gray-600">{subtitle}</p>
        )}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {children}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <Section id="about" title="About">
      <Card>
        <p className="text-gray-700 leading-relaxed">
          Passionate and detail-oriented Computer Engineer with a strong foundation in software development, algorithms, and AI applications. Seeking a developer role to leverage problem-solving skills and technical expertise in designing efficient and scalable solutions. Eager to contribute to innovative projects and committed to continuous learning and professional growth within a dynamic team.
        </p>
      </Card>
    </Section>
  )
}

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <Card>
        <h3 className="font-semibold text-lg">AIC GIM — Frontend Developer (Intern)</h3>
        <p className="text-sm text-gray-500">Jul 2024 – Aug 2024</p>
        <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
          <li>Applied industry best practices building robust front-end projects in a professional environment.</li>
          <li>Hands-on experience contributing to real-world applications using HTML, CSS, PHP, Firebase, MySQL.</li>
          <li>Collaborated effectively in a team, enhancing communication and interpersonal skills.</li>
          <li>Demonstrated leadership and problem-solving to drive project outcomes.</li>
        </ul>
      </Card>
    </Section>
  )
}

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <Card>
        <h3 className="font-semibold text-lg">Food E‑commerce Website — Full‑Stack Developer (2022)</h3>
        <p className="text-sm text-gray-500">HTML, CSS, PHP, MySQL</p>
        <p className="mt-2 text-gray-700">Built a complete food delivery web app with a user-facing front-end and secure admin panel for managing orders and inventory.</p>
        <a className="inline-flex items-center gap-2 mt-3 text-blue-600 hover:text-blue-700" href="#" onClick={(e)=>e.preventDefault()}>
          <ExternalLink size={16}/> View details
        </a>
      </Card>
      <Card>
        <h3 className="font-semibold text-lg">Event Management Website — Lead Developer (2023)</h3>
        <p className="text-sm text-gray-500">HTML, CSS, PHP, MySQL</p>
        <p className="mt-2 text-gray-700">Developed a dynamic platform to browse, enroll, and pay for events with role‑based access for users and admins.</p>
        <a className="inline-flex items-center gap-2 mt-3 text-blue-600 hover:text-blue-700" href="#" onClick={(e)=>e.preventDefault()}>
          <ExternalLink size={16}/> View details
        </a>
      </Card>
      <Card>
        <h3 className="font-semibold text-lg">Generative AI for Medical Imaging — Research (2025)</h3>
        <p className="text-sm text-gray-500">Python, TensorFlow, PyTorch, Keras, NumPy, OpenCV</p>
        <p className="mt-2 text-gray-700">Explored DCGAN and WGAN variants to improve data scarcity and image quality for medical diagnostics workflows.</p>
        <a className="inline-flex items-center gap-2 mt-3 text-blue-600 hover:text-blue-700" href="#" onClick={(e)=>e.preventDefault()}>
          <ExternalLink size={16}/> View details
        </a>
      </Card>
    </Section>
  )
}

function Skills() {
  const tech = [
    'HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Responsive Design', 'API Integration', 'Git', 'Agile', 'VS Code',
  ]
  return (
    <Section id="skills" title="Skills">
      {tech.map((t) => (
        <Card key={t}>
          <div className="flex items-center justify-between">
            <p className="font-medium text-gray-800">{t}</p>
            <div className="h-2 w-24 rounded-full bg-gradient-to-r from-blue-500 to-fuchsia-500" />
          </div>
        </Card>
      ))}
    </Section>
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
    <Section id="education" title="Education">
      {schools.map((s) => (
        <Card key={s.name}>
          <p className="font-semibold text-gray-800">{s.name}</p>
          <p className="text-sm text-gray-500">{s.sub}</p>
        </Card>
      ))}
    </Section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold tracking-tight">Contact</motion.h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card>
            <div className="flex items-center gap-3">
              <Phone className="text-blue-600" size={18} />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium text-gray-800">+91 95272 26396</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <Mail className="text-blue-600" size={18} />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a href="mailto:gaonkarpratik398@gmail.com" className="font-medium text-blue-700 hover:underline">gaonkarpratik398@gmail.com</a>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <ExternalLink className="text-blue-600" size={18} />
              <div>
                <p className="text-sm text-gray-500">LinkedIn</p>
                <a href="#" onClick={(e)=>e.preventDefault()} className="font-medium text-blue-700 hover:underline">Pratik Gaonkar</a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-2xl border bg-white/70 backdrop-blur p-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Pratik Gaonkar. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
