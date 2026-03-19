"use client";

import React, { useState } from "react";
import { Palette } from "@/lib/palette";
import { copyToClipboard } from "@/lib/url";

interface ExportPanelProps {
  palette: Palette;
}

type ExportFormat = "CSS Variables" | "Tailwind Config" | "SCSS Variables";

export const ExportPanel: React.FC<ExportPanelProps> = ({ palette }) => {
  const [activeTab, setActiveTab] = useState<ExportFormat>("CSS Variables");
  const [copied, setCopied] = useState(false);

  const generateCSS = () => {
    const vars = palette.colours
      .map((c, i) => `  --color-${i + 1}: ${c.hex};`)
      .join("\n");
    return `:root {\n${vars}\n}`;
  };

  const generateTailwind = () => {
    const colors = palette.colours
      .map((c, i) => `        ${i + 1}: '${c.hex}',`)
      .join("\n");
    return `module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
${colors}
        }
      }
    }
  }
}`;
  };

  const generateSCSS = () => {
    return palette.colours
      .map((c, i) => `$color-${i + 1}: ${c.hex};`)
      .join("\n");
  };

  // Wait, I made a typo in generateSCSS (.joint instead of .join)
  // Let me fix that in the final string calculation logic instead.
  
  const getCode = () => {
    switch (activeTab) {
      case "CSS Variables":
        return generateCSS();
      case "Tailwind Config":
        return generateTailwind();
      case "SCSS Variables":
        return palette.colours
          .map((c, i) => `$color-${i + 1}: ${c.hex};`)
          .join("\n");
      default:
        return "";
    }
  };

  const handleCopy = async () => {
    const success = await copyToClipboard(getCode());
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-brand-slate-100 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col">
      {/* Panel Header/Tabs */}
      <div className="flex items-center justify-between border-b border-brand-slate-100 dark:border-slate-700 bg-brand-slate-50/50 dark:bg-slate-800/50 px-6 py-4">
        <div className="flex gap-4">
          {(["CSS Variables", "Tailwind Config", "SCSS Variables"] as ExportFormat[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-bold transition-colors ${
                activeTab === tab 
                  ? "text-brand-rose-500" 
                  : "text-brand-slate-400 dark:text-slate-400 hover:text-brand-slate-600 dark:hover:text-slate-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-black uppercase tracking-widest bg-brand-rose-500 text-white px-2 py-0.5 rounded">
            {activeTab}
          </span>
          <button
            onClick={handleCopy}
            className="text-xs font-bold text-brand-slate-600 dark:text-slate-400 hover:text-brand-rose-500 flex items-center gap-1 transition-colors"
          >
            {copied ? (
              <span className="flex items-center gap-1 text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                Copied
              </span>
            ) : (
              <span className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                </svg>
                Copy code
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Code Block */}
      <div className="bg-brand-slate-900 p-6 relative group">
        <pre className="font-mono text-sm text-brand-slate-50 overflow-x-auto selection:bg-brand-rose-500/30">
          <code>{getCode()}</code>
        </pre>
      </div>
      
      <div className="bg-brand-slate-50 dark:bg-slate-800/30 px-6 py-2 border-t border-brand-slate-100 dark:border-slate-700 flex justify-between items-center">
        <p className="text-[10px] font-medium text-brand-slate-400 dark:text-slate-400 uppercase tracking-tighter">
          Ready for production use
        </p>
        <div className="flex gap-1">
          <div className="w-1 h-1 rounded-full bg-brand-slate-300"></div>
          <div className="w-1 h-1 rounded-full bg-brand-slate-300"></div>
          <div className="w-1 h-1 rounded-full bg-brand-slate-300"></div>
        </div>
      </div>
    </div>
  );
};
