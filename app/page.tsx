"use client";

import {
  useMiniKit,
  useAddFrame,
  useOpenUrl,
} from "@coinbase/onchainkit/minikit";
import {
  Name,
  Identity,
  Address,
  Avatar,
  EthBalance,
} from "@coinbase/onchainkit/identity";
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import { useEffect, useMemo, useState, useCallback } from "react";
import { AppShell } from "./components/AppShell";
import { StatCard } from "./components/StatCard";
import { TraderCard } from "./components/TraderCard";
import { ActionInput } from "./components/ActionInput";
import { ButtonBar } from "./components/ButtonBar";

export default function App() {
  const { setFrameReady, isFrameReady, context } = useMiniKit();
  const [frameAdded, setFrameAdded] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  const addFrame = useAddFrame();
  const openUrl = useOpenUrl();

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);

  const handleAddFrame = useCallback(async () => {
    const frameAdded = await addFrame();
    setFrameAdded(Boolean(frameAdded));
  }, [addFrame]);

  const saveFrameButton = useMemo(() => {
    if (context && !context.client.added) {
      return (
        <button
          onClick={handleAddFrame}
          className="btn-primary text-sm px-3 py-1"
        >
          + Save
        </button>
      );
    }

    if (frameAdded) {
      return (
        <div className="flex items-center space-x-1 text-sm font-medium text-primary animate-fade-in">
          <span>✓ Saved</span>
        </div>
      );
    }

    return null;
  }, [context, frameAdded, handleAddFrame]);

  return (
    <AppShell>
      <div className="w-full max-w-md mx-auto px-4 py-3">
        <header className="flex justify-between items-center mb-6 h-11">
          <div>
            <div className="flex items-center space-x-2">
              <Wallet className="z-10">
                <ConnectWallet>
                  <Name className="text-inherit" />
                </ConnectWallet>
                <WalletDropdown>
                  <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                    <Avatar />
                    <Name />
                    <Address />
                    <EthBalance />
                  </Identity>
                  <WalletDropdownDisconnect />
                </WalletDropdown>
              </Wallet>
            </div>
          </div>
          <div>{saveFrameButton}</div>
        </header>

        <main className="flex-1 space-y-6">
          {activeTab === "dashboard" && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h1 className="display text-text mb-2">FeeLess Trades</h1>
                <p className="body text-text-muted">
                  Optimize your crypto trades and copy top traders
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <StatCard
                  title="Total Saved"
                  value="$127.50"
                  subtitle="in fees"
                  variant="default"
                />
                <StatCard
                  title="Batched Trades"
                  value="23"
                  subtitle="this month"
                  variant="compact"
                />
              </div>

              <div className="space-y-4">
                <h2 className="heading text-text">Quick Actions</h2>
                <ActionInput
                  placeholder="Enter trade amount (e.g., $100 ETH)"
                  onSubmit={(value) => console.log("Trade:", value)}
                />
                <ButtonBar
                  buttons={[
                    { label: "Batch Trades", action: () => setActiveTab("batch") },
                    { label: "Discover", action: () => setActiveTab("discover") },
                  ]}
                />
              </div>
            </div>
          )}

          {activeTab === "batch" && (
            <div className="space-y-6 animate-slide-up">
              <div>
                <h2 className="heading text-text mb-4">Batch Trades</h2>
                <div className="card">
                  <p className="body text-text-muted mb-4">
                    Group multiple trades to save on fees
                  </p>
                  <div className="space-y-3">
                    <ActionInput
                      placeholder="Buy $50 ETH"
                      onSubmit={(value) => console.log("Add trade:", value)}
                    />
                    <ActionInput
                      placeholder="Sell 0.1 WETH for USDC"
                      onSubmit={(value) => console.log("Add trade:", value)}
                    />
                    <button className="btn-primary w-full">
                      Execute Batch (Save ~$2.50)
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setActiveTab("dashboard")}
                className="text-text-muted hover:text-text transition-colors"
              >
                ← Back to Dashboard
              </button>
            </div>
          )}

          {activeTab === "discover" && (
            <div className="space-y-6 animate-slide-up">
              <div>
                <h2 className="heading text-text mb-4">Top Traders</h2>
                <div className="space-y-4">
                  <TraderCard
                    name="CryptoWhale"
                    performance="+127.5%"
                    followers="2.3k"
                    onFollow={() => console.log("Follow CryptoWhale")}
                  />
                  <TraderCard
                    name="DeFiMaster"
                    performance="+89.2%"
                    followers="1.8k"
                    onFollow={() => console.log("Follow DeFiMaster")}
                  />
                  <TraderCard
                    name="YieldFarmer"
                    performance="+65.7%"
                    followers="1.2k"
                    onFollow={() => console.log("Follow YieldFarmer")}
                  />
                </div>
              </div>
              <button
                onClick={() => setActiveTab("dashboard")}
                className="text-text-muted hover:text-text transition-colors"
              >
                ← Back to Dashboard
              </button>
            </div>
          )}
        </main>

        <footer className="mt-6 pt-4 flex justify-center">
          <button
            className="text-text-muted text-xs hover:text-text transition-colors"
            onClick={() => openUrl("https://base.org/builders/minikit")}
          >
            Built on Base with MiniKit
          </button>
        </footer>
      </div>
    </AppShell>
  );
}
