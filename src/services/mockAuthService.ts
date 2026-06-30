import { User } from '@/types/user.types';

// Mock user data
const MOCK_USER: User = {
  uid: 'mock-uid-123',
  email: 'demo@example.com',
  displayName: 'Demo User',
  photoURL: undefined,
  role: 'user',
  emailVerified: true,
  settings: {
    theme: 'light',
    notifications: true,
    riskDefaults: {
      maxStake: 100,
      maxDailyLoss: 500,
    },
  },
};

const ADMIN_USER: User = {
  ...MOCK_USER,
  uid: 'admin-uid',
  email: 'admin@example.com',
  displayName: 'Admin User',
  role: 'admin',
};

// In-memory store for demo
let currentUser: User | null = null;

export const mockAuthService = {
  login: async (email: string, password: string): Promise<User> => {
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (email === 'admin@example.com' && password === 'password') {
      currentUser = ADMIN_USER;
      return ADMIN_USER;
    }

    if (email && password.length >= 8) {
      const user: User = {
        ...MOCK_USER,
        email,
        displayName: email.split('@')[0],
      };
      currentUser = user;
      return user;
    }

    throw new Error('Invalid credentials');
  },

  register: async (email: string, password: string, displayName: string): Promise<User> => {
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (email && password.length >= 8) {
      const user: User = {
        uid: 'mock-uid-' + Date.now(),
        email,
        displayName,
        photoURL: undefined,
        role: 'user',
        emailVerified: false,
        settings: {
          theme: 'light',
          notifications: true,
          riskDefaults: {
            maxStake: 100,
            maxDailyLoss: 500,
          },
        },
      };
      currentUser = user;
      return user;
    }

    throw new Error('Registration failed');
  },

  logout: () => {
    currentUser = null;
  },

  getCurrentUser: (): User | null => {
    return currentUser;
  },
};


