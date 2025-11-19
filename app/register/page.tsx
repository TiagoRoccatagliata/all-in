import Link from "next/link";

export default function RegisterPage() {
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

      {/* REGISTER FORM */}
      <section className="mx-auto max-w-md px-4 py-16">
        <div className="auth-card">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold mb-2">Crear cuenta</h1>
            <p className="text-sm" style={{ color: 'var(--card-text-muted)' }}>
              Empezá tu camino hacia la educación financiera
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="auth-label">
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                className="auth-input"
                placeholder="Juan Pérez"
              />
            </div>

            <div>
              <label htmlFor="email" className="auth-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="auth-input"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="auth-label">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                className="auth-input"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label htmlFor="confirm-password" className="auth-label">
                Confirmar contraseña
              </label>
              <input
                type="password"
                id="confirm-password"
                className="auth-input"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-start gap-2 text-sm">
              <input type="checkbox" className="auth-checkbox mt-0.5" id="terms" />
              <label htmlFor="terms" style={{ color: 'var(--card-text-muted)' }}>
                Acepto los{" "}
                <a href="#" className="text-link">
                  términos y condiciones
                </a>{" "}
                y la{" "}
                <a href="#" className="text-link">
                  política de privacidad
                </a>
              </label>
            </div>

            <button type="submit" className="btn-primary w-full justify-center">
              Crear cuenta
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span style={{ color: 'var(--card-text-muted)' }}>
              ¿Ya tenés cuenta?{" "}
            </span>
            <Link href="/login" className="text-link font-semibold">
              Iniciar sesión
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer mt-auto">
        <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
          <div className="footer-bottom" style={{ marginTop: 0, paddingTop: 0, borderTop: 'none' }}>
            <p className="footer-copyright">
              © {new Date().getFullYear()} ALL-IN. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
