"use client";

import Link from "next/link";

const pricingPlans = [
  {
    name: "Mensual",
    price: "4.990",
    period: "/mes",
    description: "Perfectopara probar sin compromiso",
    features: [
      "Acceso a Niveles 2, 3 y 4",
      "Todas las calculadoras avanzadas",
      "Exportación a PDF y Excel",
      "Actualizaciones de contenido",
      "Soporte por email"
    ],
    cta: "Comenzar ahora",
    highlighted: false
  },
  {
    name: "Anual",
    price: "39.990",
    period: "/año",
    savings: "Ahorrás $19.890",
    description: "2 meses gratis al pagar el año",
    features: [
      "Todo lo del plan mensual",
      "Certificados de finalización",
      "Recomendaciones personalizadas",
      "Acceso anticipado a contenido nuevo",
      "Soporte prioritario",
      "Webinars exclusivos mensuales"
    ],
    cta: "Mejor oferta",
    highlighted: true
  }
];

const benefits = [
  {
    icon: "🎓",
    title: "Contenido premium completo",
    description: "Acceso ilimitado a los Niveles 2, 3 y 4 con más de 15 horas de material educativo."
  },
  {
    icon: "🧮",
    title: "Calculadoras profesionales",
    description: "Herramientas avanzadas con exportación a PDF/Excel para planificación detallada."
  },
  {
    icon: "📊",
    title: "Análisis personalizado",
    description: "Recomendaciones basadas en tu perfil financiero y objetivos específicos."
  },
  {
    icon: "🏆",
    title: "Certificados verificables",
    description: "Acreditá tu conocimiento con certificados de cada nivel completado."
  },
  {
    icon: "🔄",
    title: "Actualizaciones constantes",
    description: "Contenido actualizado mensualmente según cambios en la economía argentina."
  },
  {
    icon: "💬",
    title: "Comunidad exclusiva",
    description: "Acceso a foros privados y webinars mensuales con expertos."
  }
];

const faqs = [
  {
    question: "¿Puedo cancelar en cualquier momento?",
    answer: "Sí, podés cancelar tu suscripción cuando quieras. No hay penalidades ni cargos ocultos. Si cancelás, seguís teniendo acceso hasta el final del período pagado."
  },
  {
    question: "¿Qué formas de pago aceptan?",
    answer: "Aceptamos todas las tarjetas de crédito y débito principales (Visa, Mastercard, American Express), MercadoPago y transferencia bancaria."
  },
  {
    question: "¿Los precios incluyen impuestos?",
    answer: "Los precios mostrados son finales e incluyen todos los impuestos aplicables en Argentina (21% IVA + impuestos adicionales si corresponden)."
  },
  {
    question: "¿Hay garantía de devolución?",
    answer: "Sí, ofrecemos una garantía de satisfacción de 7 días. Si no estás conforme con el contenido, te devolvemos el 100% de tu dinero sin preguntas."
  },
  {
    question: "¿El contenido se actualiza?",
    answer: "Sí, actualizamos el contenido mensualmente para reflejar cambios en la economía argentina, nuevas regulaciones y tendencias del mercado."
  },
  {
    question: "¿Puedo acceder desde cualquier dispositivo?",
    answer: "Sí, tenés acceso desde cualquier dispositivo (computadora, tablet, celular). Tu progreso se sincroniza automáticamente entre todos tus dispositivos."
  }
];

export default function PremiumPage() {
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
        <div className="mb-16 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-200 mb-4">
            <span className="text-sm font-semibold" style={{ color: '#000b29' }}>⭐ Inversión en tu futuro financiero</span>
          </div>
          <h1 className="section-title">ALL-IN Premium</h1>
          <p className="section-subtitle">
            Profundizá tu conocimiento y tomá mejores decisiones financieras
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto mb-20">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
            >
              {plan.highlighted && (
                <div className="pricing-badge">Más popular</div>
              )}
              <div className="pricing-header">
                <h3 className="pricing-plan-name">{plan.name}</h3>
                <div className="pricing-price">
                  <span className="pricing-currency">$</span>
                  <span className="pricing-amount">{plan.price}</span>
                  <span className="pricing-period">{plan.period}</span>
                </div>
                {plan.savings && (
                  <div className="pricing-savings">{plan.savings}</div>
                )}
                <p className="pricing-description">{plan.description}</p>
              </div>

              <ul className="pricing-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="pricing-feature">
                    <span className="pricing-feature-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`pricing-cta ${plan.highlighted ? 'primary' : 'secondary'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="premium-guarantee">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
              Garantía de satisfacción de 7 días
            </h3>
            <p style={{ color: 'var(--card-text-muted)' }}>
              Si no estás completamente satisfecho con ALL-IN Premium, te devolvemos el 100% de tu dinero en los primeros 7 días. Sin preguntas, sin complicaciones.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'var(--foreground)' }}>
            Todo lo que incluye Premium
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="premium-benefit-card">
                <div className="premium-benefit-icon">{benefit.icon}</div>
                <h3 className="premium-benefit-title">{benefit.title}</h3>
                <p className="premium-benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'var(--foreground)' }}>
            Preguntas frecuentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="faq-item">
                <summary className="faq-question">{faq.question}</summary>
                <p className="faq-answer">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="premium-final-cta">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#000b29' }}>
              Empezá tu camino hacia la libertad financiera hoy
            </h2>
            <p className="text-lg mb-8" style={{ color: 'rgba(10, 27, 42, 0.8)' }}>
              Más de 1,000 argentinos ya están tomando mejores decisiones financieras con ALL-IN Premium
            </p>
            <Link href="/register" className="btn-primary btn-large">
              Probar Premium gratis por 7 días
            </Link>
            <p className="text-sm mt-4" style={{ color: 'rgba(10, 27, 42, 0.6)' }}>
              Sin tarjeta de crédito requerida para el período de prueba
            </p>
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
