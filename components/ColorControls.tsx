"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export const ColorControls = ({ initialColor }: { initialColor: string }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [color, setColor] = useState(initialColor);

  useEffect(() => {
    setColor(initialColor);
  }, [initialColor]);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setColor(newColor);
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    params.set("color", color.replace("#", ""));
    router.push(`?${params.toString()}`);
  };

  const generateRandom = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    setColor(randomColor);
    const params = new URLSearchParams(searchParams.toString());
    params.set("color", randomColor.replace("#", ""));
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mb-12 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-brand-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-3 w-full md:w-auto">
        <div 
          className="w-12 h-12 rounded-xl border-2 border-brand-slate-200 dark:border-slate-700 shadow-inner overflow-hidden flex-shrink-0"
          style={{ backgroundColor: color }}
        >
          <input 
            type="color" 
            value={color} 
            onChange={handleColorChange}
            onBlur={() => handleSubmit()}
            className="w-full h-full opacity-0 cursor-pointer scale-150"
          />
        </div>
        <div className="relative flex-grow md:w-32">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-slate-400 dark:text-slate-400 font-mono text-sm">#</span>
          <input 
            type="text" 
            value={color.replace("#", "")} 
            onChange={(e) => setColor("#" + e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            className="w-full pl-6 pr-3 py-2 bg-brand-slate-50 dark:bg-slate-900 border border-brand-slate-200 dark:border-slate-700 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-brand-rose-500/20 focus:border-brand-rose-500 transition-all uppercase dark:text-slate-100"
            maxLength={6}
          />
        </div>
      </div>
      
      <div className="flex gap-2 w-full md:w-auto">
        <button 
          onClick={() => handleSubmit()}
          className="flex-1 md:flex-none px-6 py-2 bg-brand-slate-900 text-white font-semibold rounded-lg hover:bg-brand-slate-800 transition-colors shadow-sm active:scale-95"
        >
          Generate
        </button>
        <button 
          onClick={generateRandom}
          className="px-4 py-2 bg-white dark:bg-slate-800 text-brand-slate-700 dark:text-slate-100 font-medium border border-brand-slate-200 dark:border-slate-700 rounded-lg hover:bg-brand-slate-50 dark:hover:bg-slate-700 transition-colors active:scale-95 flex items-center gap-2"
          title="Random Color"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
        </button>
      </div>
    </div>
  );
};
