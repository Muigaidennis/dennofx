import { useAuthStore } from '@/store/authStore';
import { useTradingStore } from '@/store/tradingStore';
import Card from '@/components/common/Card';
import { TrendingUp, TrendingDown, DollarSign, Briefcase, Bot, Activity } from 'lucide-react';

// Mock data
const mockPositions = [
  { id: '1', symbol: 'R_100', type: 'buy', amount: 100, profit: 12.5, status: 'open' },
  { id: '2', symbol: 'R_75', type: 'sell', amount: 50, profit: -3.2, status: 'open' },
];
const mockBalance = { demo: 10000, real: 5000 };
const mockStats = {
  todayProfit: 142.8,
  weeklyProfit: 387.5,
  monthlyProfit: 1240.3,
  winRate: 68,
  lossRate: 32,
};

const Dashboard = () => {
  const { user } = useAuthStore();
  const { symbol } = useTradingStore();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Welcome back, {user?.displayName || 'Trader'}
        </h1>
        <span className="text-sm text-gray-500 dark:text-gray-400">Last updated: just now</span>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card variant="glass">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Demo Balance</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                ${mockBalance.demo.toFixed(2)}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </Card>
        <Card variant="glass">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Real Balance</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                ${mockBalance.real.toFixed(2)}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </Card>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card variant="outlined" padding="sm">
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span>Today's P&L</span>
          </div>
          <p className="text-xl font-semibold text-green-600 dark:text-green-400">
            +${mockStats.todayProfit.toFixed(2)}
          </p>
        </Card>
        <Card variant="outlined" padding="sm">
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <Activity className="w-4 h-4 text-blue-500" />
            <span>Weekly P&L</span>
          </div>
          <p className="text-xl font-semibold text-blue-600 dark:text-blue-400">
            +${mockStats.weeklyProfit.toFixed(2)}
          </p>
        </Card>
        <Card variant="outlined" padding="sm">
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <TrendingUp className="w-4 h-4 text-purple-500" />
            <span>Monthly P&L</span>
          </div>
          <p className="text-xl font-semibold text-purple-600 dark:text-purple-400">
            +${mockStats.monthlyProfit.toFixed(2)}
          </p>
        </Card>
        <Card variant="outlined" padding="sm">
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <Bot className="w-4 h-4 text-orange-500" />
            <span>Win Rate</span>
          </div>
          <p className="text-xl font-semibold text-orange-600 dark:text-orange-400">
            {mockStats.winRate}%
          </p>
        </Card>
      </div>

      {/* Open Positions */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Open Positions</h2>
        {mockPositions.length === 0 ? (
          <Card variant="outlined" className="text-center py-8 text-gray-500 dark:text-gray-400">
            No open positions
          </Card>
        ) : (
          <div className="space-y-3">
            {mockPositions.map((pos) => (
              <Card key={pos.id} variant="outlined" padding="sm" className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">{pos.symbol}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{pos.type.toUpperCase()} • ${pos.amount}</p>
                </div>
                <div className={`text-sm font-semibold ${pos.profit >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {pos.profit >= 0 ? '+' : ''}{pos.profit.toFixed(2)}%
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
