"use client";

import Link from "next/link";

export default function Modulo1Page() {
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
      <main className="mx-auto max-w-6xl px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-6">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/educacion" className="text-gold hover:opacity-80">
              Educación
            </Link>
            <span className="text-slate-400">→</span>
            <Link href="/educacion" className="text-gold hover:opacity-80">
              Nivel 1: Fundamentos
            </Link>
            <span className="text-slate-400">→</span>
            <span className="text-slate-600">¿Qué es el dinero y por qué pierde valor?</span>
          </div>
        </nav>

        {/* Course Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="education-level-number text-lg">1</div>
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                ¿Qué es el dinero y por qué pierde valor?
              </h1>
              <div className="flex items-center gap-4 text-sm text-slate-600">
                <span>📚 Nivel 1: Fundamentos</span>
                <span>⏱️ 15 minutos</span>
                <span>🎯 Módulo 1 de 5</span>
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-slate-200 rounded-full h-2 mb-6">
            <div className="bg-gold h-2 rounded-full" style={{ width: '20%' }}></div>
          </div>
        </div>

        {/* Video Section */}
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="video-player-mockup mb-6">
              <div className="video-player-screen">
                <div className="video-player-content">
                  <div className="video-play-button">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div className="video-info">
                    <h2 className="video-title">Introducción: El dinero en Argentina</h2>
                    <p className="video-description">
                      Comenzamos entendiendo qué es el dinero, cómo funciona y por qué en Argentina tiene características especiales
                    </p>
                  </div>
                </div>
              </div>
              <div className="video-controls">
                <button className="video-control-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
                <div className="video-progress-container">
                  <div className="video-progress-bar">
                    <div className="video-progress-fill" style={{ width: '0%' }}></div>
                  </div>
                  <div className="video-time">
                    <span>0:00</span>
                    <span>15:32</span>
                  </div>
                </div>
                <button className="video-control-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                  </svg>
                </button>
                <button className="video-control-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Module Content */}
            <div className="space-y-6">
              {/* Learning Objectives */}
              <div className="card">
                <h3 className="card-title text-foreground mb-4">🎯 Lo que vas a aprender</h3>
                <ul className="space-y-2 card-text">
                  <li className="flex items-start gap-2">
                    <span className="text-gold">✓</span>
                    <span>Qué es realmente el dinero y cuáles son sus funciones básicas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">✓</span>
                    <span>Por qué el dinero pierde valor con el tiempo (inflación)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">✓</span>
                    <span>Cómo afecta esto tu poder adquisitivo diario</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">✓</span>
                    <span>Estrategias básicas para proteger tu dinero</span>
                  </li>
                </ul>
              </div>

              {/* Key Concepts */}
              <div className="card">
                <h3 className="card-title text-foreground mb-4">💡 Conceptos clave</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-foreground mb-2">Inflación</h4>
                    <p className="text-sm text-slate-600">
                      El aumento sostenido y generalizado de los precios que hace que tu dinero pierda poder de compra.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-foreground mb-2">Poder Adquisitivo</h4>
                    <p className="text-sm text-slate-600">
                      La cantidad de bienes y servicios que podés comprar con la misma cantidad de dinero.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-foreground mb-2">Devaluación</h4>
                    <p className="text-sm text-slate-600">
                      Pérdida de valor de la moneda local frente a otras monedas como el dólar.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-foreground mb-2">Reserva de Valor</h4>
                    <p className="text-sm text-slate-600">
                      Función del dinero que permite mantener valor en el tiempo, algo difícil en contextos inflacionarios.
                    </p>
                  </div>
                </div>
              </div>

              {/* Real Example */}
              <div className="card">
                <h3 className="card-title text-foreground mb-4">📊 Ejemplo práctico</h3>
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <h4 className="font-bold text-amber-900 mb-3">El kilo de pan en 10 años</h4>
                  <div className="grid gap-4 md:grid-cols-3 text-center">
                    <div>
                      <div className="text-2xl font-bold text-amber-900">2014</div>
                      <div className="text-sm text-amber-700">$12</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-amber-900">2019</div>
                      <div className="text-sm text-amber-700">$45</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-amber-900">2024</div>
                      <div className="text-sm text-amber-700">$180</div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-amber-800">
                    <strong>¿Qué pasó?</strong> El precio se multiplicó por 15, pero tu salario... ¿se multiplicó por 15 también?
                  </p>
                </div>
              </div>

              {/* Summary */}
              <div className="card">
                <h3 className="card-title text-foreground mb-4">📋 Resumen del módulo</h3>
                <div className="card-text space-y-3">
                  <p>
                    El dinero tiene tres funciones principales: <strong>medio de intercambio</strong>, 
                    <strong> unidad de cuenta</strong> y <strong>reserva de valor</strong>. En Argentina, 
                    esta última función está comprometida por la inflación crónica.
                  </p>
                  <p>
                    La inflación es como un "impuesto silencioso" que reduce tu poder adquisitivo. 
                    Si tu salario no aumenta al mismo ritmo que los precios, efectivamente te estás 
                    empobreciendo, aunque tengas la misma cantidad de pesos.
                  </p>
                  <p>
                    <strong>Acción clave:</strong> Comenzá a pensar en estrategias para proteger tu dinero 
                    de la inflación. En los próximos módulos veremos herramientas concretas para hacerlo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Module Progress */}
            <div className="card">
              <h3 className="card-title text-foreground mb-4">📈 Tu progreso</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Módulos completados</span>
                  <span className="font-bold">0 de 5</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-gold h-2 rounded-full" style={{ width: '0%' }}></div>
                </div>
              </div>
            </div>

            {/* Next Modules */}
            <div className="card">
              <h3 className="card-title text-foreground mb-4">⏭️ Próximos módulos</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 p-2 bg-slate-50 rounded border">
                  <span className="w-6 h-6 bg-slate-300 rounded text-center text-xs flex items-center justify-center">2</span>
                  <span>Inflación: el impuesto invisible</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-slate-50 rounded border opacity-60">
                  <span className="w-6 h-6 bg-slate-300 rounded text-center text-xs flex items-center justify-center">3</span>
                  <span>Poder adquisitivo y salario</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-slate-50 rounded border opacity-60">
                  <span className="w-6 h-6 bg-slate-300 rounded text-center text-xs flex items-center justify-center">4</span>
                  <span>Tipos de cambio y dolarización</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-slate-50 rounded border opacity-60">
                  <span className="w-6 h-6 bg-slate-300 rounded text-center text-xs flex items-center justify-center">5</span>
                  <span>Tu primer presupuesto personal</span>
                </div>
              </div>
            </div>

            {/* Study Tips */}
            <div className="card">
              <h3 className="card-title text-foreground mb-4">💡 Tips de estudio</h3>
              <ul className="text-sm card-text space-y-2">
                <li>• Tomá notas de los conceptos principales</li>
                <li>• Pensá en ejemplos de tu vida cotidiana</li>
                <li>• No te apures, es mejor entender bien</li>
                <li>• Repasá el resumen al final</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-6 border-t border-slate-200">
          <Link href="/educacion" className="btn-secondary">
            ← Volver a Educación
          </Link>
          <div className="flex gap-3">
            <button className="btn-cta-secondary opacity-50 cursor-not-allowed" disabled>
              ← Módulo anterior
            </button>
            <Link href="#" className="btn-primary">
              Completar módulo →
            </Link>
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
