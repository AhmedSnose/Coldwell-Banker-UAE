'use client';
import React, { useState } from 'react';

interface EditTextProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  disabled?: boolean;
  required?: boolean;
  className?: string;
  name?: string;
  id?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  autoComplete?: string;
  autoFocus?: boolean;
}

const EditText: React.FC<EditTextProps & React.InputHTMLAttributes<HTMLInputElement>> = ({
  placeholder = '',
  value,
  onChange,
  type = 'text',
  disabled = false,
  required = false,
  className = '',
  name,
  id,
  maxLength,
  minLength,
  pattern,
  autoComplete,
  autoFocus = false,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(value || '');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value !== undefined ? value : internalValue}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      disabled={disabled}
      required={required}
      name={name}
      id={id}
      maxLength={maxLength}
      minLength={minLength}
      pattern={pattern}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      className={`
        w-full
        px-[14px] py-[5px] sm:px-[28px] sm:py-[10px]
        text-sm sm:text-base
        font-poppins font-normal
        text-global-1
        bg-edittext-1
        rounded-[5px]
        border-none
        outline-none
        transition-all
        duration-200
        ease-in-out
        placeholder:text-global-1
        focus:ring-2
        focus:ring-purple-500
        focus:ring-opacity-50
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-text'}
        ${isFocused ? 'ring-2 ring-purple-500 ring-opacity-50' : ''}
        min-h-[44px] sm:min-h-[48px]
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      {...props}
    />
  );
};

export default EditText;