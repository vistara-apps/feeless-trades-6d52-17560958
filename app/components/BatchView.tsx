
"use client";

import { StatCard } from "./StatCard";
import { ActionInput } from "./ActionInput";
import { ButtonBar } from "./ButtonBar";

interface BatchViewProps {
  user: any;
  pendingTrades: any[];
  onAddTrade: (tokenIn: string, tokenOut: string, amount: string) => void;
  onExecuteBatch: () => void;
}

export function BatchView({ user, pendingTrades, onAddTrade, onExecuteBatch }: BatchViewProps) {
  const handleAddTrade = (input: string) => {
    // Simple parsing for demo - in real app would have token selector
    const parts = input.split(" ");
    if (parts.length >= 3) {
      onAddTrade(parts[1] || "USDC", parts[3] || "ETH", parts[0] || "10");
    }
  };
  
  const estimatedFees = pendingTrades.length * 0.003; // Mock fee calculation
  const batchFee = 0.008;
  const savings = Math.max(0, estimatedFees - batchFee);
  
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <StatCard
          title="Total Saved"
          value={user.totalSaved}
          change="+$8.50"
          variant="compact"
          icon="💰"
        />
        <StatCard
          title="Batches Created"
          value={user.batchCount.toString()}
          change="+2 this week"
          variant="compact"
          icon="⚡"
        />
      </div>
      
      {/* Add Trade Input */}
      <div className="card">
        <h3 className="heading mb-4">Add Trade</h3>
        <ActionInput
          placeholder="e.g., 100 USDC to ETH"
          onSubmit={handleAddTrade}
        />
        <p className="text-text-muted text-sm mt-2">
          Format: [amount] [from token] to [to token]
        </p>
      </div>
      
      {/* Pending Trades */}
      {pendingTrades.length > 0 && (
        <div className="card">
          <h3 className="heading mb-4">Pending Trades ({pendingTrades.length})</h3>
          <div className="space-y-3">
            {pendingTrades.map((trade, index) => (
              <div key={index} className="bg-bg/50 p-3 rounded-md">
                <div className="flex justify-between items-center">
                  <span className="text-sm">
                    {trade.amountIn} {trade.tokenIn} → {trade.estimatedOut} {trade.tokenOut}
                  </span>
                  <span className="text-xs text-text-muted">~$0.003 fee</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-text/10">
            <div className="flex justify-between text-sm mb-2">
              <span>Individual fees:</span>
              <span>${estimatedFees.toFixed(3)}</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Batch fee:</span>
              <span>${batchFee.toFixed(3)}</span>
            </div>
            <div className="flex justify-between font-semibold text-accent">
              <span>You save:</span>
              <span>${savings.toFixed(3)}</span>
            </div>
          </div>
          
          <div className="mt-4">
            <ButtonBar
              buttons={[
                {
                  label: "Clear All",
                  onClick: () => {},
                  variant: "secondary",
                },
                {
                  label: "Execute Batch",
                  onClick: onExecuteBatch,
                  variant: "primary",
                },
              ]}
            />
          </div>
        </div>
      )}
      
      {pendingTrades.length === 0 && (
        <div className="card text-center py-8">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="heading mb-2">No Pending Trades</h3>
          <p className="text-text-muted">
            Add trades above to start batching and saving on fees
          </p>
        </div>
      )}
    </div>
  );
}
