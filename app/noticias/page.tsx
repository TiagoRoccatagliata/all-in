"use client";

import Link from "next/link";

const newsArticles = [
  {
    id: 1,
    title: "Inflación de octubre: qué significa para tus ahorros",
    excerpt: "El índice de precios al consumidor cerró octubre en 2.7%. Analizamos el impacto en el poder adquisitivo y estrategias para proteger tu dinero.",
    category: "Economía",
    date: "15 Nov 2024",
    readTime: "5 min",
    featured: true,
    image: "/news/inflation.jpg"
  },
  {
    id: 2,
    title: "Nuevas categorías de Monotributo: ¿te conviene recategorizarte?",
    excerpt: "Con los cambios en los topes y valores de las categorías, te ayudamos a determinar si es momento de actualizar tu situación fiscal.",
    category: "Impuestos",
    date: "12 Nov 2024",
    readTime: "7 min",
    featured: true,
    image: "/news/monotributo.jpg"
  },
  {
    id: 3,
    title: "Dólar vs. Plazo Fijo UVA: ¿dónde guardar tus pesos?",
    excerpt: "Comparamos rendimientos reales de las principales opciones de ahorro en Argentina. Datos actualizados y proyecciones para los próximos meses.",
    category: "Inversiones",
    date: "10 Nov 2024",
    readTime: "6 min",
    featured: false,
    image: "/news/savings.jpg"
  },
  {
    id: 4,
    title: "5 gastos hormiga que están vaciando tu billetera",
    excerpt: "Identificá esos pequeños gastos diarios que acumulados pueden representar hasta un 20% de tu ingreso mensual. Con ejemplos reales.",
    category: "Finanzas Personales",
    date: "8 Nov 2024",
    readTime: "4 min",
    featured: false,
    image: "/news/expenses.jpg"
  },
  {
    id: 5,
    title: "Cómo armar un fondo de emergencia en un contexto inflacionario",
    excerpt: "La regla de los 6 meses adaptada a Argentina. Estrategias para construir tu colchón financiero sin perder contra la inflación.",
    category: "Ahorro",
    date: "5 Nov 2024",
    readTime: "8 min",
    featured: false,
    image: "/news/emergency.jpg"
  },
  {
    id: 6,
    title: "Tarjetas de crédito: ¿aliadas o enemigas de tu presupuesto?",
    excerpt: "Cómo usar el crédito a tu favor en un contexto de tasas de interés variables. Beneficios, riesgos y mejores prácticas.",
    category: "Finanzas Personales",
    date: "3 Nov 2024",
    readTime: "5 min",
    featured: false,
    image: "/news/credit.jpg"
  },
  {
    id: 7,
    title: "Bonos argentinos: guía básica para principiantes",
    excerpt: "Todo lo que necesitás saber antes de invertir en deuda soberana. Riesgos, rendimientos y cómo empezar con montos accesibles.",
    category: "Inversiones",
    date: "1 Nov 2024",
    readTime: "10 min",
    featured: false,
    image: "/news/bonds.jpg"
  },
  {
    id: 8,
    title: "Presupuesto familiar: el método 50/30/20 adaptado a Argentina",
    excerpt: "La famosa regla de distribución de ingresos, ajustada para funcionar en un contexto de alta inflación y salarios variables.",
    category: "Finanzas Personales",
    date: "29 Oct 2024",
    readTime: "6 min",
    featured: false,
    image: "/news/budget.jpg"
  },
  {
    id: 9,
    title: "Cambios en el mercado cambiario: qué esperar para fin de año",
    excerpt: "Análisis de las medidas recientes del BCRA y proyecciones sobre el tipo de cambio. Opinión de economistas y estrategias de cobertura.",
    category: "Economía",
    date: "27 Oct 2024",
    readTime: "7 min",
    featured: false,
    image: "/news/dollar.jpg"
  }
];

const categories = ["Todos", "Economía", "Inversiones", "Finanzas Personales", "Ahorro", "Impuestos"];

export default function NoticiasPage() {
  const featuredArticles = newsArticles.filter(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

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
          <h1 className="section-title">Noticias y actualidad</h1>
          <p className="section-subtitle">
            Contexto financiero argentino explicado de forma simple y práctica
          </p>
        </div>

        {/* Categories */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`news-category-btn ${category === "Todos" ? "active" : ""}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Articles */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>Destacados</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredArticles.map((article) => (
              <article key={article.id} className="news-card news-card-featured">
                <div className="news-card-image-placeholder">
                  <div className="news-card-image-icon">📰</div>
                </div>
                <div className="news-card-content">
                  <div className="news-card-meta">
                    <span className="news-category-badge">{article.category}</span>
                    <span className="news-meta-text">{article.date}</span>
                    <span className="news-meta-separator">•</span>
                    <span className="news-meta-text">{article.readTime} de lectura</span>
                  </div>
                  <h3 className="news-card-title">{article.title}</h3>
                  <p className="news-card-excerpt">{article.excerpt}</p>
                  <Link href="#" className="news-card-link">
                    Leer artículo →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Regular Articles */}
        <section>
          <h2 className="text-xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>Más artículos</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularArticles.map((article) => (
              <article key={article.id} className="news-card">
                <div className="news-card-image-placeholder small">
                  <div className="news-card-image-icon small">📄</div>
                </div>
                <div className="news-card-content">
                  <div className="news-card-meta">
                    <span className="news-category-badge">{article.category}</span>
                  </div>
                  <h3 className="news-card-title small">{article.title}</h3>
                  <p className="news-card-excerpt small">{article.excerpt}</p>
                  <div className="news-card-footer">
                    <span className="news-meta-text">{article.date}</span>
                    <span className="news-meta-separator">•</span>
                    <span className="news-meta-text">{article.readTime}</span>
                  </div>
                  <Link href="#" className="news-card-link">
                    Leer más →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mt-16">
          <div className="news-newsletter-cta">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
                No te pierdas ninguna actualización
              </h2>
              <p className="text-base mb-6" style={{ color: 'var(--card-text-muted)' }}>
                Recibí las noticias más importantes sobre economía y finanzas personales directo en tu email
              </p>
              <form className="flex flex-col sm:flex-row gap-3 justify-center">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="auth-input sm:max-w-xs"
                />
                <button type="submit" className="btn-primary">
                  Suscribirme
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

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
