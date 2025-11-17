import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative h-[95vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark overlay with gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#09090b] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 h-full flex items-center">
        <div className="w-full grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
            >
              Hi, I'm <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">Pratik Gaonkar</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-4 text-lg md:text-xl text-zinc-300"
            >
              Passionate Computer Engineer focused on building scalable, delightful products with modern web tech and AI.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#projects" className="rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white px-5 py-2.5 shadow-lg shadow-fuchsia-500/20 hover:opacity-90 transition">View Projects</a>
              <a href="#contact" className="rounded-full border border-white/15 backdrop-blur bg-white/5 text-zinc-100 px-5 py-2.5 hover:bg-white/10 transition">Contact</a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { k: 'Experience', v: 'AIC GIM Intern' },
                { k: 'Projects', v: 'E-Comm, Events, AI' },
                { k: 'Stack', v: 'HTML CSS JS PHP' },
                { k: 'Focus', v: 'Frontend + AI' },
              ].map((item) => (
                <div key={item.k} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 text-center">
                  <p className="text-xs text-zinc-400">{item.k}</p>
                  <p className="font-semibold text-zinc-100">{item.v}</p>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  )
}
