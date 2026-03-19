"use client";

import React from "react";
import { Palette } from "@/lib/palette";
import { ColourSwatch } from "./ColourSwatch";

interface PaletteGridProps {
  palette: Palette;
}

export const PaletteGrid: React.FC<PaletteGridProps> = ({ palette }) => {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-brand-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-brand-slate-800 dark:text-slate-100 tracking-tight">
          {palette.label}
        </h3>
        <span className="text-xs font-medium px-2 py-1 rounded-full bg-brand-slate-50 dark:bg-slate-900 text-brand-slate-500 dark:text-slate-400 uppercase tracking-wider">
          {palette.type}
        </span>
      </div>
      
      <div className="flex w-full overflow-hidden rounded-xl border border-brand-slate-100 dark:border-slate-700 group">
        {palette.colours.map((colour, index) => (
          <ColourSwatch
            key={`${palette.type}-${colour.hex}-${index}`}
            colour={colour}
            size="lg"
            position={
              palette.colours.length === 1
                ? "only"
                : index === 0
                ? "first"
                : index === palette.colours.length - 1
                ? "last"
                : "middle"
            }
          />
        ))}
      </div>
    </div>
  );
};
