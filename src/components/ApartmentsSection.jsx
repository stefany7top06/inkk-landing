import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Car, BedDouble, Maximize2 } from 'lucide-react'

const tabs = [
  { id: 'tramway', label: 'Essence Tramway' },
  { id: 'butanta', label: 'Prime Butantã' },
]

const apartments = {
  tramway: [
    { type: '2 Dorm Suíte + Office', area: '41,96 m²', units: 18, hasParking: true, beds: 2, highlight: true },
    { type: '2 Dorm Suíte', area: '38,05 m²', units: 49, hasParking: true, beds: 2, highlight: false },
    { type: '2 Dorm', area: '34,77 m²', units: 17, hasParking: false, beds: 2, highlight: false },
    { type: '2 Dorm', area: '33,09 m²', units: 38, hasParking: false, beds: 2, highlight: false },
    { type: '2 Dorm', area: '31,86 m²', units: 117, hasParking: false, beds: 2, highlight: false },
    { type: '1 Dorm Office', area: '27,99 m²', units: 173, hasParking: false, beds: 1, highlight: false },
  ],
  butanta: [
    { type: '2 Dorm (Tipo A)', area: '34 m²', units: null, hasParking: true, beds: 2, highlight: true },
    { type: '2 Dorm (Tipo B)', area: '31 m²', units: null, hasParking: false, beds: 2, highlight: false },
  ],
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

export default function ApartmentsSection() {
  const [activeTab, setActiveTab] = useState('tramway')

  return (
    <section id="apartamentos" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm tracking-[0.2em] uppercase text-inkk-accent mb-6 font-[var(--font-body)]">
            Tipologias
          </span>
          <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Escolha seu <span className="gradient-text">Apartamento</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-[var(--font-body)] font-light">
            Diversas opções de planta para atender seu estilo de vida
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-white/8 backdrop-blur-sm rounded-full border border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`cursor-pointer px-6 py-2.5 rounded-full text-sm font-medium font-[var(--font-body)] tracking-wide transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-inkk-accent text-inkk-charcoal shadow-lg'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 perspective-container"
          >
            {apartments[activeTab].map((apt, i) => (
              <motion.div
                key={apt.type + apt.area}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="card-3d group"
              >
                <div className={`glass-card p-6 h-full relative overflow-hidden ${
                  apt.highlight ? 'ring-1 ring-inkk-gold/40' : ''
                }`}>
                  {apt.highlight && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2.5 py-1 bg-inkk-gold/20 text-inkk-gold text-xs rounded-full font-[var(--font-body)] tracking-wide">
                        Destaque
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="font-[var(--font-heading)] text-xl font-bold text-white mb-1">{apt.type}</h3>
                    <div className="flex items-center gap-2 text-white/40 text-sm font-[var(--font-body)]">
                      <Maximize2 size={14} />
                      <span>{apt.area}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <BedDouble size={16} className="text-inkk-accent" />
                      <span className="text-white/70 text-sm font-[var(--font-body)]">
                        {apt.beds} Dormitório{apt.beds > 1 ? 's' : ''}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Car size={16} className={apt.hasParking ? 'text-inkk-accent' : 'text-white/30'} />
                      <span className={`text-sm font-[var(--font-body)] ${apt.hasParking ? 'text-white/70' : 'text-white/40'}`}>
                        {apt.hasParking ? 'Com vaga' : 'Sem vaga'}
                      </span>
                    </div>
                  </div>

                  {apt.units && (
                    <div className="pt-4 border-t border-white/8">
                      <span className="text-inkk-gold font-bold text-2xl font-[var(--font-heading)]">{apt.units}</span>
                      <span className="text-white/40 text-sm ml-2 font-[var(--font-body)]">unidades</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Extra info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-6 text-sm text-white/50 font-[var(--font-body)]">
            <span>✦ Previsão de água quente</span>
            <span>✦ Infra para ar-condicionado</span>
            <span>✦ Banheiros com ventilação natural</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
