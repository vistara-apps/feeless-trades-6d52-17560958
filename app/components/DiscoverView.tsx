
"use client";

import { TraderCard } from "./TraderCard";
import { StatCard } from "./StatCard";

interface DiscoverViewProps {
  traders: any[];
  user: any;
  onFollowTrader: (traderId: string) => void;
}

export function DiscoverView({ traders, user, onFollowTrader }: DiscoverViewProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Following Stats */}
      <div className="grid grid-cols-2 gap-4">
        <StatCard
          title="Following"
          value={user.followingCount.toString()}
          variant="compact"
          icon="👥"
        />
        <StatCard
          title="Top Performer"
          value="+31.8%"
          change="YieldHunter"
          variant="compact"
          icon="🚀"
        />
      </div>
      
      {/* Top Traders */}
      <div>
        <h2 className="heading mb-4">Top Performers</h2>
        <div className="space-y-4">
          {traders.map((trader) => (
            <TraderCard
              key={trader.traderId}
              name={trader.name}
              address={trader.address}
              performance={trader.performance}
              followCount={trader.followCount}
              isFollowing={trader.isFollowing}
              onFollow={() => onFollowTrader(trader.traderId)}
            />
          ))}
        </div>
      </div>
      
      {/* Discover More */}
      <div className="card text-center">
        <h3 className="heading mb-2">Discover More Traders</h3>
        <p className="text-text-muted mb-4">
          Connect your Farcaster account to discover traders from your social graph
        </p>
        <button className="btn-secondary">
          Connect Farcaster
        </button>
      </div>
    </div>
  );
}
