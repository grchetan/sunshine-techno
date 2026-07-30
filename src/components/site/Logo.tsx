import { Link } from "@tanstack/react-router";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const text = variant === "dark" ? "text-navy" : "text-white";
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-hero shadow-elevated">
        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-gradient-sunshine shadow-glow" />
        <span className="font-display text-lg font-black text-white">S</span>
      </span>
      <span className="flex flex-col leading-tight">
        <span className={`font-display text-[15px] font-extrabold tracking-tight ${text}`}>
          Sunshine Techno
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
          Training Institute
        </span>
      </span>
    </Link>
  );
}
