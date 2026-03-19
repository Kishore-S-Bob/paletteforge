"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { generatePalettes, Palette } from "@/lib/palette";
import { decodePaletteUrl, encodePaletteUrl, PaletteType, buildTweetText, copyToClipboard } from "@/lib/url";
import { PaletteRow } from "@/components/PaletteRow";
import { ExportPanel } from "@/components/ExportPanel";
import { ColourPicker } from "@/components/ColourPicker";
import { ThemeToggle } from "@/components/ThemeToggle";

// Hard-coded gallery data
const FEATURED_PALETTES = [
  { name: "Sunset", hex: "#FF6B6B" },
  { name: "Ocean", hex: "#0077B6" },
  { name: "Forest", hex: "#2D6A4F" },
  { name: "Desert", hex: "#E9C46A" },
  { name: "Lavender", hex: "#B79CED" },
  { name: "Midnight", hex: "#1D3557" },
  { name: "Coral", hex: "#FF8C94" },
  { name: "Mint", hex: "#B5E48C" },
  { name: "Golden", hex: "#FFD700" },
  { name: "Berry", hex: "#9D0208" },
  { name: "Storm", hex: "#4A4E69" },
  { name: "Peach", hex: "#F4A261" },
];

function PaletteContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Initial state from URL or defaults
  const decoded = decodePaletteUrl(searchParams);
  
  const [baseHex, setBaseHex] = useState(decoded.baseHex || "#6366F1");
  const [activeType, setActiveType] = useState<PaletteType>(decoded.type || "complementary");
  const [palettes, setPalettes] = useState<Palette[]>([]);
  const [pageUrl, setPageUrl] = useState("");
  const [copied, setCopied] = useState(false);

  // Sync palettes with baseHex
  useEffect(() => {
    const cleanHex = baseHex.startsWith('#') ? baseHex : `#${baseHex}`;
    if (/^#[0-9A-F]{6}$/i.test(cleanHex)) {
      const generated = generatePalettes(cleanHex);
      setPalettes(generated);
      
      // Update URL
      const queryString = encodePaletteUrl(cleanHex, activeType);
      router.replace(queryString, { scroll: false });
    }
  }, [baseHex, activeType, router]);

  // Update pageUrl for sharing
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPageUrl(window.location.href);
    }
  }, [baseHex, activeType]);

  const activePalette = palettes.find((p) => p.type === activeType) || palettes[0];

  const handleTweet = () => {
    const text = buildTweetText(baseHex, activeType, pageUrl);
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleCopyLink = async () => {
    const success = await copyToClipboard(pageUrl);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-5xl w-full flex flex-col gap-16 pb-24">
      {/* 1. Hero Section */}
      <section className="flex flex-col items-center text-center pt-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-brand-rose-500 rounded-2xl flex items-center justify-center shadow-xl shadow-brand-rose-500/20 rotate-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
          </div>
          <h1 className="text-5xl font-black tracking-tight text-brand-slate-900 dark:text-slate-100">
            Palette<span className="text-brand-rose-500">Forge</span>
          </h1>
        </div>
        <p className="text-xl text-brand-slate-500 dark:text-slate-400 max-w-2xl mb-12">
          Beautiful colour palettes in seconds. Export as CSS, Tailwind, or SCSS. 
          Built for modern design workflows.
        </p>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl shadow-brand-slate-200/50 dark:shadow-none border border-brand-slate-100 dark:border-slate-700 mb-4 scale-110">
          <ColourPicker value={baseHex} onChangeAction={setBaseHex} />
        </div>
      </section>

      {/* 2. Palette Rows Section */}
      <section>
        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-brand-slate-400 dark:text-slate-400 mb-8 flex items-center gap-4">
          Theory Variants
          <div className="h-px bg-brand-slate-200 dark:bg-slate-700 flex-grow" />
        </h2>
        <div className="flex flex-col gap-4 bg-white dark:bg-slate-800 p-4 rounded-3xl border border-brand-slate-100 dark:border-slate-700 shadow-sm">
          {palettes.map((p) => (
            <PaletteRow 
              key={p.type} 
              palette={p} 
              isActive={activeType === p.type}
              onSelectAction={() => setActiveType(p.type as PaletteType)}
            />
          ))}
        </div>
      </section>

      {/* 3. Export Panel & 4. Share Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-brand-slate-400 dark:text-slate-400 mb-6 flex items-center gap-4">
            Code Export
            <div className="h-px bg-brand-slate-200 dark:bg-slate-700 flex-grow" />
          </h2>
          {activePalette && <ExportPanel palette={activePalette} />}
        </div>
        
        <div>
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-brand-slate-400 dark:text-slate-400 mb-6 flex items-center gap-4">
            Spread the word
            <div className="h-px bg-brand-slate-200 dark:bg-slate-700 flex-grow" />
          </h2>
          <div className="flex flex-col gap-4">
            <button 
              onClick={handleTweet}
              className="w-full py-4 bg-brand-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-black transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-brand-slate-900/10"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              Tweet this palette
            </button>
            <button 
              onClick={handleCopyLink}
              className="w-full py-4 bg-white dark:bg-slate-800 border-2 border-brand-slate-100 dark:border-slate-700 text-brand-slate-700 dark:text-slate-100 rounded-2xl font-bold flex items-center justify-center gap-3 hover:border-brand-rose-200 dark:hover:border-brand-rose-500 hover:text-brand-rose-500 transition-all hover:scale-[1.02] active:scale-95 shadow-sm"
            >
              {copied ? (
                <span className="text-green-500 flex items-center gap-2">✓ Copied!</span>
              ) : (
                <span className="flex items-center gap-2">🔗 Copy share link</span>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* 5. Featured Gallery Section */}
      <section>
        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-brand-slate-400 dark:text-slate-400 mb-8 flex items-center gap-4">
          Featured Gallery
          <div className="h-px bg-brand-slate-200 dark:bg-slate-700 flex-grow" />
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {FEATURED_PALETTES.map((f) => {
            const previewPalettes = generatePalettes(f.hex);
            const preview = previewPalettes.find(p => p.type === 'monochromatic')?.colours || [];
            
            return (
              <button 
                key={f.name}
                onClick={() => setBaseHex(f.hex)}
                className="group text-left bg-white dark:bg-slate-800 p-3 rounded-2xl border border-brand-slate-100 dark:border-slate-700 hover:border-brand-rose-300 dark:hover:border-brand-rose-500 hover:shadow-xl hover:shadow-brand-rose-500/5 transition-all duration-300"
              >
                <div className="flex h-12 w-full rounded-lg overflow-hidden mb-3">
                  {preview.map((c, i) => (
                    <div key={i} className="flex-1" style={{ backgroundColor: c.hex }} />
                  ))}
                </div>
                <span className="text-sm font-bold text-brand-slate-700 dark:text-slate-100 group-hover:text-brand-rose-500 transition-colors">
                  {f.name}
                </span>
                <span className="block text-[10px] font-mono text-brand-slate-400">
                  {f.hex.toUpperCase()}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <footer className="mt-24 pt-12 border-t border-brand-slate-100 dark:border-slate-700 text-center">
        <p className="text-brand-slate-400 dark:text-slate-400 text-sm">© 2026 PaletteForge Engine. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center p-6 md:p-12 bg-brand-slate-50 dark:bg-slate-900 transition-colors">
      <div className="absolute top-6 right-6 md:top-8 md:right-8 z-50 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl border border-brand-slate-200 dark:border-slate-700 shadow-sm p-1">
        <ThemeToggle />
      </div>
      <Suspense fallback={
        <div className="flex items-center justify-center h-screen">
          <div className="w-12 h-12 border-4 border-brand-rose-200 border-t-brand-rose-500 rounded-full animate-spin" />
        </div>
      }>
        <PaletteContent />
      </Suspense>
    </main>
  );
}
