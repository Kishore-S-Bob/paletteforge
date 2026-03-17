"use client";

import React from "react";
import { Palette } from "@/lib/palette";
import { ColourSwatch } from "./ColourSwatch";

interface PaletteSectionProps {
  palette: Palette;
}

export const PaletteSection: React.FC<PaletteSectionProps> = ({ palette }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-slate-200 mb-8 last:mb-0">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-brand-slate-900">{palette.label}</h2>
        <span className="text-xs font-medium uppercase tracking-wider text-brand-slate-400 bg-brand-slate-50 px-2 py-1 rounded">
          {palette.type}
        </span>
      </div>
      
      <div className="flex flex-col md:flex-row gap-2 md:gap-0 overflow-hidden md:rounded-xl md:border md:border-brand-slate-200">
        {palette.colours.map((colour, i) => (
          <div key={`${palette.type}-${colour.hex}-${i}`} className="flex-1">
            <ColourSwatch 
              colour={colour} 
              size="lg"
              position={
                i === 0 ? "first" : 
                i === palette.colours.length - 1 ? "last" : 
                "middle"
              }
            />
            <div className="mt-2 md:hidden flex justify-between items-center px-1">
              <span className="text-xs font-mono font-medium text-brand-slate-500">{colour.hex}</span>
              <span className="text-[10px] text-brand-slate-400">{colour.name}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="hidden md:flex justify-between mt-3 px-1">
        {palette.colours.map((colour, i) => (
          <div key={`info-${i}`} className="flex-1 text-center">
            <p className="text-xs font-mono font-medium text-brand-slate-600">{colour.hex}</p>
            <p className="text-[10px] text-brand-slate-400">{colour.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
