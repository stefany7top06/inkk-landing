import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Empreendimentos', href: '#empreendimentos' },
  { label: 'Apartamentos', href: '#apartamentos' },
  { label: 'Lazer', href: '#lazer' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-inkk-charcoal shadow-2xl ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="cursor-pointer flex items-center gap-2 group">
          <span className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold text-white tracking-wider group-hover:text-inkk-accent transition-colors duration-300">
            INKK
          </span>
          <span className="hidden sm:inline-block text-xs text-white/50 tracking-[0.2em] uppercase font-[var(--font-body)]">
            orp
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="cursor-pointer px-4 py-2 text-sm text-white/80 hover:text-white font-[var(--font-body)] tracking-wide transition-colors duration-200 rounded-full hover:bg-white/10"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Desktop */}
        <a
          href="#contato"
          className="hidden lg:inline-flex cursor-pointer px-6 py-2.5 bg-inkk-accent text-inkk-charcoal text-sm font-semibold rounded-full hover:bg-inkk-gold transition-all duration-300 font-[var(--font-body)] tracking-wide"
        >
          Agendar Visita
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden cursor-pointer text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-inkk-charcoal/95 backdrop-blur-xl overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-[500px] border-b border-white/10' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col py-4 px-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer block py-3 text-white/80 hover:text-white font-[var(--font-body)] tracking-wide transition-colors duration-200 border-b border-white/5"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer block text-center py-3 bg-inkk-accent text-inkk-charcoal font-semibold rounded-full font-[var(--font-body)]"
            >
              Agendar Visita
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
