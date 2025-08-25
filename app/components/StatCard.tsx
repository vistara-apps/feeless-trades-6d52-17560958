"use client";

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  change?: string;
  icon?: string;
  variant?: "default" | "compact";
}

export function StatCard({ title, value, subtitle, change, icon, variant = "default" }: StatCardProps) {
  const isCompact = variant === "compact";
  
  return (
    <div className={isCompact ? "stat-card" : "card"}>
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <p className={`text-text-muted ${isCompact ? "text-sm" : "text-base"}`}>
            {title}
          </p>
          {icon && <span className="text-lg">{icon}</span>}
        </div>
        <p className={`font-bold text-text ${isCompact ? "text-lg" : "text-2xl"}`}>
          {value}
        </p>
        {subtitle && (
          <p className={`text-text-muted ${isCompact ? "text-xs" : "text-sm"}`}>
            {subtitle}
          </p>
        )}
        {change && (
          <p className={`text-accent ${isCompact ? "text-xs" : "text-sm"}`}>
            {change}
          </p>
        )}
      </div>
    </div>
  );
}
