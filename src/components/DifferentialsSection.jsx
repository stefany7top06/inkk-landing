import { motion } from 'framer-motion'
import {
  Layers, Volume2, Thermometer, Wind, Blinds, Plug, Beef,
  ShowerHead, LayoutPanelLeft, RectangleHorizontal
} from 'lucide-react'

const differentials = [
  { icon: LayoutPanelLeft, title: 'Plantas Livres', desc: 'Sem vigas internas, mais flexibilidade para seu layout' },
  { icon: RectangleHorizontal, title: 'Piso Nivelado', desc: 'Integração entre sala e terraço sem desnível' },
  { icon: Volume2, title: 'Tratamento Acústico', desc: 'Contrapiso com isolamento acústico para mais conforto' },
  { icon: Thermometer, title: 'Água Quente', desc: 'Previsão de aquecedor de passagem em cozinha e banheiros' },
  { icon: Blinds, title: 'Persiana Integrada', desc: 'Caixilhos com persiana integrada no dormitório' },
  { icon: Wind, title: 'Infra Ar-Condicionado', desc: 'Ponto de dreno e elétrico no terraço para split' },
  { icon: Beef, title: 'Ponto para Grill', desc: 'Ponto elétrico no terraço para grill ou churrasqueira' },
  { icon: ShowerHead, title: 'Toalheiro Elétrico', desc: 'Ponto elétrico para toalheiro no banheiro' },
  { icon: Layers, title: 'Fachada Contemporânea', desc: 'Revestimentos atemporais de alto padrão' },
  { icon: Plug, title: 'Ventilação Natural', desc: 'Banheiros com iluminação e ventilação natural' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function DifferentialsSection() {
  return (
    <section id="diferenciais" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-inkk-gold/8 rounded-full blur-[150px] pointer-events-none" />

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
            Diferenciais
          </span>
          <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Cada Detalhe <span className="gradient-text">Importa</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-[var(--font-body)] font-light">
            Acabamentos e tecnologias pensados para seu conforto e praticidade no dia a dia
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 gap-4"
        >
          {differentials.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="group cursor-pointer"
              >
                <div className="glass-card p-5 md:p-6 flex items-start gap-4 hover:-translate-y-1 hover:shadow-xl hover:shadow-inkk-accent/5 transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-inkk-accent/15 flex items-center justify-center shrink-0 group-hover:bg-inkk-accent/25 transition-colors duration-300">
                    <Icon className="text-inkk-accent" size={22} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold font-[var(--font-body)] mb-1">{item.title}</h3>
                    <p className="text-white/50 text-sm font-[var(--font-body)] font-light leading-relaxed">{item.desc}</p>
                  </div>
                  {/* Number */}
                  <span className="ml-auto text-3xl font-bold text-white/5 font-[var(--font-heading)] shrink-0 group-hover:text-white/10 transition-colors duration-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
