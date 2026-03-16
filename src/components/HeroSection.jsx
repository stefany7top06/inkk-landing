import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

function interpolateColor(color1, color2, factor) {
  const hex = (c) => parseInt(c, 16)
  const r1 = hex(color1.slice(1, 3)), g1 = hex(color1.slice(3, 5)), b1 = hex(color1.slice(5, 7))
  const r2 = hex(color2.slice(1, 3)), g2 = hex(color2.slice(3, 5)), b2 = hex(color2.slice(5, 7))
  const r = Math.round(r1 + (r2 - r1) * factor)
  const g = Math.round(g1 + (g2 - g1) * factor)
  const b = Math.round(b1 + (b2 - b1) * factor)
  return `rgb(${r},${g},${b})`
}

export default function HeroSection() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const overlayRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const lastVideoUpdate = useRef(0)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onLoaded = () => {
      setVideoReady(true)
      video.currentTime = 0
    }
    video.addEventListener('loadedmetadata', onLoaded)
    video.addEventListener('loadeddata', onLoaded)

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=280%',
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress

          // Throttle video seek to ~60fps
          const now = performance.now()
          if (video.readyState >= 2 && video.duration && now - lastVideoUpdate.current > 16) {
            video.currentTime = progress * video.duration
            lastVideoUpdate.current = now
          }

          // Background color interpolation
          const bgColor = interpolateColor('#657F5B', '#3C5322', progress)
          document.body.style.backgroundColor = bgColor
          if (sectionRef.current) sectionRef.current.style.backgroundColor = bgColor

          // Overlay: visible 0→0.6, fades out 0.6→0.85
          if (overlayRef.current) {
            const op = progress < 0.6 ? 1 : progress < 0.85 ? 1 - (progress - 0.6) / 0.25 : 0
            overlayRef.current.style.opacity = op
          }

          if (scrollIndicatorRef.current) {
            scrollIndicatorRef.current.style.opacity = progress > 0.05 ? 0 : 1
          }
        }
      })
    }, sectionRef)

    return () => {
      video.removeEventListener('loadedmetadata', onLoaded)
      video.removeEventListener('loadeddata', onLoaded)
      ctx.revert()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
      style={{ backgroundColor: '#657F5B' }}
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/hero.mp4"
        muted
        playsInline
        preload="auto"
        style={{ opacity: videoReady ? 1 : 0, transition: 'opacity 0.8s ease' }}
      />

      {/* Gradient overlays — stronger vignette so text is always readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/65 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30 pointer-events-none" />

      {/* Content overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 flex items-center justify-center z-10"
      >
        <div className="text-center px-4 sm:px-6 md:px-8 w-full max-w-4xl mx-auto" style={{ animation: 'heroFadeUp 1s ease 0.2s both' }}>
          {/* Backdrop card keeps text legible over any image */}
          <div className="block w-full bg-black/50 backdrop-blur-md rounded-3xl px-6 py-10 sm:px-10 sm:py-12 shadow-2xl border border-white/10">
            {/* Brand badge */}
            <div className="mb-5">
              <span className="inline-block px-4 py-2 text-xs sm:text-sm tracking-[0.3em] uppercase border border-white/40 rounded-full backdrop-blur-sm bg-white/10 text-white font-[var(--font-body)]">
                INKKORP Empreendimentos
              </span>
            </div>

            <h1
              className="font-[var(--font-heading)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-3 sm:mb-4 leading-[1.05]"
              style={{ textShadow: '0 4px 24px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.9)' }}
            >
              INKK
            </h1>
            <p
              className="text-xl sm:text-2xl md:text-3xl font-normal text-white/90 mb-4 font-[var(--font-heading)]"
              style={{ textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}
            >
              Viva o Extraordinário
            </p>

            <p className="text-sm sm:text-base md:text-lg text-white/75 max-w-xl mx-auto mb-8 font-light font-[var(--font-body)] leading-relaxed">
              Apartamentos de 27 a 42m² com design contemporâneo, lazer completo e localização privilegiada em São Paulo
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="#empreendimentos"
                className="cursor-pointer px-8 py-4 bg-white text-inkk-dark font-semibold rounded-full hover:bg-inkk-cream transition-all duration-300 hover:scale-105 shadow-xl font-[var(--font-body)] tracking-wide"
              >
                Conheça os Empreendimentos
              </a>
              <a
                href="#contato"
                className="cursor-pointer px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/15 backdrop-blur-sm transition-all duration-300 font-[var(--font-body)] tracking-wide"
              >
                Agende sua Visita
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 transition-opacity duration-500"
      >
        <span className="text-white/60 text-sm tracking-widest uppercase font-[var(--font-body)]">
          Role para explorar
        </span>
        <ChevronDown className="text-white/60 animate-bounce" size={24} />
      </div>
    </section>
  )
}
