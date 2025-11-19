"use client";

import Link from "next/link";
import { Badge, Card } from "@/components/ui";

export default function HerramientasPage() {
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

      {/* HERO SECTION */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="section-title">Herramientas financieras</h1>
          <p className="section-subtitle">
            Calculadoras y simuladores para tomar decisiones con datos reales
          </p>
        </div>

        {/* TOOLS GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          <Card
            title="Calculadora de Presupuesto"
            badge={<Badge variant="free">Gratis</Badge>}
            cta={
              <Link href="/herramientas/presupuesto" className="btn-cta-primary">
                Usar herramienta
              </Link>
            }
          >
            Organizá tus finanzas mensuales y recibí alertas si tus gastos no esenciales superan el 30%.
          </Card>

          <Card
            title="Simulador de Ahorro con Inflación"
            badge={<Badge variant="free">Gratis</Badge>}
            cta={
              <Link href="/herramientas/ahorro" className="btn-cta-primary">
                Simular ahorro
              </Link>
            }
          >
            Proyectá el impacto real de la inflación en tus ahorros con comparación nominal vs. poder adquisitivo.
          </Card>

          <Card
            title="Calculadora de Monotributo"
            badge={<Badge variant="premium">Premium</Badge>}
            cta={
              <Link href="/premium" className="btn-cta-secondary">
                Ver Premium
              </Link>
            }
          >
            Calculá tu categoría ideal, aportes mensuales y gastos anuales del monotributo.
          </Card>

          <Card
            title="Comparador de Productos Financieros"
            badge={<Badge variant="premium">Premium</Badge>}
            cta={
              <Link href="/premium" className="btn-cta-secondary">
                Ver Premium
              </Link>
            }
          >
            Compará tasas, costos y beneficios entre distintos productos bancarios y de inversión.
          </Card>
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
