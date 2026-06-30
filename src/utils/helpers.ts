export const formatCurrency = (amount: number, currency: string = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

export const formatDate = (timestamp: number) => {
  return new Date(timestamp).toLocaleString();
};

export const classNames = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};
