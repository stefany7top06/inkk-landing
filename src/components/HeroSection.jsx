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
  const textRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onLoaded = () => {
      setVideoReady(true)
      video.currentTime = 0
    }
    video.addEventListener('loadeddata', onLoaded)

    const ctx = gsap.context(() => {
      // Pin the hero and scrub through video
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=300%',
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress
          // Advance video directly — scrub: true handles smoothing
          if (video.duration) {
            video.currentTime = progress * video.duration
          }
          // Interpolate background color
          const bgColor = interpolateColor('#657F5B', '#3C5322', progress)
          document.body.style.backgroundColor = bgColor
          if (sectionRef.current) {
            sectionRef.current.style.backgroundColor = bgColor
          }
          // Fade overlay text
          if (overlayRef.current) {
            const textOpacity = progress < 0.3 ? 1 : progress < 0.6 ? 1 - (progress - 0.3) / 0.3 : 0
            overlayRef.current.style.opacity = textOpacity
          }
          // Parallax text movement
          if (textRef.current) {
            textRef.current.style.transform = `translateY(${progress * -60}px)`
          }
          // Hide scroll indicator
          if (scrollIndicatorRef.current) {
            scrollIndicatorRef.current.style.opacity = progress > 0.05 ? 0 : 1
          }
        }
      })

      // Entrance animation
      gsap.from(textRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.3,
      })
    }, sectionRef)

    return () => {
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

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent pointer-events-none" />

      {/* Content overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 flex items-center justify-center z-10"
        style={{ perspective: '1200px' }}
      >
        <div ref={textRef} className="text-center px-4 sm:px-6 md:px-8 w-full max-w-4xl mx-auto">
          {/* Logo / Brand */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 text-sm tracking-[0.3em] uppercase border border-white/30 rounded-full backdrop-blur-sm bg-white/10 font-[var(--font-body)]">
              INKKORP Empreendimentos
            </span>
          </div>

          <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 leading-[1.1] drop-shadow-2xl">
            INKK
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mt-2 text-white/90">
              Viva o Extraordinário
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 sm:mb-10 font-light font-[var(--font-body)] leading-relaxed">
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
