"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";

// ===== Utilidades =====
const fmt = (n: number) =>
  n.toLocaleString("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 });

const annualToMonthly = (t: number) => Math.pow(1 + t, 1 / 12) - 1;

// ===== Página =====
export default function AhorroPage() {
  const [aporte, setAporte] = useState<string>("100000");
  const [inflacionAnual, setInflacionAnual] = useState<string>("120");
  const [rendimientoAnual, setRendimientoAnual] = useState<string>("70");
  const [meses, setMeses] = useState<string>("12");
  const [showAllRows, setShowAllRows] = useState(false);

  const data = useMemo(() => {
    const m = Math.max(1, Math.min(360, Number(meses) || 12));
    const aporteNum = Number(aporte) || 0;
    const rInfl = (Number(inflacionAnual) || 0) / 100;
    const rRend = (Number(rendimientoAnual) || 0) / 100;
    const iMensual = annualToMonthly(rInfl);
    const rMensual = annualToMonthly(rRend);

    const rows: { mes: number; aporte: number; nominal: number; real: number }[] = [];
    let saldoNominal = 0;
    let acumInflacion = 1;

    for (let k = 1; k <= m; k++) {
      saldoNominal += aporteNum;
      saldoNominal *= 1 + rMensual;
      acumInflacion *= 1 + iMensual;
      const valorReal = saldoNominal / acumInflacion;
      rows.push({ mes: k, aporte: aporteNum, nominal: saldoNominal, real: valorReal });
    }
    return rows;
  }, [aporte, inflacionAnual, rendimientoAnual, meses]);

  const totalNominal = data.length ? data[data.length - 1].nominal : 0;
  const totalReal = data.length ? data[data.length - 1].real : 0;
  const perdidaPorInflacion = totalNominal - totalReal;
  const pctPerdida = totalNominal > 0 ? (perdidaPorInflacion / totalNominal) * 100 : 0;

  // Filter data for table - show milestone months
  const filteredData = useMemo(() => {
    if (showAllRows) return data;
    if (data.length <= 12) return data;

    // Show months 1, 3, 6, 12, 24, 36, etc.
    const milestones = [1, 3, 6, 12, 24, 36, 48, 60, 120, 180, 240, 300, 360];
    return data.filter(row => milestones.includes(row.mes) && row.mes <= data.length);
  }, [data, showAllRows]);

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
      <main className="mx-auto max-w-6xl px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/herramientas" className="tool-back-link">
            ← Volver a Herramientas
          </Link>
          <h1 className="tool-title">Simulador de Ahorro con Inflación</h1>
          <p className="tool-description">
            Proyectá el impacto real de la inflación en tus ahorros. Compará el valor nominal vs. el poder adquisitivo real.
          </p>
        </div>

        {/* FORM */}
        <div className="tool-card">
          <h2 className="tool-section-title">Configurá tu simulación</h2>
          <form className="tool-form-grid-4">
            <Field label="Aporte mensual (ARS)">
              <InputMoney value={aporte} onChange={setAporte} />
            </Field>
            <Field label="Inflación anual (%)">
              <InputPercent value={inflacionAnual} onChange={setInflacionAnual} />
            </Field>
            <Field label="Rendimiento anual (%)">
              <InputPercent value={rendimientoAnual} onChange={setRendimientoAnual} />
            </Field>
            <Field label="Período (meses)">
              <InputNumber value={meses} onChange={setMeses} min={1} max={360} />
            </Field>
          </form>
        </div>

        {/* KPIs */}
        <div className="grid gap-4 md:gap-6 md:grid-cols-3 mb-6">
          <div className="tool-kpi-card kpi-primary">
            <div className="tool-kpi-card-label">Total Nominal</div>
            <div className="tool-kpi-card-value">{fmt(totalNominal)}</div>
            <div className="tool-kpi-card-description">Suma de aportes + rendimiento</div>
          </div>

          <div className="tool-kpi-card kpi-success">
            <div className="tool-kpi-card-label">Valor Real (Hoy)</div>
            <div className="tool-kpi-card-value">{fmt(totalReal)}</div>
            <div className="tool-kpi-card-description">Poder adquisitivo actual</div>
          </div>

          <div className="tool-kpi-card kpi-warning">
            <div className="tool-kpi-card-label">Pérdida por Inflación</div>
            <div className="tool-kpi-card-value">{fmt(perdidaPorInflacion)}</div>
            <div className="tool-kpi-card-description">{pctPerdida.toFixed(1)}% del total</div>
          </div>
        </div>

        {/* CHART */}
        <div className="tool-card">
          <h2 className="tool-section-title">Evolución del ahorro</h2>
          <MiniChart rows={data} />
        </div>

        {/* TABLA */}
        <div className="tool-card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="tool-section-title" style={{ marginBottom: 0 }}>Detalle mensual</h2>
            {data.length > 12 && (
              <button
                onClick={() => setShowAllRows(!showAllRows)}
                className="text-sm font-semibold text-link"
              >
                {showAllRows ? "Ver menos" : `Ver todos (${data.length} meses)`}
              </button>
            )}
          </div>

          <div className="tool-table-container">
            <table className="tool-table">
              <thead>
                <tr>
                  <th>Mes</th>
                  <th>Aporte</th>
                  <th>Saldo nominal</th>
                  <th>Saldo real</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((r) => (
                  <tr key={r.mes}>
                    <td><strong>Mes {r.mes}</strong></td>
                    <td>{fmt(r.aporte)}</td>
                    <td className="font-semibold">{fmt(r.nominal)}</td>
                    <td className="font-semibold" style={{ color: 'var(--gold)' }}>{fmt(r.real)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SUGERENCIAS */}
        <div className="tool-tips">
          <h3 className="tool-tips-title">Cómo interpretar estos resultados</h3>
          <ul className="tool-tips-list">
            <li><strong>Valor nominal:</strong> Es el dinero que tendrías en tu cuenta, sin ajustar por inflación.</li>
            <li><strong>Valor real:</strong> Es el poder de compra de ese dinero en pesos de hoy. Te muestra cuánto podrías comprar realmente.</li>
            <li><strong>Inflación:</strong> La diferencia entre nominal y real muestra cuánto valor perdés por la inflación.</li>
            <li>Si el rendimiento es menor a la inflación, tu dinero pierde poder adquisitivo con el tiempo.</li>
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

// ===== Helpers locales =====
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="tool-field">
      <span className="tool-field-label">{label}</span>
      {children}
    </label>
  );
}

function InputMoney({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <input
      inputMode="numeric"
      pattern="[0-9]*"
      value={value}
      onChange={(e) => onChange(e.target.value.replace(/[^0-9]/g, ""))}
      className="tool-input"
    />
  );
}

function InputPercent({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="tool-input-with-addon">
      <input
        inputMode="decimal"
        value={value}
        onChange={(e) => onChange(e.target.value.replace(/[^0-9.]/g, ""))}
        className="tool-input-percent"
      />
      <span className="tool-input-addon">%</span>
    </div>
  );
}

function InputNumber({
  value,
  onChange,
  min = 1,
  max = 360,
}: {
  value: string;
  onChange: (v: string) => void;
  min?: number;
  max?: number;
}) {
  const clamp = (val: number) => Math.max(min, Math.min(max, val));
  return (
    <input
      inputMode="numeric"
      pattern="[0-9]*"
      value={value}
      onChange={(e) =>
        onChange(String(clamp(Number(e.target.value.replace(/[^0-9]/g, "")) || min)))
      }
      className="tool-input"
    />
  );
}

function MiniChart({ rows }: { rows: { mes: number; nominal: number; real: number }[] }) {
  if (!rows.length) return null;

  const width = 900;
  const height = 280;
  const pad = 40;

  const maxVal = Math.max(...rows.map((r) => Math.max(r.nominal, r.real)));
  const x = (i: number) => pad + (i * (width - pad * 2)) / (rows.length - 1 || 1);
  const y = (v: number) => height - pad - (v / (maxVal || 1)) * (height - pad * 2);

  const line = (key: "nominal" | "real") =>
    rows.map((r, i) => `${i === 0 ? "M" : "L"}${x(i)} ${y(r[key])}`).join(" ");

  return (
    <div className="tool-chart-wrapper">
      <svg viewBox={`0 0 ${width} ${height}`} className="tool-chart-svg">
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((pct) => {
          const yPos = height - pad - pct * (height - pad * 2);
          return (
            <line
              key={pct}
              x1={pad}
              y1={yPos}
              x2={width - pad}
              y2={yPos}
              stroke="var(--card-border)"
              strokeWidth="1"
              strokeDasharray="4 4"
              opacity="0.5"
            />
          );
        })}

        {/* Axes */}
        <line x1={pad} y1={height - pad} x2={width - pad} y2={height - pad} stroke="var(--card-border)" strokeWidth="2" />
        <line x1={pad} y1={pad} x2={pad} y2={height - pad} stroke="var(--card-border)" strokeWidth="2" />

        {/* Lines */}
        <path d={line("nominal")} fill="none" stroke="var(--foreground)" strokeWidth="3" />
        <path d={line("real")} fill="none" stroke="var(--gold)" strokeWidth="3" />

        {/* Legend */}
        <g transform="translate(60, 16)">
          <rect x="0" y="0" width="20" height="4" fill="var(--foreground)" rx="2" />
          <text x="28" y="8" fontSize="14" fontWeight="600" fill="var(--foreground)">Valor Nominal</text>

          <rect x="150" y="0" width="20" height="4" fill="var(--gold)" rx="2" />
          <text x="178" y="8" fontSize="14" fontWeight="600" fill="var(--gold)">Valor Real</text>
        </g>
      </svg>
    </div>
  );
}
