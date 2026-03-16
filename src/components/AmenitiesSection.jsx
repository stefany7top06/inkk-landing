import { motion } from 'framer-motion'
import {
  Waves, UtensilsCrossed, Dumbbell, Users, Baby, Dog, Bike, Clapperboard,
  Briefcase, Scissors, ShoppingCart, TreePine, Pizza, Sun, Gamepad2
} from 'lucide-react'

const amenities = [
  { icon: Waves, label: 'Piscina Adulto e Infantil', category: 'Bem-estar', span: 'col-span-2' },
  { icon: Sun, label: 'Solarium', category: 'Bem-estar' },
  { icon: Clapperboard, label: 'Cinema Externo', category: 'Entretenimento' },
  { icon: UtensilsCrossed, label: 'Salão Gourmet', category: 'Gastronomia' },
  { icon: Pizza, label: 'Churrasqueira com Forno de Pizza', category: 'Gastronomia', span: 'col-span-2' },
  { icon: Dumbbell, label: 'Fitness', category: 'Esporte' },
  { icon: Gamepad2, label: 'Quadra', category: 'Esporte' },
  { icon: Briefcase, label: 'Coworking', category: 'Conveniência' },
  { icon: Users, label: 'Salão de Festas', category: 'Social' },
  { icon: Baby, label: 'Brinquedoteca', category: 'Família' },
  { icon: TreePine, label: 'Playground', category: 'Família' },
  { icon: Dog, label: 'Pet Place', category: 'Conveniência' },
  { icon: Bike, label: 'Bicicletário', category: 'Mobilidade' },
  { icon: ShoppingCart, label: 'Mini Mercado', category: 'Conveniência' },
  { icon: Scissors, label: 'Espaço Beleza', category: 'Bem-estar' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function AmenitiesSection() {
  return (
    <section id="lazer" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-inkk-accent/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm tracking-[0.2em] uppercase text-inkk-accent mb-6 font-[var(--font-body)]">
            Lazer Completo
          </span>
          <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Viva Cada <span className="gradient-text">Momento</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-[var(--font-body)] font-light">
            Mais de 15 áreas de lazer incluindo rooftop exclusivo com vista panorâmica
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {amenities.map((amenity) => {
            const Icon = amenity.icon
            return (
              <motion.div
                key={amenity.label}
                variants={itemVariants}
                className={`group cursor-pointer ${amenity.span || ''}`}
              >
                <div className="glass-card p-5 md:p-6 h-full flex flex-col items-start gap-3 hover:-translate-y-2 hover:shadow-2xl hover:shadow-inkk-accent/10 transition-all duration-500">
                  <div className="w-10 h-10 rounded-xl bg-inkk-accent/15 flex items-center justify-center group-hover:bg-inkk-accent/25 transition-colors duration-300">
                    <Icon className="text-inkk-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm md:text-base font-[var(--font-body)]">{amenity.label}</h3>
                    <span className="text-white/30 text-xs font-[var(--font-body)]">{amenity.category}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Rooftop highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12"
        >
          <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-inkk-dark/50 via-transparent to-inkk-dark/50 pointer-events-none" />
            <div className="relative">
              <span className="text-inkk-gold text-sm tracking-[0.2em] uppercase font-[var(--font-body)]">
                22º Pavimento — Exclusivo
              </span>
              <h3 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
                Lazer Rooftop com Vista
              </h3>
              <p className="text-white/60 max-w-lg mx-auto font-[var(--font-body)] font-light">
                Piscina com solarium, churrasqueira com forno de pizza, espaço cinema e lounge — tudo no topo, com vista panorâmica de São Paulo.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
