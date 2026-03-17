"use client";

import React, { useState } from "react";
import { Colour, getContrastRatio } from "@/lib/palette";
import { copyToClipboard } from "@/lib/url";

interface ColourSwatchProps {
  colour: Colour;
  size?: "sm" | "md" | "lg";
  position?: "first" | "middle" | "last" | "only";
}

export const ColourSwatch: React.FC<ColourSwatchProps> = ({
  colour,
  size = "md",
  position = "only",
}) => {
  const [copied, setCopied] = useState(false);
  const { onWhite, onBlack } = getContrastRatio(colour.hex);
  const isDark = onWhite > onBlack;
  const textColor = isDark ? "text-white" : "text-black";

  const handleCopy = async () => {
    const success = await copyToClipboard(colour.hex);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  const sizeClasses = {
    sm: "h-[60px]",
    md: "h-[60px] sm:h-[80px]",
    lg: "h-[80px] sm:h-[100px]",
  };

  const radiusClasses = {
    first: "rounded-l-lg",
    middle: "rounded-none",
    last: "rounded-r-lg",
    only: "rounded-lg",
  };

  return (
    <div
      onClick={handleCopy}
      style={{ backgroundColor: colour.hex }} // Using inline style for dynamic hex background
      className={`relative w-full cursor-pointer group transition-transform hover:scale-[1.02] active:scale-95 ${sizeClasses[size]} ${radiusClasses[position]}`}
    >
      {/* Hover Overlay */}
      <div className={`absolute inset-0 flex items-center justify-center ${isDark ? 'bg-black/20' : 'bg-white/20'} opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-[2px]`}>
        <span className={`${textColor} font-mono font-bold text-lg select-none px-3 py-1 bg-black/10 rounded-lg backdrop-blur-md border border-white/10`}>
          {colour.hex}
        </span>
      </div>

      {/* Copied Notification */}
      {copied && (
        <div className="absolute inset-0 flex items-center justify-center bg-brand-slate-900/80 z-10 transition-all duration-300">
          <span className="text-white font-bold text-sm bg-brand-slate-800 px-3 py-1 rounded-full border border-brand-slate-700 shadow-lg">
            Copied!
          </span>
        </div>
      )}

      {/* WCAG Badge */}
      <div className="absolute bottom-2 right-2">
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-full shadow-md border ${isDark ? 'border-white/20' : 'border-black/20'} ${
            Math.max(onWhite, onBlack) >= 4.5 ? "bg-green-500" : "bg-red-500"
          }`}
          title={Math.max(onWhite, onBlack) >= 4.5 ? "Passes WCAG AA" : "Fails WCAG AA"}
        >
          <span className="text-white text-[10px] font-bold">Aa</span>
        </div>
      </div>
      
      {/* Screen Reader Info */}
      <span className="sr-only">Color {colour.hex} ({colour.name}). Click to copy.</span>
    </div>
  );
};
