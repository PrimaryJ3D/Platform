import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

export function Section({
  children,
  className,
  id,
  as: Tag = "section",
  labelledBy,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
  labelledBy?: string;
}) {
  return (
    <Tag
      id={id}
      aria-labelledby={labelledBy}
      className={cn("py-20 sm:py-28 lg:py-32", className)}
    >
      <div className="container-x">{children}</div>
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  id?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 id={id} className="display-2 text-balance">
        {title}
      </h2>
      {lede && <p className="lede mt-5 text-balance">{lede}</p>}
    </div>
  );
}

export function StatGrid({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <dl className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden border border-border">
      {items.map((s) => (
        <div key={s.label} className="bg-background p-6">
          <dt className="text-xs uppercase tracking-wider text-muted-foreground">
            {s.label}
          </dt>
          <dd className="mt-2 font-display text-3xl sm:text-4xl">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}
