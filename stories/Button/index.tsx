import React from 'react';
import '../tailwind.css'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg' | 'full';
  label: string;
  onClick?: () => void;
}

const sizes = {
  sm: 'text-sm px-4 py-2',
  md: 'text-md px-16 py-2',
  lg: 'text-md px-24 py-2',
  full: 'text-md w-full py-2',
}

export const Button = ({
  size = 'full',
  label,
  ...props
}: ButtonProps) => {

  return (
    <button
      type="button"
      className={`bg-cyan-500 text-black font-semibold max-w-[400px] ${sizes[size]} rounded active:bg-cyan-500 hover:bg-cyan-300`}
      {...props}
    >
      {label}
    </button>
  );
};
