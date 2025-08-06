import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

export function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  className,
  disabled = false,
  loading = false,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary:
      'bg-secondary-700 hover:bg-secondary-600 text-secondary-100 border border-secondary-600 focus:ring-secondary-500',
    secondary:
      'bg-transparent border-secondary-600 text-secondary-300 hover:bg-secondary-700 focus:ring-secondary-500',
    ghost:
      'bg-transparent text-secondary-400 hover:text-secondary-200 hover:bg-secondary-800 focus:ring-secondary-500',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const buttonClasses = twMerge(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonClasses}
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      transition={{ duration: 0.1 }}
    >
      {loading ? (
        <div className="w-4 h-4 border-2 border-secondary-300 border-t-transparent rounded-full animate-spin mr-2" />
      ) : icon ? (
        <span className="mr-2">{icon}</span>
      ) : null}
      {children}
    </motion.button>
  );
}
