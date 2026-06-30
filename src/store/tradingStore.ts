import { create } from 'zustand';
import { Trade, Position } from '@/types/trade.types';

interface TradingState {
  symbol: string;
  watchlist: string[];
  positions: Position[];
  trades: Trade[];
  setSymbol: (symbol: string) => void;
  addToWatchlist: (symbol: string) => void;
  removeFromWatchlist: (symbol: string) => void;
}

// Mock data
const mockPositions: Position[] = [
  {
    id: '1',
    symbol: 'R_100',
    type: 'buy',
    amount: 100,
    openTime: Date.now() - 60000,
    status: 'open',
    currentPrice: 98.5,
    pnl: 2.5,
    pnlPercent: 2.5,
  },
  {
    id: '2',
    symbol: 'R_75',
    type: 'sell',
    amount: 50,
    openTime: Date.now() - 120000,
    status: 'open',
    currentPrice: 75.2,
    pnl: -1.2,
    pnlPercent: -2.4,
  },
];

const mockTrades: Trade[] = [
  {
    id: '3',
    symbol: 'R_100',
    type: 'buy',
    amount: 200,
    openTime: Date.now() - 3600000,
    closeTime: Date.now() - 1800000,
    profit: 15.3,
    status: 'closed',
  },
  {
    id: '4',
    symbol: 'R_50',
    type: 'sell',
    amount: 150,
    openTime: Date.now() - 7200000,
    closeTime: Date.now() - 6000000,
    profit: -8.7,
    status: 'closed',
  },
];

export const useTradingStore = create<TradingState>((set) => ({
  symbol: 'R_100',
  watchlist: ['R_100', 'R_75', 'R_50'],
  positions: mockPositions,
  trades: mockTrades,
  setSymbol: (symbol) => set({ symbol }),
  addToWatchlist: (symbol) =>
    set((state) => ({
      watchlist: state.watchlist.includes(symbol) ? state.watchlist : [...state.watchlist, symbol],
    })),
  removeFromWatchlist: (symbol) =>
    set((state) => ({
      watchlist: state.watchlist.filter((s) => s !== symbol),
    })),
}));
