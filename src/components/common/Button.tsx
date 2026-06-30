import React from 'react';
import { classNames } from '@/utils/helpers';
import { LucideIcon } from 'lucide-react';
import Spinner from './Spinner';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  children: React.ReactNode;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 dark:bg-primary-500 dark:hover:bg-primary-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
    outline: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-400 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 dark:bg-red-500 dark:hover:bg-red-600',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-gray-300 dark:text-gray-300 dark:hover:bg-gray-800',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={classNames(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Spinner size="sm" className="mr-2" />}
      {!isLoading && LeftIcon && <LeftIcon className="w-4 h-4 mr-2" />}
      {children}
      {!isLoading && RightIcon && <RightIcon className="w-4 h-4 ml-2" />}
    </button>
  );
};

export default Button;
