import { motion } from 'framer-motion'
import { MapPin, Clock, GraduationCap, ShoppingBag, Train, Building } from 'lucide-react'

const locations = [
  {
    name: 'INKK Essence Tramway',
    address: 'Rua do Tramway, 925 — Parada Inglesa, SP',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5!2d-46.6388!3d-23.4889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI5JzIwLjAiUyA0NsKwMzgnMTkuNyJX!5e0!3m2!1sen!2sbr!4v1',
    nearby: [],
  },
  {
    name: 'INKK Prime Butantã',
    address: 'Av. Eng. Heitor A. Eiras Garcia, 340 — Butantã, SP',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5!2d-46.7388!3d-23.5689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM0JzA4LjAiUyA0NsKwNDQnMTkuNyJX!5e0!3m2!1sen!2sbr!4v1',
    nearby: [
      { icon: GraduationCap, label: 'USP — Cidade Universitária', time: '5 min' },
      { icon: Train, label: 'Metrô Butantã', time: '10 min' },
      { icon: Building, label: 'Faria Lima', time: '12 min' },
      { icon: ShoppingBag, label: 'Shopping Eldorado', time: '15 min' },
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function LocationSection() {
  return (
    <section id="localizacao" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm tracking-[0.2em] uppercase text-inkk-accent mb-6 font-[var(--font-body)]">
            Localização
          </span>
          <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Onde Tudo <span className="gradient-text">Acontece</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-[var(--font-body)] font-light">
            Localizações estratégicas com fácil acesso a transporte, comércio e universidades
          </p>
        </motion.div>

        {/* Location cards */}
        <div className="space-y-12">
          {locations.map((loc, idx) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="glass-card overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                {/* Map */}
                <div className="h-64 md:h-auto min-h-[300px] bg-inkk-charcoal relative">
                  <iframe
                    title={`Mapa ${loc.name}`}
                    src={loc.mapSrc}
                    className="absolute inset-0 w-full h-full border-0 opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>

                {/* Info */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-3">
                    {loc.name}
                  </h3>
                  <p className="flex items-start gap-2 text-white/60 font-[var(--font-body)] mb-8">
                    <MapPin size={16} className="text-inkk-accent mt-0.5 shrink-0" />
                    {loc.address}
                  </p>

                  {loc.nearby.length > 0 && (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                      <span className="text-white/30 text-xs uppercase tracking-[0.15em] font-[var(--font-body)]">
                        Proximidades
                      </span>
                      {loc.nearby.map((place) => {
                        const Icon = place.icon
                        return (
                          <motion.div
                            key={place.label}
                            variants={itemVariants}
                            className="flex items-center justify-between py-3 border-b border-white/5 last:border-0"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-inkk-accent/15 flex items-center justify-center">
                                <Icon className="text-inkk-accent" size={16} />
                              </div>
                              <span className="text-white/80 text-sm font-[var(--font-body)]">{place.label}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-inkk-gold">
                              <Clock size={12} />
                              <span className="text-sm font-semibold font-[var(--font-body)]">{place.time}</span>
                            </div>
                          </motion.div>
                        )
                      })}
                    </motion.div>
                  )}

                  {loc.nearby.length === 0 && (
                    <div className="space-y-3">
                      <p className="text-white/50 text-sm font-[var(--font-body)]">
                        Bairro da Parada Inglesa — Zona Norte de São Paulo
                      </p>
                      <p className="text-white/50 text-sm font-[var(--font-body)]">
                        Acesso pela Rua do Tramway e Rua Neves Paulista
                      </p>
                      <p className="text-white/50 text-sm font-[var(--font-body)]">
                        Região residencial tranquila com comércio local
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
