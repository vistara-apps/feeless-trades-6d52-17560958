"use client";

import { type ReactNode } from "react";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-text bg-bg">
      {children}
    </div>
  );
}
