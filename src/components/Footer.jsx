import { Building2 } from 'lucide-react'

const links = [
  { label: 'Empreendimentos', href: '#empreendimentos' },
  { label: 'Apartamentos', href: '#apartamentos' },
  { label: 'Lazer', href: '#lazer' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
]

export default function Footer() {
  return (
    <footer className="relative bg-inkk-charcoal border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="text-inkk-accent" size={24} />
              <span className="font-[var(--font-heading)] text-2xl font-bold text-white">INKK</span>
            </div>
            <p className="text-white/40 text-sm font-[var(--font-body)] leading-relaxed max-w-xs">
              Empreendimentos pensados para quem valoriza qualidade de vida, design contemporâneo e localização privilegiada.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-[var(--font-body)] text-sm tracking-wide">Links</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="cursor-pointer text-white/40 hover:text-white text-sm font-[var(--font-body)] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Credits */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-[var(--font-body)] text-sm tracking-wide">Realização</h4>
            <div className="space-y-2 text-sm text-white/40 font-[var(--font-body)]">
              <p><span className="text-white/60">Realização:</span> INKKORP Empreendimentos</p>
              <p><span className="text-white/60">Construção:</span> INKKORP</p>
              <p><span className="text-white/60">Arquitetura:</span> CVO Projetos</p>
              <p><span className="text-white/60">Decoração:</span> TEG Studio</p>
              <p><span className="text-white/60">Paisagismo:</span> HZ Paisagismo</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/25 text-xs font-[var(--font-body)] text-center md:text-left max-w-2xl">
              Imagens e perspectivas são meramente ilustrativas. Comercialização somente após registro da incorporação conforme Lei nº 4.591/1964.
              Realização: Eiras Garcia Empreendimentos SPE Ltda. e Inkkorp Empreendimentos Ltda.
            </p>
            <p className="text-white/25 text-xs font-[var(--font-body)] shrink-0">
              © {new Date().getFullYear()} INKKORP. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
