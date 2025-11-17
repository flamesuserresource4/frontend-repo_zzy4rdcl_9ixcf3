import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/60 shadow-sm' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#top" className="text-xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">Pratik</span>
          <span className="text-gray-800"> Gaonkar</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="ml-2 rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white px-4 py-2 text-sm shadow hover:opacity-90 transition">Hire Me</a>
        </nav>
        <button className="md:hidden p-2 rounded hover:bg-black/5" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 animate-in">
          <div className="rounded-xl border bg-white/80 backdrop-blur p-3 shadow">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded hover:bg-black/5 text-gray-800">
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
