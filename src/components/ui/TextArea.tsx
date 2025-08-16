'use client';
import React, { useState } from 'react';

interface TextAreaProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  name?: string;
  id?: string;
  maxLength?: number;
  minLength?: number;
  rows?: number;
  cols?: number;
  autoFocus?: boolean;
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
}

const TextArea: React.FC<TextAreaProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  placeholder = '',
  value,
  onChange,
  disabled = false,
  required = false,
  className = '',
  name,
  id,
  maxLength,
  minLength,
  rows = 4,
  cols,
  autoFocus = false,
  resize = 'vertical',
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(value || '');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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

  const resizeClasses = {
    none: 'resize-none',
    both: 'resize',
    horizontal: 'resize-x',
    vertical: 'resize-y'
  };

  return (
    <textarea
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
      rows={rows}
      cols={cols}
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
        ${resizeClasses[resize]}
        min-h-[100px] sm:min-h-[120px]
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      {...props}
    />
  );
};

export default TextArea;