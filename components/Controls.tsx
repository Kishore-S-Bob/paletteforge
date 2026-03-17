"use client";

import React from "react";
import { PaletteType } from "@/lib/url";
import { copyToClipboard, buildTweetText } from "@/lib/url";
import { ColourPicker } from "./ColourPicker";

interface ControlsProps {
  baseColor: string;
  setBaseColorAction: (color: string) => void;
  paletteType: PaletteType;
  pageUrl: string;
}

export const Controls: React.FC<ControlsProps> = ({
  baseColor,
  setBaseColorAction,
  paletteType,
  pageUrl,
}) => {
  const handleShareTweet = () => {
    const text = buildTweetText(baseColor, paletteType, pageUrl);
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const handleCopyLink = async () => {
    await copyToClipboard(pageUrl);
    alert("URL copied to clipboard!");
  };

  return (
    <div className="flex flex-wrap items-center gap-6 p-6 bg-white rounded-2xl shadow-lg border border-brand-slate-100 mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
      <ColourPicker value={baseColor} onChangeAction={setBaseColorAction} />

      <div className="flex flex-col gap-2 ml-auto">
        <label className="text-sm font-bold text-brand-slate-600 uppercase tracking-widest text-right">
          Share Palette
        </label>
        <div className="flex gap-2">
          <button
            onClick={handleCopyLink}
            className="px-6 py-2 bg-brand-slate-100 hover:bg-brand-slate-200 text-brand-slate-700 font-bold rounded-xl transition-colors duration-200 flex items-center gap-2"
          >
            <span>🔗</span> Copy Link
          </button>
          <button
            onClick={handleShareTweet}
            className="px-6 py-2 bg-brand-slate-900 hover:bg-black text-white font-bold rounded-xl transition-all duration-200 flex items-center gap-2 hover:scale-105 active:scale-95"
          >
            <span>𝕏</span> Post Tweet
          </button>
        </div>
      </div>
    </div>
  );
};
