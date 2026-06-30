export interface Trade {
  id: string;
  symbol: string;
  type: 'buy' | 'sell';
  amount: number;
  openTime: number;
  closeTime?: number;
  profit?: number;
  status: 'open' | 'closed' | 'cancelled';
}

export interface Position extends Trade {
  currentPrice: number;
  pnl: number;
  pnlPercent: number;
}
