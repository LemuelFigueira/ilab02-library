import React, { ReactNode } from 'react';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  onClick?: () => void;
}

const sizes = {
  sm: 'text-h-sm',
  md: 'text-h-md',
  lg: 'text-h-lg',
}

export const Heading = ({
  children,
  size = 'md',
  ...props
}: HeadingProps) => {

  return (
    <h1
      className={`px-4 font-bold text-gray-100 ${sizes[size]}`}
      {...props}
    >
      {children}
    </h1>
  );
};
