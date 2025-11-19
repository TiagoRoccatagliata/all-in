"use client";

import Link from "next/link";
import { Badge, Card } from "@/components/ui";

/* ====== Video Player Mockup ====== */
function VideoPlayerMockup() {
  return (
    <div className="video-player-mockup">
      {/* Video thumbnail/placeholder */}
      <div className="video-player-screen">
        <div className="video-player-content">
          <div className="video-play-button">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="32" fill="currentColor" fillOpacity="0.9"/>
              <path d="M26 20L44 32L26 44V20Z" fill="var(--background)"/>
            </svg>
          </div>
          <div className="video-info">
            <h3 className="video-title">Introducción a ALL-IN</h3>
            <p className="video-description">Aprende los fundamentos de la educación financiera</p>
          </div>
        </div>
      </div>

      {/* Video controls */}
      <div className="video-controls">
        <button className="video-control-btn" aria-label="Play">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 3L15 10L5 17V3Z"/>
          </svg>
        </button>
        <div className="video-progress-container">
          <div className="video-progress-bar">
            <div className="video-progress-fill" style={{ width: '35%' }}></div>
          </div>
          <div className="video-time">
            <span>2:15</span>
            <span>6:30</span>
          </div>
        </div>
        <button className="video-control-btn" aria-label="Volume">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9 4L5 8H2V12H5L9 16V4Z"/>
            <path d="M12 8C12.5 8.5 13 9.5 13 10C13 10.5 12.5 11.5 12 12"/>
          </svg>
        </button>
        <button className="video-control-btn" aria-label="Fullscreen">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 3H8V5H5V8H3V3Z"/>
            <path d="M17 3H12V5H15V8H17V3Z"/>
            <path d="M3 17H8V15H5V12H3V17Z"/>
            <path d="M17 17H12V15H15V12H17V17Z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

/* ====== HOME PAGE ====== */
export default function Home() {
  return (
    <div className="page-container">
      {/* NAVBAR */}
      <header className="navbar">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-3" aria-label="Inicio">
            <img
              src="/logo-allin.png"
              alt="ALL-IN Argentina"
              className="h-10 w-auto"
            />
          </Link>
          <div className="hidden gap-6 text-sm md:flex">
            <Link href="/educacion" className="nav-link">Educación</Link>
            <Link href="/herramientas" className="nav-link">Herramientas</Link>
            <Link href="/noticias" className="nav-link">Noticias</Link>
            <Link href="/premium" className="nav-link">Premium</Link>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/login" className="btn-secondary">
              Iniciar sesión
            </Link>
            <Link href="/register" className="btn-primary hidden md:inline-flex">
              Crear cuenta
            </Link>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero-section">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text content */}
            <div className="hero-content">
              <h1 className="hero-title">
                Aprendé a jugar, incluso cuando el país cambia las reglas.
              </h1>
              <p className="hero-subtitle">
                Donde otros ven incertidumbre, nosotros vemos estrategia.
              </p>
              <div className="hero-actions">
                <Link href="/educacion" className="btn-primary btn-large">
                  Empezar ahora
                </Link>
                <Link href="/noticias" className="btn-secondary btn-large">
                  Ver noticias
                </Link>
              </div>
              <p className="hero-tagline">
                ALL-IN: educación financiera para los que no apuestan a la suerte.
              </p>
            </div>

            {/* Video player */}
            <div className="hero-media">
              <VideoPlayerMockup />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="benefits-section">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="section-title">Por qué elegir ALL-IN</h2>
            <p className="section-subtitle">
              Educación financiera diseñada para la realidad argentina
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card title="Contenido claro y práctico">
              Explicaciones concretas, sin humo, con foco en Argentina.
            </Card>
            <Card title="Herramientas confiables">
              Calculadoras y simuladores con supuestos explícitos.
            </Card>
            <Card title="Modelo freemium honesto">
              Acceso gratuito al nivel inicial; más profundidad en Premium.
            </Card>
          </div>
        </div>
      </section>

      {/* SECCIONES DESTACADAS */}
      <section className="featured-section">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="section-title">Comenzá tu camino</h2>
            <p className="section-subtitle">
              Contenido y herramientas para todos los niveles
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card
              title="Nivel 1 – Fundamentos"
              badge={<Badge variant="free">Gratis</Badge>}
              cta={<Link href="/educacion" className="btn-cta-primary">Aprender</Link>}
            >
              Dinero, inflación, poder adquisitivo y decisiones del día a día.
            </Card>
            <Card
              title="Herramientas clave"
              badge={<Badge variant="free">Gratis</Badge>}
              cta={<Link href="/herramientas" className="btn-cta-secondary">Usar ahora</Link>}
            >
              Presupuesto y Ahorro con Inflación.
            </Card>
            <Card
              title="Noticias y contexto"
              cta={<Link href="/noticias" className="btn-cta-secondary">Ver notas</Link>}
            >
              Actualidad financiera explicada simple.
            </Card>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-3 mb-4">
                <img
                  src="/logo-allin.png"
                  alt="ALL-IN Argentina"
                  className="h-10 w-auto"
                />
              </Link>
              <p className="footer-description">
                Educación financiera para la realidad argentina.
                Donde otros ven incertidumbre, nosotros vemos estrategia.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="footer-heading">Navegación</h3>
              <ul className="footer-list">
                <li><Link href="/educacion" className="footer-link">Educación</Link></li>
                <li><Link href="/herramientas" className="footer-link">Herramientas</Link></li>
                <li><Link href="/noticias" className="footer-link">Noticias</Link></li>
                <li><Link href="/premium" className="footer-link">Premium</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="footer-heading">Legal</h3>
              <ul className="footer-list">
                <li><a href="#" className="footer-link">Términos de uso</a></li>
                <li><a href="#" className="footer-link">Privacidad</a></li>
                <li><a href="#" className="footer-link">Contacto</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <p className="footer-copyright">
              © {new Date().getFullYear()} ALL-IN. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
