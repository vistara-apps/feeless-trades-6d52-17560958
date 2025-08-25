
"use client";

import { useState } from "react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const tabs = [
    { id: "batch", label: "Batch", icon: "⚡" },
    { id: "discover", label: "Traders", icon: "🔍" },
    { id: "analytics", label: "Analytics", icon: "📊" },
  ];
  
  return (
    <nav className="flex space-x-1 bg-surface/50 p-1 rounded-lg">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-base ${
            activeTab === tab.id
              ? "bg-primary text-white"
              : "text-text-muted hover:text-text hover:bg-surface"
          }`}
        >
          <span className="mr-2">{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
