"use client";

import React, { useState, useEffect } from "react";

interface ColourPickerProps {
  value: string;
  onChangeAction: (hex: string) => void;
}

export const ColourPicker: React.FC<ColourPickerProps> = ({ value, onChangeAction }) => {
  const [localValue, setLocalValue] = useState(value);
  const [isValid, setIsValid] = useState(true);

  // Sync internal state when external value changes
  useEffect(() => {
    setLocalValue(value.toUpperCase());
    setIsValid(true);
  }, [value]);

  const validateHex = (hex: string) => {
    return /^#[0-9A-F]{6}$/i.test(hex);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    
    // Ensure it starts with #
    if (!newValue.startsWith("#")) {
      newValue = "#" + newValue;
    }
    
    // Limit to 7 characters
    newValue = newValue.substring(0, 7).toUpperCase();
    
    setLocalValue(newValue);
    
    const valid = validateHex(newValue);
    setIsValid(valid);
    
    if (valid) {
      onChangeAction(newValue);
    }
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.toUpperCase();
    setLocalValue(newValue);
    setIsValid(true);
    onChangeAction(newValue);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-brand-slate-500 dark:text-slate-400">
        Pick a base colour
      </label>
      <div className="flex items-center gap-4">
        {/* Native Color Picker Wrapper */}
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-slate-100 dark:border-slate-700 shadow-sm transition-transform hover:scale-105 active:scale-95">
          <input
            type="color"
            value={value}
            onChange={handleColorChange}
            className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1-2 -translate-y-1-2 cursor-pointer border-none p-0 bg-transparent"
            style={{ 
              transform: 'translate(-50%, -50%) scale(2)',
              appearance: 'none',
              WebkitAppearance: 'none'
            }}
          />
        </div>

        {/* Text Input */}
        <div className="relative">
          <input
            type="text"
            value={localValue}
            onChange={handleTextChange}
            maxLength={7}
            className={`px-4 py-2 w-32 font-mono text-lg font-bold rounded-xl border-2 transition-all outline-none ${
              isValid 
                ? "border-brand-slate-100 dark:border-slate-700 focus:border-brand-rose-400 dark:focus:border-brand-rose-500 bg-white dark:bg-slate-900 dark:text-slate-100" 
                : "border-red-500 focus:border-red-600 bg-red-50 dark:bg-red-950/20 text-red-900 dark:text-red-200"
            }`}
          />
          {!isValid && (
            <span className="absolute -bottom-5 left-0 text-[10px] font-bold text-red-500 uppercase tracking-tighter">
              Invalid Hex
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
