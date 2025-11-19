import Link from "next/link";

export default function LoginPage() {
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

      {/* LOGIN FORM */}
      <section className="mx-auto max-w-md px-4 py-16">
        <div className="auth-card">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold mb-2">Bienvenido de vuelta</h1>
            <p className="text-sm" style={{ color: 'var(--card-text-muted)' }}>
              Ingresá a tu cuenta para continuar
            </p>
          </div>

          <form className="space-y-5">
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

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="auth-checkbox" />
                <span>Recordarme</span>
              </label>
              <a href="#" className="text-link">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <button type="submit" className="btn-primary w-full justify-center">
              Iniciar sesión
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span style={{ color: 'var(--card-text-muted)' }}>
              ¿No tenés cuenta?{" "}
            </span>
            <Link href="/register" className="text-link font-semibold">
              Crear cuenta
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
