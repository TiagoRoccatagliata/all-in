// ==========================
// components/ui.tsx
// ==========================
import React from "react";


export function Badge({ children, variant = "free" }: { children: React.ReactNode; variant?: "free" | "premium" }) {
    const styles =
        variant === "free"
            ? "badge-free"
            : "badge-premium";
    return (
        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${styles}`}>
            {children}
        </span>
    );
}


export function Card({ title, children, cta, badge }: { title: string; children?: React.ReactNode; cta?: React.ReactNode; badge?: React.ReactNode }) {
    return (
        <div className="card">
            <div className="mb-2 flex items-start justify-between gap-3">
                <h3 className="card-title">{title}</h3>
                {badge}
            </div>
            <div className="card-text">{children}</div>
            {cta && <div className="mt-4">{cta}</div>}
        </div>
    );
}