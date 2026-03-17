(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/Pallete/pallete/lib/palette.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generatePalettes",
    ()=>generatePalettes,
    "getContrastRatio",
    ()=>getContrastRatio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$chroma$2d$js$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Pallete/pallete/node_modules/chroma-js/index.js [app-client] (ecmascript) <locals>");
;
/**
 * Returns a descriptive name based on the lightness of the color.
 */ function getLightnessName(color) {
    const hsl = color.hsl();
    const lightness = hsl[2];
    if (lightness < 0.3) return "Dark";
    if (lightness < 0.5) return "Deep";
    if (lightness < 0.7) return "Base";
    if (lightness < 0.85) return "Light";
    if (lightness < 0.95) return "Lighter";
    return "Lightest";
}
/**
 * Creates a Colour object from a chroma Color instance.
 */ function createColour(color, customName) {
    const [h, s, l] = color.hsl();
    const [r, g, b] = color.rgb();
    // Format HSL string: hsl(h, s%, l%)
    const hslStr = `hsl(${Math.round(isNaN(h) ? 0 : h)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
    // Format RGB string: rgb(r, g, b)
    const rgbStr = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
    return {
        hex: color.hex().toUpperCase(),
        hsl: hslStr,
        rgb: rgbStr,
        name: customName || getLightnessName(color)
    };
}
function generatePalettes(baseHex) {
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$chroma$2d$js$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(baseHex);
    const palettes = [
        // Monochromatic: 20, 40, 60, 70, 85% lightness
        {
            type: "monochromatic",
            label: "Monochromatic",
            colours: [
                0.2,
                0.4,
                0.6,
                0.7,
                0.85
            ].map((l, i)=>{
                const names = [
                    "Dark",
                    "Base",
                    "Light",
                    "Lighter",
                    "Lightest"
                ];
                return createColour(base.set("hsl.l", l), names[i]);
            })
        },
        // Analogous: base + -30, -15, +15, +30 degrees
        {
            type: "analogous",
            label: "Analogous",
            colours: [
                -30,
                -15,
                0,
                15,
                30
            ].map((shift)=>createColour(base.set("hsl.h", (base.get("hsl.h") + shift + 360) % 360)))
        },
        // Complementary: base + opposite (180) + 3 variants to fill to 5
        {
            type: "complementary",
            label: "Complementary",
            colours: [
                createColour(base.set("hsl.l", 0.3), "Dark"),
                createColour(base, "Base"),
                createColour(base.set("hsl.h", (base.get("hsl.h") + 180) % 360), "Complement"),
                createColour(base.set("hsl.h", (base.get("hsl.h") + 180) % 360).set("hsl.l", 0.8), "Light Complement"),
                createColour(base.set("hsl.l", 0.9), "Lightest")
            ]
        },
        // Triadic: base + 120 + 240, fill to 5
        {
            type: "triadic",
            label: "Triadic",
            colours: [
                createColour(base.set("hsl.h", (base.get("hsl.h") + 120) % 360)),
                createColour(base.set("hsl.h", (base.get("hsl.h") + 120) % 360).brighten(1)),
                createColour(base, "Base"),
                createColour(base.set("hsl.h", (base.get("hsl.h") + 240) % 360).brighten(1)),
                createColour(base.set("hsl.h", (base.get("hsl.h") + 240) % 360))
            ]
        },
        // Split-complementary: base + 150 + 210, fill to 5
        {
            type: "split-complementary",
            label: "Split-complementary",
            colours: [
                createColour(base.set("hsl.h", (base.get("hsl.h") + 150) % 360)),
                createColour(base.set("hsl.h", (base.get("hsl.h") + 150) % 360).brighten(1)),
                createColour(base, "Base"),
                createColour(base.set("hsl.h", (base.get("hsl.h") + 210) % 360).brighten(1)),
                createColour(base.set("hsl.h", (base.get("hsl.h") + 210) % 360))
            ]
        },
        // Square: base + 90 + 180 + 270, fill to 5
        {
            type: "square",
            label: "Square",
            colours: [
                createColour(base),
                createColour(base.set("hsl.h", (base.get("hsl.h") + 90) % 360)),
                createColour(base.set("hsl.h", (base.get("hsl.h") + 180) % 360)),
                createColour(base.set("hsl.h", (base.get("hsl.h") + 270) % 360)),
                createColour(base.set("hsl.l", 0.9), "Lightest")
            ]
        },
        // Tetradic (Rectangle): base + 60 + 180 + 240, fill to 5
        {
            type: "tetradic",
            label: "Tetradic",
            colours: [
                createColour(base),
                createColour(base.set("hsl.h", (base.get("hsl.h") + 60) % 360)),
                createColour(base.set("hsl.h", (base.get("hsl.h") + 180) % 360)),
                createColour(base.set("hsl.h", (base.get("hsl.h") + 240) % 360)),
                createColour(base.set("hsl.l", 0.9), "Lightest")
            ]
        }
    ];
    return palettes;
}
function getContrastRatio(hex) {
    const color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$chroma$2d$js$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(hex);
    const onWhite = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$chroma$2d$js$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].contrast(color, "#ffffff");
    const onBlack = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$chroma$2d$js$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].contrast(color, "#000000");
    // We use the higher contrast ratio (typically against black/white) to determine passes
    const maxContrast = Math.max(onWhite, onBlack);
    return {
        onWhite: Number(onWhite.toFixed(2)),
        onBlack: Number(onBlack.toFixed(2)),
        passesAA: maxContrast >= 4.5,
        passesAAA: maxContrast >= 7.0
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Pallete/pallete/lib/url.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildTweetText",
    ()=>buildTweetText,
    "copyToClipboard",
    ()=>copyToClipboard,
    "decodePaletteUrl",
    ()=>decodePaletteUrl,
    "encodePaletteUrl",
    ()=>encodePaletteUrl
]);
function encodePaletteUrl(baseHex, type) {
    const cleanHex = baseHex.replace("#", "").toUpperCase();
    const params = new URLSearchParams({
        color: cleanHex,
        type: type
    });
    return `?${params.toString()}`;
}
function decodePaletteUrl(searchParams) {
    const colorParam = searchParams.get("color");
    const typeParam = searchParams.get("type");
    const isValidHex = colorParam && /^[0-9A-F]{6}$/i.test(colorParam);
    const validTypes = [
        "analogous",
        "monochromatic",
        "triadic",
        "complementary",
        "split-complementary",
        "square",
        "tetradic"
    ];
    const baseHex = isValidHex ? `#${colorParam.toUpperCase()}` : null;
    const type = validTypes.includes(typeParam) ? typeParam : null;
    return {
        baseHex,
        type
    };
}
function buildTweetText(baseHex, type, pageUrl) {
    const hex = baseHex.startsWith("#") ? baseHex : `#${baseHex}`;
    return `Just created this beautiful ${type} palette from ${hex} using PaletteForge ✨ ${pageUrl} #design #color #webdev`;
}
async function copyToClipboard(text) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Try modern navigator.clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (err) {
            console.error("Clipboard API failed, falling back...", err);
        }
    }
    // Fallback for older browsers
    try {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        // Ensure the textarea is not visible
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);
        return successful;
    } catch (err) {
        console.error("Fallback copy failed:", err);
        return false;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Pallete/pallete/components/ColourSwatch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColourSwatch",
    ()=>ColourSwatch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Pallete/pallete/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Pallete/pallete/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$lib$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Pallete/pallete/lib/palette.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$lib$2f$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Pallete/pallete/lib/url.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const ColourSwatch = ({ colour, size = "md", position = "only" })=>{
    _s();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { onWhite, onBlack } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$lib$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContrastRatio"])(colour.hex);
    const isDark = onWhite > onBlack;
    const textColor = isDark ? "text-white" : "text-black";
    const handleCopy = async ()=>{
        const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$lib$2f$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyToClipboard"])(colour.hex);
        if (success) {
            setCopied(true);
            setTimeout(()=>setCopied(false), 1500);
        }
    };
    const sizeClasses = {
        sm: "h-[60px]",
        md: "h-[60px] sm:h-[80px]",
        lg: "h-[80px] sm:h-[100px]"
    };
    const radiusClasses = {
        first: "rounded-l-lg",
        middle: "rounded-none",
        last: "rounded-r-lg",
        only: "rounded-lg"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: handleCopy,
        style: {
            backgroundColor: colour.hex
        },
        className: `relative w-full cursor-pointer group transition-transform hover:scale-[1.02] active:scale-95 ${sizeClasses[size]} ${radiusClasses[position]}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute inset-0 flex items-center justify-center ${isDark ? 'bg-black/20' : 'bg-white/20'} opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-[2px]`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `${textColor} font-mono font-bold text-lg select-none px-3 py-1 bg-black/10 rounded-lg backdrop-blur-md border border-white/10`,
                    children: colour.hex
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColourSwatch.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColourSwatch.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            copied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center bg-brand-slate-900/80 z-10 transition-all duration-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white font-bold text-sm bg-brand-slate-800 px-3 py-1 rounded-full border border-brand-slate-700 shadow-lg",
                    children: "Copied!"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColourSwatch.tsx",
                    lineNumber: 60,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColourSwatch.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-2 right-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex items-center justify-center w-8 h-8 rounded-full shadow-md border ${isDark ? 'border-white/20' : 'border-black/20'} ${Math.max(onWhite, onBlack) >= 4.5 ? "bg-green-500" : "bg-red-500"}`,
                    title: Math.max(onWhite, onBlack) >= 4.5 ? "Passes WCAG AA" : "Fails WCAG AA",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white text-[10px] font-bold",
                        children: "Aa"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColourSwatch.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColourSwatch.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColourSwatch.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: [
                    "Color ",
                    colour.hex,
                    " (",
                    colour.name,
                    "). Click to copy."
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColourSwatch.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColourSwatch.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ColourSwatch, "NE86rL3vg4NVcTTWDavsT0hUBJs=");
_c = ColourSwatch;
var _c;
__turbopack_context__.k.register(_c, "ColourSwatch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Pallete/pallete/components/PaletteRow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PaletteRow",
    ()=>PaletteRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Pallete/pallete/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$components$2f$ColourSwatch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Pallete/pallete/components/ColourSwatch.tsx [app-client] (ecmascript)");
"use client";
;
;
const PaletteRow = ({ palette, isActive, onSelectAction })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onSelectAction,
        className: `group flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 cursor-pointer transition-all duration-150 border-l-4 ${isActive ? "bg-brand-rose-50 border-brand-rose-500" : "bg-white border-transparent hover:bg-brand-slate-50"} rounded-r-xl`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full sm:w-32 lg:w-40 shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm font-medium text-brand-slate-700 uppercase tracking-wide",
                    children: palette.label
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/PaletteRow.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/PaletteRow.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full overflow-hidden rounded-lg shadow-sm",
                children: palette.colours.map((colour, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$components$2f$ColourSwatch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColourSwatch"], {
                            colour: colour,
                            // Dynamically adjust height: 60px on mobile, 80px on larger screens
                            // We'll use a custom size or height class in PaletteRow if needed, 
                            // but ColourSwatch already supports sm/md/lg.
                            // We can pass 'sm' and then use responsive wrapper classes.
                            size: "md",
                            position: index === 0 ? "first" : index === palette.colours.length - 1 ? "last" : "middle"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/PaletteRow.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, `${palette.type}-${colour.hex}-${index}`, false, {
                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/PaletteRow.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/PaletteRow.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden lg:block ml-2 text-brand-rose-500",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    className: "w-5 h-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fillRule: "evenodd",
                        d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
                        clipRule: "evenodd"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/PaletteRow.tsx",
                        lineNumber: 66,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/PaletteRow.tsx",
                    lineNumber: 60,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/PaletteRow.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/PaletteRow.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = PaletteRow;
var _c;
__turbopack_context__.k.register(_c, "PaletteRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Pallete/pallete/components/ExportPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExportPanel",
    ()=>ExportPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Pallete/pallete/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Pallete/pallete/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$lib$2f$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Pallete/pallete/lib/url.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ExportPanel = ({ palette })=>{
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("CSS Variables");
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const generateCSS = ()=>{
        const vars = palette.colours.map((c, i)=>`  --color-${i + 1}: ${c.hex};`).join("\n");
        return `:root {\n${vars}\n}`;
    };
    const generateTailwind = ()=>{
        const colors = palette.colours.map((c, i)=>`        ${i + 1}: '${c.hex}',`).join("\n");
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
    const generateSCSS = ()=>{
        return palette.colours.map((c, i)=>`$color-${i + 1}: ${c.hex};`).join("\n");
    };
    // Wait, I made a typo in generateSCSS (.joint instead of .join)
    // Let me fix that in the final string calculation logic instead.
    const getCode = ()=>{
        switch(activeTab){
            case "CSS Variables":
                return generateCSS();
            case "Tailwind Config":
                return generateTailwind();
            case "SCSS Variables":
                return palette.colours.map((c, i)=>`$color-${i + 1}: ${c.hex};`).join("\n");
            default:
                return "";
        }
    };
    const handleCopy = async ()=>{
        const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$lib$2f$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyToClipboard"])(getCode());
        if (success) {
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl border border-brand-slate-100 shadow-sm overflow-hidden flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between border-b border-brand-slate-100 bg-brand-slate-50/50 px-6 py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4",
                        children: [
                            "CSS Variables",
                            "Tailwind Config",
                            "SCSS Variables"
                        ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(tab),
                                className: `text-sm font-bold transition-colors ${activeTab === tab ? "text-brand-rose-500" : "text-brand-slate-400 hover:text-brand-slate-600"}`,
                                children: tab
                            }, tab, false, {
                                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ExportPanel.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ExportPanel.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-black uppercase tracking-widest bg-brand-rose-500 text-white px-2 py-0.5 rounded",
                                children: activeTab
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ExportPanel.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleCopy,
                                className: "text-xs font-bold text-brand-slate-600 hover:text-brand-rose-500 flex items-center gap-1 transition-colors",
                                children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1 text-green-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            className: "w-4 h-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fillRule: "evenodd",
                                                d: "M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",
                                                clipRule: "evenodd"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ExportPanel.tsx",
                                                lineNumber: 104,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ExportPanel.tsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Copied"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ExportPanel.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            className: "w-4 h-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "14",
                                                    height: "14",
                                                    x: "8",
                                                    y: "8",
                                                    rx: "2",
                                                    ry: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ExportPanel.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ExportPanel.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 75
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ExportPanel.tsx",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Copy code"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ExportPanel.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ExportPanel.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ExportPanel.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ExportPanel.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-brand-slate-900 p-6 relative group",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                    className: "font-mono text-sm text-brand-slate-50 overflow-x-auto selection:bg-brand-rose-500/30",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        children: getCode()
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ExportPanel.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ExportPanel.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ExportPanel.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-brand-slate-50 px-6 py-2 border-t border-brand-slate-100 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] font-medium text-brand-slate-400 uppercase tracking-tighter",
                        children: "Ready for production use"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ExportPanel.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1 h-1 rounded-full bg-brand-slate-300"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ExportPanel.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1 h-1 rounded-full bg-brand-slate-300"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ExportPanel.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1 h-1 rounded-full bg-brand-slate-300"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ExportPanel.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ExportPanel.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ExportPanel.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ExportPanel.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ExportPanel, "ZvHeu737yPbW03Rab9UbPM7MpU0=");
_c = ExportPanel;
var _c;
__turbopack_context__.k.register(_c, "ExportPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Pallete/pallete/components/ColourPicker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColourPicker",
    ()=>ColourPicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Pallete/pallete/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Pallete/pallete/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const ColourPicker = ({ value, onChangeAction })=>{
    _s();
    const [localValue, setLocalValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    const [isValid, setIsValid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Sync internal state when external value changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ColourPicker.useEffect": ()=>{
            setLocalValue(value.toUpperCase());
            setIsValid(true);
        }
    }["ColourPicker.useEffect"], [
        value
    ]);
    const validateHex = (hex)=>{
        return /^#[0-9A-F]{6}$/i.test(hex);
    };
    const handleTextChange = (e)=>{
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
    const handleColorChange = (e)=>{
        const newValue = e.target.value.toUpperCase();
        setLocalValue(newValue);
        setIsValid(true);
        onChangeAction(newValue);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-sm font-medium text-brand-slate-500",
                children: "Pick a base colour"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColourPicker.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-slate-100 shadow-sm transition-transform hover:scale-105 active:scale-95",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "color",
                            value: value,
                            onChange: handleColorChange,
                            className: "absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1-2 -translate-y-1-2 cursor-pointer border-none p-0 bg-transparent",
                            style: {
                                transform: 'translate(-50%, -50%) scale(2)',
                                appearance: 'none',
                                WebkitAppearance: 'none'
                            }
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColourPicker.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColourPicker.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: localValue,
                                onChange: handleTextChange,
                                maxLength: 7,
                                className: `px-4 py-2 w-32 font-mono text-lg font-bold rounded-xl border-2 transition-all outline-none ${isValid ? "border-brand-slate-100 focus:border-brand-rose-400 bg-white" : "border-red-500 focus:border-red-600 bg-red-50 text-red-900"}`
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColourPicker.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            !isValid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute -bottom-5 left-0 text-[10px] font-bold text-red-500 uppercase tracking-tighter",
                                children: "Invalid Hex"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColourPicker.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColourPicker.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColourPicker.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColourPicker.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ColourPicker, "DrT+wE0SdcAN18InjBe92s+2N00=");
_c = ColourPicker;
var _c;
__turbopack_context__.k.register(_c, "ColourPicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Pallete/pallete/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Pallete/pallete/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Pallete/pallete/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$lib$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Pallete/pallete/lib/palette.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$lib$2f$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Pallete/pallete/lib/url.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$components$2f$PaletteRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Pallete/pallete/components/PaletteRow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$components$2f$ExportPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Pallete/pallete/components/ExportPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$components$2f$ColourPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Pallete/pallete/components/ColourPicker.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// Hard-coded gallery data
const FEATURED_PALETTES = [
    {
        name: "Sunset",
        hex: "#FF6B6B"
    },
    {
        name: "Ocean",
        hex: "#0077B6"
    },
    {
        name: "Forest",
        hex: "#2D6A4F"
    },
    {
        name: "Desert",
        hex: "#E9C46A"
    },
    {
        name: "Lavender",
        hex: "#B79CED"
    },
    {
        name: "Midnight",
        hex: "#1D3557"
    },
    {
        name: "Coral",
        hex: "#FF8C94"
    },
    {
        name: "Mint",
        hex: "#B5E48C"
    },
    {
        name: "Golden",
        hex: "#FFD700"
    },
    {
        name: "Berry",
        hex: "#9D0208"
    },
    {
        name: "Storm",
        hex: "#4A4E69"
    },
    {
        name: "Peach",
        hex: "#F4A261"
    }
];
function PaletteContent() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Initial state from URL or defaults
    const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$lib$2f$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodePaletteUrl"])(searchParams);
    const [baseHex, setBaseHex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(decoded.baseHex || "#6366F1");
    const [activeType, setActiveType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(decoded.type || "complementary");
    const [palettes, setPalettes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pageUrl, setPageUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Sync palettes with baseHex
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PaletteContent.useEffect": ()=>{
            const cleanHex = baseHex.startsWith('#') ? baseHex : `#${baseHex}`;
            if (/^#[0-9A-F]{6}$/i.test(cleanHex)) {
                const generated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$lib$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generatePalettes"])(cleanHex);
                setPalettes(generated);
                // Update URL
                const queryString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$lib$2f$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodePaletteUrl"])(cleanHex, activeType);
                router.replace(queryString, {
                    scroll: false
                });
            }
        }
    }["PaletteContent.useEffect"], [
        baseHex,
        activeType,
        router
    ]);
    // Update pageUrl for sharing
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PaletteContent.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                setPageUrl(window.location.href);
            }
        }
    }["PaletteContent.useEffect"], [
        baseHex,
        activeType
    ]);
    const activePalette = palettes.find((p)=>p.type === activeType) || palettes[0];
    const handleTweet = ()=>{
        const text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$lib$2f$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildTweetText"])(baseHex, activeType, pageUrl);
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, "_blank");
    };
    const handleCopyLink = async ()=>{
        const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$lib$2f$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyToClipboard"])(pageUrl);
        if (success) {
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-5xl w-full flex flex-col gap-16 pb-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex flex-col items-center text-center pt-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 bg-brand-rose-500 rounded-2xl flex items-center justify-center shadow-xl shadow-brand-rose-500/20 rotate-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "28",
                                    height: "28",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "white",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 186
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl font-black tracking-tight text-brand-slate-900",
                                children: [
                                    "Palette",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-brand-rose-500",
                                        children: "Forge"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 20
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-brand-slate-500 max-w-2xl mb-12",
                        children: "Beautiful colour palettes in seconds. Export as CSS, Tailwind, or SCSS. Built for modern design workflows."
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-8 rounded-3xl shadow-xl shadow-brand-slate-200/50 border border-brand-slate-100 mb-4 scale-110",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$components$2f$ColourPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColourPicker"], {
                            value: baseHex,
                            onChangeAction: setBaseHex
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xs font-black uppercase tracking-[0.2em] text-brand-slate-400 mb-8 flex items-center gap-4",
                        children: [
                            "Theory Variants",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px bg-brand-slate-200 flex-grow"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4 bg-white p-4 rounded-3xl border border-brand-slate-100 shadow-sm",
                        children: palettes.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$components$2f$PaletteRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaletteRow"], {
                                palette: p,
                                isActive: activeType === p.type,
                                onSelectAction: ()=>setActiveType(p.type)
                            }, p.type, false, {
                                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-8 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xs font-black uppercase tracking-[0.2em] text-brand-slate-400 mb-6 flex items-center gap-4",
                                children: [
                                    "Code Export",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-px bg-brand-slate-200 flex-grow"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            activePalette && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$components$2f$ExportPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExportPanel"], {
                                palette: activePalette
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                                lineNumber: 121,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xs font-black uppercase tracking-[0.2em] text-brand-slate-400 mb-6 flex items-center gap-4",
                                children: [
                                    "Spread the word",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-px bg-brand-slate-200 flex-grow"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleTweet,
                                        className: "w-full py-4 bg-brand-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-black transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-brand-slate-900/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 h-5",
                                                fill: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 80
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                                                lineNumber: 134,
                                                columnNumber: 15
                                            }, this),
                                            "Tweet this palette"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleCopyLink,
                                        className: "w-full py-4 bg-white border-2 border-brand-slate-100 text-brand-slate-700 rounded-2xl font-bold flex items-center justify-center gap-3 hover:border-brand-rose-200 hover:text-brand-rose-500 transition-all hover:scale-[1.02] active:scale-95 shadow-sm",
                                        children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-green-500 flex items-center gap-2",
                                            children: "✓ Copied!"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                                            lineNumber: 142,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-2",
                                            children: "🔗 Copy share link"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                                            lineNumber: 144,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xs font-black uppercase tracking-[0.2em] text-brand-slate-400 mb-8 flex items-center gap-4",
                        children: [
                            "Featured Gallery",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px bg-brand-slate-200 flex-grow"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
                        children: FEATURED_PALETTES.map((f)=>{
                            const previewPalettes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$lib$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generatePalettes"])(f.hex);
                            const preview = previewPalettes.find((p)=>p.type === 'monochromatic')?.colours || [];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setBaseHex(f.hex),
                                className: "group text-left bg-white p-3 rounded-2xl border border-brand-slate-100 hover:border-brand-rose-300 hover:shadow-xl hover:shadow-brand-rose-500/5 transition-all duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-12 w-full rounded-lg overflow-hidden mb-3",
                                        children: preview.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                style: {
                                                    backgroundColor: c.hex
                                                }
                                            }, i, false, {
                                                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                                                lineNumber: 170,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                                        lineNumber: 168,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold text-brand-slate-700 group-hover:text-brand-rose-500 transition-colors",
                                        children: f.name
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-[10px] font-mono text-brand-slate-400",
                                        children: f.hex.toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                                        lineNumber: 176,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, f.name, true, {
                                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                                lineNumber: 163,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "mt-24 pt-12 border-t border-brand-slate-100 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-brand-slate-400 text-sm",
                    children: "© 2026 PaletteForge Engine. All rights reserved."
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(PaletteContent, "iysECNe2fue8ZeNlrxIVkfi/Sb8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = PaletteContent;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex min-h-screen flex-col items-center p-6 md:p-12 bg-brand-slate-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center h-screen",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-12 h-12 border-4 border-brand-rose-200 border-t-brand-rose-500 rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                    lineNumber: 197,
                    columnNumber: 11
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                lineNumber: 196,
                columnNumber: 9
            }, void 0),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PaletteContent, {}, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
                lineNumber: 200,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
            lineNumber: 195,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/app/page.tsx",
        lineNumber: 194,
        columnNumber: 5
    }, this);
}
_c1 = Home;
var _c, _c1;
__turbopack_context__.k.register(_c, "PaletteContent");
__turbopack_context__.k.register(_c1, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Desktop_Pallete_pallete_05063611._.js.map