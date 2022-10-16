import React, { ReactNode } from 'react';

export interface LabelProps
  extends Omit<React.HTMLAttributes<HTMLLabelElement>, 'className'> {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  onClick?: () => void;
}

const sizes = {
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
};

export const Label = ({ children, size = 'md', ...props }: LabelProps) => {
  return (
    <label className={`font-normal text-gray-100 ${sizes[size]}`} {...props}>
      {children}
    </label>
  );
};
