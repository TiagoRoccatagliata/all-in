import Link from "next/link";


export const metadata = { title: "Noticias | ALL‑IN" };


export default function NoticiasPage() {
return (
<main className="mx-auto max-w-6xl px-4 py-10">
<h1 className="text-3xl font-bold text-[rgb(15,61,62)]">Noticias y actualidad</h1>
<p className="mt-2 text-slate-700">Contexto financiero explicado simple. (Luego conectamos un CMS).</p>


<div className="mt-6 grid gap-6 md:grid-cols-3">
{[1,2,3,4,5,6].map((i) => (
<article key={i} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
<h3 className="text-base font-semibold text-slate-900">Nota #{i}: título de ejemplo</h3>
<p className="mt-2 text-sm text-slate-600">Resumen breve de la noticia. 3–4 líneas máximo.</p>
<Link href="#" className="mt-3 inline-block text-sm font-semibold underline">Leer nota</Link>
</article>
))}
</div>
</main>
);
}