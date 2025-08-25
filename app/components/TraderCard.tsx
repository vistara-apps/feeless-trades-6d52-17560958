"use client";

interface TraderCardProps {
  name: string;
  performance: string;
  followers: string;
  onFollow: () => void;
}

export function TraderCard({ name, performance, followers, onFollow }: TraderCardProps) {
  return (
    <div className="trader-card">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h3 className="font-semibold text-text">{name}</h3>
          <div className="flex space-x-4 text-sm text-text-muted">
            <span className="text-accent">{performance}</span>
            <span>{followers} followers</span>
          </div>
        </div>
        <button
          onClick={onFollow}
          className="btn-primary text-sm px-3 py-1"
        >
          Follow
        </button>
      </div>
    </div>
  );
}
