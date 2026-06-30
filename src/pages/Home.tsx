import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Zap, Bot } from 'lucide-react';
import Button from '@/components/common/Button';
import ThemeToggle from '@/components/common/ThemeToggle';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">D</span>
          </div>
          <span className="text-xl font-bold text-gray-800 dark:text-white">Deriv Trade</span>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Link to="/login">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link to="/register">
            <Button>Get Started</Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Trade Smarter with{' '}
          <span className="text-primary-600 dark:text-primary-400">AI-Powered</span> Tools
        </h1>
        <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Automate your trading strategies, copy top traders, and manage risk with our
          comprehensive Deriv trading platform.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/register">
            <Button size="lg" rightIcon={ArrowRight}>
              Start Free Trial
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-card text-center">
          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">Live Trading</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Execute trades with real-time pricing and advanced order types.
          </p>
        </div>
        <div className="glass-card text-center">
          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <Bot className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">Bot Builder</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Create and backtest automated strategies with our visual builder.
          </p>
        </div>
        <div className="glass-card text-center">
          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">Risk Management</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Protect your capital with stop-loss, take-profit, and daily limits.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <p>© 2026 Deriv Trade. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300">Privacy</a>
            <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300">Terms</a>
            <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

