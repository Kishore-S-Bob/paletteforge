module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/OneDrive/Desktop/Pallete/pallete/lib/palette.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generatePalettes",
    ()=>generatePalettes,
    "getContrastRatio",
    ()=>getContrastRatio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$chroma$2d$js$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Pallete/pallete/node_modules/chroma-js/index.js [app-ssr] (ecmascript) <locals>");
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
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$chroma$2d$js$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(baseHex);
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
        }
    ];
    return palettes;
}
function getContrastRatio(hex) {
    const color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$chroma$2d$js$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(hex);
    const onWhite = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$chroma$2d$js$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].contrast(color, "#ffffff");
    const onBlack = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$chroma$2d$js$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].contrast(color, "#000000");
    // We use the higher contrast ratio (typically against black/white) to determine passes
    const maxContrast = Math.max(onWhite, onBlack);
    return {
        onWhite: Number(onWhite.toFixed(2)),
        onBlack: Number(onBlack.toFixed(2)),
        passesAA: maxContrast >= 4.5,
        passesAAA: maxContrast >= 7.0
    };
}
}),
"[project]/OneDrive/Desktop/Pallete/pallete/lib/url.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
        "triad",
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
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
}
}),
"[project]/OneDrive/Desktop/Pallete/pallete/components/ColourSwatch.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColourSwatch",
    ()=>ColourSwatch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Pallete/pallete/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Pallete/pallete/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$lib$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Pallete/pallete/lib/palette.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$lib$2f$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Pallete/pallete/lib/url.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const ColourSwatch = ({ colour, size = "md", position = "only" })=>{
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { passesAA } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$lib$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContrastRatio"])(colour.hex);
    const handleCopy = async ()=>{
        const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$lib$2f$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copyToClipboard"])(colour.hex);
        if (success) {
            setCopied(true);
            setTimeout(()=>setCopied(false), 1500);
        }
    };
    const sizeClasses = {
        sm: "h-[60px]",
        md: "h-[80px]",
        lg: "h-[100px]"
    };
    const radiusClasses = {
        first: "rounded-l-lg",
        middle: "rounded-none",
        last: "rounded-r-lg",
        only: "rounded-lg"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: handleCopy,
        style: {
            backgroundColor: colour.hex
        },
        className: `relative w-full cursor-pointer group transition-transform hover:scale-[1.02] active:scale-95 ${sizeClasses[size]} ${radiusClasses[position]}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white font-mono font-bold text-lg select-none",
                    children: colour.hex
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColourSwatch.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColourSwatch.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            copied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center bg-brand-slate-900/80 z-10 transition-all duration-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white font-bold text-sm bg-brand-slate-800 px-3 py-1 rounded-full border border-brand-slate-700 shadow-lg",
                    children: "Copied!"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColourSwatch.tsx",
                    lineNumber: 58,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColourSwatch.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-2 right-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex items-center justify-center w-8 h-8 rounded-full shadow-md border border-white/20 ${passesAA ? "bg-green-500" : "bg-red-500"}`,
                    title: passesAA ? "Passes WCAG AA" : "Fails WCAG AA",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white text-[10px] font-bold",
                        children: "Aa"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColourSwatch.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColourSwatch.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColourSwatch.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                lineNumber: 77,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColourSwatch.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fdbab539._.js.map