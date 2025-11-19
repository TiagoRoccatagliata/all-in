"use client";

import Link from "next/link";
import { Badge } from "@/components/ui";

const learningPath = [
  {
    level: 1,
    title: "Fundamentos",
    badge: "free",
    description: "Las bases para entender el dinero en Argentina",
    duration: "2-3 semanas",
    modules: [
      { name: "¿Qué es el dinero y por qué pierde valor?", duration: "15 min" },
      { name: "Inflación: el impuesto invisible", duration: "20 min" },
      { name: "Poder adquisitivo: de qué hablamos cuando hablamos de salario", duration: "18 min" },
      { name: "Tipos de cambio y dolarización del ahorro", duration: "25 min" },
      { name: "Tu primer presupuesto personal", duration: "30 min" }
    ]
  },
  {
    level: 2,
    title: "Gestión práctica",
    badge: "premium",
    description: "Herramientas del día a día para administrar tu dinero",
    duration: "3-4 semanas",
    modules: [
      { name: "Tarjetas de crédito: beneficios y trampas", duration: "22 min" },
      { name: "Billeteras virtuales y transferencias", duration: "18 min" },
      { name: "Monotributo y AFIP para principiantes", duration: "35 min" },
      { name: "Gastos deducibles y factura electrónica", duration: "20 min" },
      { name: "Construyendo tu fondo de emergencia", duration: "25 min" }
    ]
  },
  {
    level: 3,
    title: "Planificación e inversión",
    badge: "premium",
    description: "Estrategias para hacer crecer tu patrimonio",
    duration: "4-5 semanas",
    modules: [
      { name: "Metas financieras: método SMART adaptado", duration: "20 min" },
      { name: "Plazo fijo tradicional vs UVA", duration: "28 min" },
      { name: "Bonos argentinos: conceptos básicos", duration: "30 min" },
      { name: "CEDEARs: invertir en empresas globales desde Argentina", duration: "35 min" },
      { name: "Diversificación y gestión de riesgos", duration: "25 min" }
    ]
  },
  {
    level: 4,
    title: "Estrategias avanzadas",
    badge: "premium",
    description: "Herramientas profesionales para optimizar tu economía",
    duration: "5-6 semanas",
    modules: [
      { name: "Análisis fundamental de empresas", duration: "40 min" },
      { name: "Estrategias de cobertura cambiaria", duration: "35 min" },
      { name: "Planificación fiscal y optimización tributaria", duration: "45 min" },
      { name: "Portafolios de inversión: construcción y rebalanceo", duration: "38 min" },
      { name: "Retiro y planificación a largo plazo", duration: "30 min" }
    ]
  }
];

export default function EducacionPage() {
  return (
    <div className="page-container">
      {/* NAVBAR */}
      <header className="navbar">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
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

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-7xl px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="section-title">Educación financiera</h1>
          <p className="section-subtitle">
            Aprendé paso a paso con una ruta diseñada para la realidad argentina
          </p>
        </div>

        {/* Learning Path */}
        <div className="space-y-8">
          {learningPath.map((level) => (
            <div key={level.level} className="education-level-card">
              <div className="education-level-header">
                <div className="flex items-start gap-4">
                  <div className="education-level-number">
                    {level.level}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="education-level-title">Nivel {level.level}: {level.title}</h2>
                      <Badge variant={level.badge as "free" | "premium"}>
                        {level.badge === "free" ? "Gratis" : "Premium"}
                      </Badge>
                    </div>
                    <p className="education-level-description">{level.description}</p>
                    <div className="education-level-meta">
                      <span>📚 {level.modules.length} módulos</span>
                      <span className="education-meta-separator">•</span>
                      <span>⏱️ {level.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modules */}
              <div className="education-modules">
                {level.modules.map((module, idx) => (
                  <div key={idx} className="education-module">
                    <div className="education-module-number">{idx + 1}</div>
                    <div className="education-module-content">
                      <h3 className="education-module-title">{module.name}</h3>
                      <span className="education-module-duration">{module.duration}</span>
                    </div>
                    <div className="education-module-icon">
                      {level.badge === "premium" ? "🔒" : "▶"}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="education-level-footer">
                {level.badge === "free" ? (
                  <Link href="/educacion/nivel-1/modulo-1" className="btn-primary btn-large">
                    Comenzar nivel gratuito
                  </Link>
                ) : (
                  <Link href="/premium" className="btn-cta-secondary btn-large">
                    Desbloquear con Premium
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16">
          <div className="education-cta-banner">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#000b29' }}>
                ¿Listo para tomar control de tus finanzas?
              </h2>
              <p className="text-lg mb-6" style={{ color: 'rgba(10, 27, 42, 0.8)' }}>
                Empezá gratis con el Nivel 1 o accedé a todo el contenido con Premium
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/register" className="btn-primary btn-large">
                  Crear cuenta gratis
                </Link>
                <Link href="/premium" className="education-cta-link">
                  Ver planes Premium →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
            <div>
              <h3 className="footer-heading">Navegación</h3>
              <ul className="footer-list">
                <li><Link href="/educacion" className="footer-link">Educación</Link></li>
                <li><Link href="/herramientas" className="footer-link">Herramientas</Link></li>
                <li><Link href="/noticias" className="footer-link">Noticias</Link></li>
                <li><Link href="/premium" className="footer-link">Premium</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="footer-heading">Legal</h3>
              <ul className="footer-list">
                <li><a href="#" className="footer-link">Términos de uso</a></li>
                <li><a href="#" className="footer-link">Privacidad</a></li>
                <li><a href="#" className="footer-link">Contacto</a></li>
              </ul>
            </div>
          </div>
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
