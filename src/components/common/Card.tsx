import React from 'react';
import { classNames } from '@/utils/helpers';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card = ({
  children,
  className,
  variant = 'default',
  padding = 'md',
}: CardProps) => {
  const variants = {
    default: 'bg-white dark:bg-gray-800 shadow-md',
    glass: 'glass-card',
    outlined: 'border border-gray-200 dark:border-gray-700 bg-transparent',
  };

  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div className={classNames('rounded-2xl', variants[variant], paddings[padding], className)}>
      {children}
    </div>
  );
};

export default Card;
