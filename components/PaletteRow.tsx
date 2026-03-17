"use client";

import React from "react";
import { Palette } from "@/lib/palette";
import { ColourSwatch } from "./ColourSwatch";

interface PaletteRowProps {
  palette: Palette;
  isActive: boolean;
  onSelectAction: () => void;
}

export const PaletteRow: React.FC<PaletteRowProps> = ({
  palette,
  isActive,
  onSelectAction,
}) => {
  return (
    <div
      onClick={onSelectAction}
      className={`group flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 cursor-pointer transition-all duration-150 border-l-4 ${
        isActive
          ? "bg-brand-rose-50 border-brand-rose-500"
          : "bg-white border-transparent hover:bg-brand-slate-50"
      } rounded-r-xl`}
    >
      {/* Label */}
      <div className="w-full sm:w-32 lg:w-40 shrink-0">
        <span className="text-sm font-medium text-brand-slate-700 uppercase tracking-wide">
          {palette.label}
        </span>
      </div>

      {/* Colour Swatches Container */}
      <div className="flex w-full overflow-hidden rounded-lg shadow-sm">
        {palette.colours.map((colour, index) => (
          <div key={`${palette.type}-${colour.hex}-${index}`} className="flex-1">
            <ColourSwatch
              colour={colour}
              // Dynamically adjust height: 60px on mobile, 80px on larger screens
              // We'll use a custom size or height class in PaletteRow if needed, 
              // but ColourSwatch already supports sm/md/lg.
              // We can pass 'sm' and then use responsive wrapper classes.
              size="md" 
              position={
                index === 0
                  ? "first"
                  : index === palette.colours.length - 1
                  ? "last"
                  : "middle"
              }
            />
          </div>
        ))}
      </div>
      
      {/* Checkmark or indicator for active state (optional but nice for "screenshot ready") */}
      {isActive && (
        <div className="hidden lg:block ml-2 text-brand-rose-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </div>
  );
};
