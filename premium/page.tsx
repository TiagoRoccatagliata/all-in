export const metadata = { title: "Premium | ALL‑IN" };


export default function PremiumPage() {
return (
<main className="mx-auto max-w-6xl px-4 py-10">
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<h1 className="text-3xl font-bold text-[rgb(15,61,62)]">ALL‑IN Premium</h1>
<p className="mt-2 text-slate-700">Más profundidad, mejores decisiones. Cancelás cuando quieras.</p>
<ul className="mt-4 list-disc pl-5 text-sm text-slate-700 space-y-1">
<li>Acceso total a Niveles 2–4</li>
<li>Calculadoras avanzadas con exportación a PDF/Excel</li>
<li>Recomendaciones personalizadas y certificados</li>
</ul>
<div className="mt-6 flex flex-wrap gap-3">
<button className="rounded-xl bg-[rgb(15,61,62)] px-4 py-2 text-white font-semibold">Suscribirme</button>
<button className="rounded-xl border border-slate-300 bg-white px-4 py-2 font-semibold hover:bg-slate-50">Ver beneficios</button>
</div>
</div>
</main>
);
}