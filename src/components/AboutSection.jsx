import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building2, MapPin, Users } from 'lucide-react'

function AnimatedCounter({ target, suffix = '', duration = 2 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView || !ref.current) return
    let start = 0
    const end = parseInt(target)
    const increment = end / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        start = end
        clearInterval(timer)
      }
      if (ref.current) ref.current.textContent = Math.floor(start) + suffix
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [inView, target, suffix, duration])

  return <span ref={ref}>0{suffix}</span>
}

const empreendimentos = [
  {
    name: 'INKK Essence Tramway',
    location: 'Parada Inglesa, São Paulo',
    address: 'Rua do Tramway, 925',
    units: 412,
    area: '27 a 42m²',
    icon: Building2,
    highlights: ['Lazer no Rooftop', 'Piscina com Vista', 'Cinema Externo', '2 Torres'],
    gradient: 'from-inkk-light to-inkk-dark',
  },
  {
    name: 'INKK Prime Butantã',
    location: 'Butantã, São Paulo',
    address: 'Av. Eng. Heitor A. Eiras Garcia, 340',
    units: null,
    area: '31 a 34m²',
    icon: MapPin,
    highlights: ['Próximo à USP', 'Metrô Butantã 10min', 'Plantas Livres', 'Persiana Integrada'],
    gradient: 'from-inkk-dark to-inkk-charcoal',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 60, rotateX: 15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function AboutSection() {
  return (
    <section id="empreendimentos" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-inkk-accent rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-inkk-gold rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm tracking-[0.2em] uppercase text-inkk-accent mb-6 font-[var(--font-body)]">
            Nossos Empreendimentos
          </span>
          <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Dois Projetos,{' '}
            <span className="gradient-text">Uma Visão</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-[var(--font-body)] font-light">
            Empreendimentos pensados para quem valoriza qualidade de vida, localização estratégica e design contemporâneo
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 md:mb-20"
        >
          <div className="text-center">
            <div className="font-[var(--font-heading)] text-4xl md:text-5xl font-bold text-white">
              <AnimatedCounter target={412} suffix="+" />
            </div>
            <p className="text-white/50 text-sm mt-2 font-[var(--font-body)]">Unidades</p>
          </div>
          <div className="text-center">
            <div className="font-[var(--font-heading)] text-4xl md:text-5xl font-bold text-white">
              <AnimatedCounter target={2} />
            </div>
            <p className="text-white/50 text-sm mt-2 font-[var(--font-body)]">Empreendimentos</p>
          </div>
          <div className="text-center">
            <div className="font-[var(--font-heading)] text-4xl md:text-5xl font-bold text-white">
              <AnimatedCounter target={22} />
            </div>
            <p className="text-white/50 text-sm mt-2 font-[var(--font-body)]">Pavimentos</p>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8 perspective-container"
        >
          {empreendimentos.map((emp, i) => {
            const Icon = emp.icon
            return (
              <motion.div
                key={emp.name}
                variants={itemVariants}
                className="card-3d cursor-pointer group"
              >
                <div className="glass-card p-8 md:p-10 h-full relative overflow-hidden">
                  {/* Glow effect */}
                  <div className={`absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br ${emp.gradient} rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

                  <div className="relative">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-xl bg-inkk-accent/20 flex items-center justify-center">
                            <Icon className="text-inkk-accent" size={20} />
                          </div>
                          <span className="text-inkk-accent text-xs tracking-[0.15em] uppercase font-[var(--font-body)]">
                            {i === 0 ? 'Parada Inglesa' : 'Butantã'}
                          </span>
                        </div>
                        <h3 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold text-white">
                          {emp.name}
                        </h3>
                      </div>
                      {emp.units && (
                        <div className="text-right">
                          <span className="text-3xl font-bold text-inkk-gold font-[var(--font-heading)]">{emp.units}</span>
                          <p className="text-white/40 text-xs font-[var(--font-body)]">unidades</p>
                        </div>
                      )}
                    </div>

                    <p className="text-white/60 mb-2 font-[var(--font-body)] flex items-center gap-2">
                      <MapPin size={14} className="text-white/40" />
                      {emp.address}
                    </p>
                    <p className="text-white/40 text-sm mb-6 font-[var(--font-body)]">
                      Apartamentos de {emp.area}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {emp.highlights.map((h) => (
                        <span
                          key={h}
                          className="px-3 py-1.5 bg-white/8 rounded-full text-xs text-white/70 font-[var(--font-body)] border border-white/5"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
