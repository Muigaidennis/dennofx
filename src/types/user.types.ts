export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  role: 'user' | 'admin';
  emailVerified: boolean;
  settings: UserSettings;
}

export interface UserSettings {
  theme: 'light' | 'dark';
  notifications: boolean;
  riskDefaults: RiskDefaults;
}

export interface RiskDefaults {
  maxStake: number;
  maxDailyLoss: number;
  stopLoss?: number;
  takeProfit?: number;
}
