export interface BotConfig {
  id: string;
  name: string;
  strategy: string;
  active: boolean;
  createdAt: number;
  config: Record<string, any>;
}

export interface BotExecutionLog {
  timestamp: number;
  message: string;
  type: 'info' | 'success' | 'error';
}
