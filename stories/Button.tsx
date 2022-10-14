import React from 'react';
import './button.css';
import './tailwind.css'

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      // className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
        className={"bg-blue-500 text-white font-bold py-2 px-4 rounded active:bg-blue-600 hover:bg-blue-400"}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
