import { create } from 'zustand';
import { BotConfig, BotExecutionLog } from '@/types/bot.types';

interface BotState {
  bots: BotConfig[];
  activeBotId: string | null;
  logs: BotExecutionLog[];
  addBot: (bot: BotConfig) => void;
  updateBot: (id: string, updates: Partial<BotConfig>) => void;
  deleteBot: (id: string) => void;
  setActiveBot: (id: string | null) => void;
  addLog: (log: BotExecutionLog) => void;
}

// Mock bots
const mockBots: BotConfig[] = [
  {
    id: '1',
    name: 'Martingale Bot',
    strategy: 'martingale',
    active: true,
    createdAt: Date.now() - 86400000,
    config: { baseStake: 10, maxSteps: 5 },
  },
  {
    id: '2',
    name: 'Anti-Martingale Bot',
    strategy: 'anti_martingale',
    active: false,
    createdAt: Date.now() - 172800000,
    config: { baseStake: 20, maxWins: 3 },
  },
];

export const useBotStore = create<BotState>((set) => ({
  bots: mockBots,
  activeBotId: null,
  logs: [],
  addBot: (bot) => set((state) => ({ bots: [...state.bots, bot] })),
  updateBot: (id, updates) =>
    set((state) => ({
      bots: state.bots.map((b) => (b.id === id ? { ...b, ...updates } : b)),
    })),
  deleteBot: (id) => set((state) => ({ bots: state.bots.filter((b) => b.id !== id) })),
  setActiveBot: (id) => set({ activeBotId: id }),
  addLog: (log) => set((state) => ({ logs: [log, ...state.logs].slice(0, 100) })),
}));
