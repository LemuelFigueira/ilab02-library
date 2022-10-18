import React, { useState } from 'react';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import {Check} from 'phosphor-react'
import _uniqueId from 'lodash/uniqueId';

export interface CheckboxProps {
  children: React.ReactNode;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const Checkbox = ({
  children = "Default checkbox",
  checked = false,
  onCheckedChange
}:CheckboxProps) => {

  const [id] = useState(_uniqueId('input-'));

  return (
    <div className="flex items-center mb-4">
      <CheckboxPrimitive.Root checked={checked} onCheckedChange={onCheckedChange} id={id} className="w-6 h-6 bg-zinc-900 flex items-center justify-center rounded-lg">
        <CheckboxPrimitive.Indicator className="text-cyan-500">
          <Check size={18}/>
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <label
        htmlFor={id}
        className="select-none cursor-pointer ml-2 font-normal text-gray-200 dark:text-gray-300 text-sm"
      >
        {children}
      </label>
    </div>
  );
};