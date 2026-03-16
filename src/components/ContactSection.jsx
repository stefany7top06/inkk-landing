import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Globe, MapPin, Send, User, Mail, MessageSquare } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', interest: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contato" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-inkk-charcoal/50 to-inkk-charcoal/80 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-inkk-accent/8 rounded-full blur-[200px] pointer-events-none" />

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
            Contato
          </span>
          <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Agende sua <span className="gradient-text">Visita</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-[var(--font-body)] font-light">
            Visite nosso apartamento decorado e conheça de perto cada detalhe
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-inkk-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="text-inkk-accent" size={28} />
                  </div>
                  <h3 className="font-[var(--font-heading)] text-2xl font-bold text-white mb-2">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-white/60 font-[var(--font-body)]">
                    Nossa equipe entrará em contato em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="text-white/60 text-sm font-[var(--font-body)] mb-1.5 block">Nome</label>
                    <div className="relative">
                      <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                        className="w-full pl-11 pr-4 py-3 bg-white/8 border border-white/10 rounded-xl text-white placeholder-white/30 font-[var(--font-body)] text-sm focus:outline-none focus:ring-2 focus:ring-inkk-accent/50 focus:border-inkk-accent/50 transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="text-white/60 text-sm font-[var(--font-body)] mb-1.5 block">E-mail</label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                          className="w-full pl-11 pr-4 py-3 bg-white/8 border border-white/10 rounded-xl text-white placeholder-white/30 font-[var(--font-body)] text-sm focus:outline-none focus:ring-2 focus:ring-inkk-accent/50 focus:border-inkk-accent/50 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="text-white/60 text-sm font-[var(--font-body)] mb-1.5 block">Telefone</label>
                      <div className="relative">
                        <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(11) 99999-9999"
                          className="w-full pl-11 pr-4 py-3 bg-white/8 border border-white/10 rounded-xl text-white placeholder-white/30 font-[var(--font-body)] text-sm focus:outline-none focus:ring-2 focus:ring-inkk-accent/50 focus:border-inkk-accent/50 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="interest" className="text-white/60 text-sm font-[var(--font-body)] mb-1.5 block">Interesse</label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/8 border border-white/10 rounded-xl text-white font-[var(--font-body)] text-sm focus:outline-none focus:ring-2 focus:ring-inkk-accent/50 focus:border-inkk-accent/50 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-inkk-charcoal">Selecione o empreendimento</option>
                      <option value="tramway" className="bg-inkk-charcoal">INKK Essence Tramway</option>
                      <option value="butanta" className="bg-inkk-charcoal">INKK Prime Butantã</option>
                      <option value="ambos" className="bg-inkk-charcoal">Ambos</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="text-white/60 text-sm font-[var(--font-body)] mb-1.5 block">Mensagem</label>
                    <div className="relative">
                      <MessageSquare size={16} className="absolute left-4 top-3.5 text-white/30" />
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Gostaria de saber mais sobre..."
                        className="w-full pl-11 pr-4 py-3 bg-white/8 border border-white/10 rounded-xl text-white placeholder-white/30 font-[var(--font-body)] text-sm focus:outline-none focus:ring-2 focus:ring-inkk-accent/50 focus:border-inkk-accent/50 transition-all resize-none"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="cursor-pointer w-full py-4 bg-inkk-accent text-inkk-charcoal font-semibold rounded-xl hover:bg-inkk-gold transition-all duration-300 font-[var(--font-body)] tracking-wide text-sm flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <div className="glass-card p-8 flex-1">
              <h3 className="font-[var(--font-heading)] text-xl font-bold text-white mb-6">Informações</h3>

              <div className="space-y-5">
                <a href="tel:+551140409817" className="cursor-pointer flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-inkk-accent/15 flex items-center justify-center group-hover:bg-inkk-accent/25 transition-colors">
                    <Phone className="text-inkk-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-[var(--font-body)]">Telefone</p>
                    <p className="text-white font-semibold font-[var(--font-body)]">(11) 4040-9817</p>
                  </div>
                </a>

                <a href="https://inkkorp.com.br" target="_blank" rel="noopener noreferrer" className="cursor-pointer flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-inkk-accent/15 flex items-center justify-center group-hover:bg-inkk-accent/25 transition-colors">
                    <Globe className="text-inkk-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-[var(--font-body)]">Website</p>
                    <p className="text-white font-semibold font-[var(--font-body)]">inkkorp.com.br</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-inkk-accent/15 flex items-center justify-center shrink-0">
                    <MapPin className="text-inkk-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-[var(--font-body)]">Decorado</p>
                    <p className="text-white font-semibold font-[var(--font-body)]">
                      Av. Eng. Heitor Antônio Eiras Garcia, 340
                    </p>
                    <p className="text-white/50 text-sm font-[var(--font-body)]">Butantã, São Paulo — SP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="glass-card p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-inkk-accent/15 to-inkk-gold/10 pointer-events-none" />
              <div className="relative">
                <h3 className="font-[var(--font-heading)] text-2xl font-bold text-white mb-3">
                  Visite o Decorado
                </h3>
                <p className="text-white/60 text-sm font-[var(--font-body)] mb-6">
                  Agende uma visita e conheça pessoalmente cada detalhe dos nossos empreendimentos
                </p>
                <a
                  href="tel:+551140409817"
                  className="cursor-pointer inline-flex items-center gap-2 px-8 py-3 bg-inkk-accent text-inkk-charcoal font-semibold rounded-full hover:bg-inkk-gold transition-all duration-300 font-[var(--font-body)]"
                >
                  <Phone size={16} />
                  Ligar Agora
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
