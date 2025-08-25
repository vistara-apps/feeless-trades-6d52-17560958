
"use client";

import { useState, useEffect } from "react";

// Mock data for demonstration
export function useMockData() {
  const [user, setUser] = useState({
    userId: "user123",
    farcasterId: "crypto_trader",
    walletAddress: "0x742d35Cc6C6C7C1B7Ca1c4F7d3fC8d9e8Da1B2c",
    subscriptionTier: "free",
    totalSaved: "$127.50",
    batchCount: 15,
    followingCount: 8,
  });
  
  const [traders, setTraders] = useState([
    {
      traderId: "trader1",
      name: "CryptoWhale",
      address: "0x1234567890123456789012345678901234567890",
      performance: "+24.5%",
      followCount: 1250,
      isFollowing: false,
    },
    {
      traderId: "trader2", 
      name: "DeFiMaster",
      address: "0x2345678901234567890123456789012345678901",
      performance: "+18.2%",
      followCount: 890,
      isFollowing: true,
    },
    {
      traderId: "trader3",
      name: "YieldHunter", 
      address: "0x3456789012345678901234567890123456789012",
      performance: "+31.8%",
      followCount: 2100,
      isFollowing: false,
    },
  ]);
  
  const [pendingTrades, setPendingTrades] = useState([
    { tokenIn: "USDC", tokenOut: "ETH", amountIn: "100", estimatedOut: "0.042" },
    { tokenIn: "ETH", tokenOut: "WBTC", amountIn: "0.1", estimatedOut: "0.0034" },
  ]);
  
  const followTrader = (traderId: string) => {
    setTraders(prev => prev.map(trader => 
      trader.traderId === traderId 
        ? { ...trader, isFollowing: !trader.isFollowing }
        : trader
    ));
  };
  
  const addTrade = (tokenIn: string, tokenOut: string, amount: string) => {
    const newTrade = {
      tokenIn,
      tokenOut, 
      amountIn: amount,
      estimatedOut: (parseFloat(amount) * 0.042).toFixed(4), // Mock calculation
    };
    setPendingTrades(prev => [...prev, newTrade]);
  };
  
  const executeBatch = () => {
    // Mock batch execution
    setPendingTrades([]);
    setUser(prev => ({
      ...prev,
      batchCount: prev.batchCount + 1,
      totalSaved: `$${(parseFloat(prev.totalSaved.slice(1)) + 8.50).toFixed(2)}`,
    }));
  };
  
  return {
    user,
    traders,
    pendingTrades,
    followTrader,
    addTrade,
    executeBatch,
  };
}
