import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [dark])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-black/40 shadow-sm' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#top" className="text-xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">Pratik</span>
          <span className="text-zinc-100"> Gaonkar</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-zinc-300 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="ml-2 rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white px-4 py-2 text-sm shadow hover:opacity-90 transition">Hire Me</a>
          <button aria-label="Toggle theme" onClick={() => setDark(v=>!v)} className="p-2 rounded hover:bg-white/5 text-zinc-200">
            {dark ? <Moon size={18}/> : <Sun size={18}/>}
          </button>
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <button aria-label="Toggle theme" onClick={() => setDark(v=>!v)} className="p-2 rounded hover:bg-white/5 text-zinc-200">
            {dark ? <Moon size={18}/> : <Sun size={18}/>}
          </button>
          <button className="p-2 rounded hover:bg-white/5" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 animate-in">
          <div className="rounded-xl border border-white/10 bg-black/60 backdrop-blur p-3 shadow">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-white/5 text-zinc-100">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block mt-2 text-center rounded-lg bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white px-4 py-2 shadow">
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
