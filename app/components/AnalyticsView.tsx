
"use client";

import { StatCard } from "./StatCard";

interface AnalyticsViewProps {
  user: any;
}

export function AnalyticsView({ user }: AnalyticsViewProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Performance Overview */}
      <div>
        <h2 className="heading mb-4">Performance Overview</h2>
        <div className="grid grid-cols-2 gap-4">
          <StatCard
            title="Total Saved"
            value={user.totalSaved}
            change="+$23.50 this month"
            icon="💰"
          />
          <StatCard
            title="Portfolio P&L"
            value="+$2,150"
            change="+12.3%"
            icon="📈"
          />
        </div>
      </div>
      
      {/* Detailed Stats */}
      <div>
        <h3 className="heading mb-4">Trading Stats</h3>
        <div className="grid grid-cols-2 gap-4">
          <StatCard
            title="Total Batches"
            value={user.batchCount.toString()}
            variant="compact"
            icon="⚡"
          />
          <StatCard
            title="Avg Savings"
            value="$8.50"
            variant="compact"
            icon="💡"
          />
          <StatCard
            title="Win Rate"
            value="78%"
            change="+5% vs last month"
            variant="compact"
            icon="🎯"
          />
          <StatCard
            title="Best Trade"
            value="+$425"
            change="ETH → WBTC"
            variant="compact"
            icon="🏆"
          />
        </div>
      </div>
      
      {/* Subscription */}
      <div className="card border-primary/30">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="heading">Upgrade to Pro</h3>
            <p className="text-text-muted text-sm">Advanced analytics & unlimited copying</p>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold">$5</div>
            <div className="text-text-muted text-sm">per month</div>
          </div>
        </div>
        
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex items-center">
            <span className="text-accent mr-2">✓</span>
            Advanced performance analytics
          </div>
          <div className="flex items-center">
            <span className="text-accent mr-2">✓</span>
            Unlimited trader copying
          </div>
          <div className="flex items-center">
            <span className="text-accent mr-2">✓</span>
            Real-time notifications
          </div>
        </div>
        
        <button className="btn-primary w-full">
          Upgrade Now
        </button>
      </div>
    </div>
  );
}
