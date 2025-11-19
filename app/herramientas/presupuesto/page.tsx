"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";

const fmt = (n: number) =>
  n.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  });

export default function PresupuestoPage() {
  const [ingresos, setIngresos] = useState<string>("");
  const [esenciales, setEsenciales] = useState<string>("");
  const [noEsenciales, setNoEsenciales] = useState<string>("");
  const [ahorro, setAhorro] = useState<string>("");

  const values = useMemo(() => {
    const i = Number(ingresos) || 0;
    const e = Number(esenciales) || 0;
    const n = Number(noEsenciales) || 0;
    const a = Number(ahorro) || 0;
    const totalGastos = e + n + a;
    const saldo = i - totalGastos;
    const pctNoEsenciales = i > 0 ? (n / i) * 100 : 0;
    const pctEsenciales = i > 0 ? (e / i) * 100 : 0;
    const pctAhorro = i > 0 ? (a / i) * 100 : 0;
    return { i, e, n, a, totalGastos, saldo, pctNoEsenciales, pctEsenciales, pctAhorro };
  }, [ingresos, esenciales, noEsenciales, ahorro]);

  const alertaNoEsenciales = values.pctNoEsenciales > 30;
  const alertaGastoMayorIngreso = values.totalGastos > values.i;

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
      <main className="mx-auto max-w-4xl px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/herramientas" className="tool-back-link">
            ← Volver a Herramientas
          </Link>
          <h1 className="tool-title">Calculadora de Presupuesto</h1>
          <p className="tool-description">
            Ingresá tus números mensuales. La alerta se activa si los <strong>no esenciales</strong> superan el 30% de tus ingresos.
          </p>
        </div>

        {/* FORM */}
        <div className="tool-card">
          <h2 className="tool-section-title">Ingresá tus datos</h2>
          <form className="tool-form">
            <Field label="Ingresos mensuales (ARS)">
              <InputMoney value={ingresos} onChange={setIngresos} placeholder="Ej: 500000" />
            </Field>

            <div className="tool-form-grid">
              <Field label="Gastos esenciales">
                <InputMoney value={esenciales} onChange={setEsenciales} placeholder="alquiler, comida..." />
              </Field>
              <Field label="No esenciales">
                <InputMoney value={noEsenciales} onChange={setNoEsenciales} placeholder="salidas, apps..." />
              </Field>
              <Field label="Ahorro / Inversiones">
                <InputMoney value={ahorro} onChange={setAhorro} placeholder="meta mensual" />
              </Field>
            </div>
          </form>
        </div>

        {/* ALERTAS */}
        {(alertaNoEsenciales || alertaGastoMayorIngreso) && (
          <div className="tool-alerts">
            {alertaNoEsenciales && (
              <Alert type="warning" title="Alerta: No esenciales > 30%">
                Estás destinando {values.pctNoEsenciales.toFixed(1)}% de tus ingresos a no esenciales. Considerá recortar para priorizar ahorro y metas.
              </Alert>
            )}
            {alertaGastoMayorIngreso && (
              <Alert type="error" title="Tus gastos superan tus ingresos">
                Gastás {fmt(values.totalGastos)} vs ingresos {fmt(values.i)}. Revisá categorías o aumentá ingresos.
              </Alert>
            )}
          </div>
        )}

        {/* RESUMEN */}
        <div className="tool-card">
          <h2 className="tool-section-title">Resumen</h2>
          <div className="tool-stats-grid">
            <Stat label="Ingresos" value={fmt(values.i)} />
            <Stat label="Esenciales" value={`${fmt(values.e)}`} percent={values.pctEsenciales.toFixed(0)} />
            <Stat label="No esenciales" value={`${fmt(values.n)}`} percent={values.pctNoEsenciales.toFixed(0)} />
            <Stat label="Ahorro" value={`${fmt(values.a)}`} percent={values.pctAhorro.toFixed(0)} />
          </div>
          <div className={`tool-total ${values.saldo < 0 ? 'negative' : 'positive'}`}>
            <span className="tool-total-label">Saldo disponible</span>
            <span className="tool-total-value">{fmt(values.saldo)}</span>
          </div>
        </div>

        {/* SUGERENCIAS */}
        <div className="tool-tips">
          <h3 className="tool-tips-title">Recomendaciones</h3>
          <ul className="tool-tips-list">
            <li>Referencia 50/30/20: 50% esenciales, 30% no esenciales, 20% ahorro (adaptable al contexto argentino).</li>
            <li>Si tu saldo es negativo, empezá revisando 3 gastos hormiga de mayor impacto.</li>
            <li>Priorizá construir un fondo de emergencia equivalente a 3-6 meses de gastos esenciales.</li>
          </ul>
        </div>
      </main>

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

/* ----------------- Helpers locales ----------------- */

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="tool-field">
      <span className="tool-field-label">{label}</span>
      {children}
    </label>
  );
}

function InputMoney({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <input
      inputMode="numeric"
      pattern="[0-9]*"
      value={value}
      onChange={(e) => onChange(e.target.value.replace(/[^0-9]/g, ""))}
      placeholder={placeholder}
      className="tool-input"
    />
  );
}

function Stat({ label, value, percent }: { label: string; value: string; percent?: string }) {
  return (
    <div className="tool-stat">
      <div className="tool-stat-label">{label}</div>
      <div className="tool-stat-value">{value}</div>
      {percent && <div className="tool-stat-percent">{percent}%</div>}
    </div>
  );
}

function Alert({
  title,
  children,
  type = "warning",
}: {
  title: string;
  children: React.ReactNode;
  type?: "warning" | "error";
}) {
  return (
    <div role="alert" className={`tool-alert tool-alert-${type}`}>
      <strong className="tool-alert-title">{title}</strong>
      <div className="tool-alert-content">{children}</div>
    </div>
  );
}
