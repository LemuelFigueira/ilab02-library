import React from 'react';
import { Label } from './Label';

const emailSvg: React.SVGProps<SVGSVGElement> = (
  <svg
    className="fill-gray-400 stroke-gray-400 w-6"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
  >
    <rect width="256" height="256" fill="none"></rect>
    <path
      d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></path>
    <polyline
      points="224 56 128 144 32 56"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></polyline>
  </svg>
);

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'className' | 'size' | 'type'
  > {
  label: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
  type: 'email' | 'text';
  onClick?: () => void;
}

const sizes = {
  sm: 'w-[200px]',
  md: 'w-[300px]',
  lg: 'w-[400px]',
  full: 'w-full',
};

const icons = {
  email: emailSvg,
  text: null,
};

export const Input = ({
  label = 'label',
  placeholder = 'johndoe@gmail.com',
  size = 'md',
  type = 'text',
  ...props
}: InputProps) => {
  return (
    <slot>
      <label htmlFor="input" className={`max-w-[400px] ${sizes[size]}`}>
        <div
          className={`w-full flex items-center border border-transparent focus-within:border-cyan-500 hover:border-cyan-500 bg-gray-800 gap-3 pl-4 py-3 relative rounded`}
        >
          {icons[type]}
          <input
            id="input"
            className={`select-none focus:outline-none w-full text-white placeholder:text-gray-400 font-normal text-sm rounded bg-transparent`}
            placeholder={placeholder}
            {...props}
          />
        </div>
      </label>
    </slot>
  );
};
