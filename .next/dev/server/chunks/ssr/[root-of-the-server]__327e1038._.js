module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/OneDrive/Desktop/Pallete/pallete/components/ColorControls.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColorControls",
    ()=>ColorControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Pallete/pallete/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Pallete/pallete/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Pallete/pallete/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const ColorControls = ({ initialColor })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [color, setColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialColor);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setColor(initialColor);
    }, [
        initialColor
    ]);
    const handleColorChange = (e)=>{
        const newColor = e.target.value;
        setColor(newColor);
    };
    const handleSubmit = (e)=>{
        e?.preventDefault();
        const params = new URLSearchParams(searchParams.toString());
        params.set("color", color.replace("#", ""));
        router.push(`?${params.toString()}`);
    };
    const generateRandom = ()=>{
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
        setColor(randomColor);
        const params = new URLSearchParams(searchParams.toString());
        params.set("color", randomColor.replace("#", ""));
        router.push(`?${params.toString()}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col md:flex-row items-center gap-4 mb-12 bg-white p-4 rounded-2xl shadow-sm border border-brand-slate-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 w-full md:w-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 rounded-xl border-2 border-brand-slate-200 shadow-inner overflow-hidden flex-shrink-0",
                        style: {
                            backgroundColor: color
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "color",
                            value: color,
                            onChange: handleColorChange,
                            onBlur: ()=>handleSubmit(),
                            className: "w-full h-full opacity-0 cursor-pointer scale-150"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColorControls.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColorControls.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-grow md:w-32",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-brand-slate-400 font-mono text-sm",
                                children: "#"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColorControls.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: color.replace("#", ""),
                                onChange: (e)=>setColor("#" + e.target.value),
                                onKeyDown: (e)=>e.key === "Enter" && handleSubmit(),
                                className: "w-full pl-6 pr-3 py-2 bg-brand-slate-50 border border-brand-slate-200 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-brand-rose-500/20 focus:border-brand-rose-500 transition-all uppercase",
                                maxLength: 6
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColorControls.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColorControls.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColorControls.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 w-full md:w-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleSubmit(),
                        className: "flex-1 md:flex-none px-6 py-2 bg-brand-slate-900 text-white font-semibold rounded-lg hover:bg-brand-slate-800 transition-colors shadow-sm active:scale-95",
                        children: "Generate"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColorControls.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: generateRandom,
                        className: "px-4 py-2 bg-white text-brand-slate-700 font-medium border border-brand-slate-200 rounded-lg hover:bg-brand-slate-50 transition-colors active:scale-95 flex items-center gap-2",
                        title: "Random Color",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "18",
                            height: "18",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColorControls.tsx",
                                    lineNumber: 75,
                                    columnNumber: 189
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                    points: "7.5 4.21 12 6.81 16.5 4.21"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColorControls.tsx",
                                    lineNumber: 75,
                                    columnNumber: 328
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                    points: "7.5 19.79 7.5 14.6 3 12"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColorControls.tsx",
                                    lineNumber: 75,
                                    columnNumber: 385
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                    points: "21 12 16.5 14.6 16.5 19.79"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColorControls.tsx",
                                    lineNumber: 75,
                                    columnNumber: 439
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                    points: "3.27 6.96 12 12.01 20.73 6.96"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColorControls.tsx",
                                    lineNumber: 75,
                                    columnNumber: 496
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "12",
                                    y1: "22.08",
                                    x2: "12",
                                    y2: "12"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColorControls.tsx",
                                    lineNumber: 75,
                                    columnNumber: 556
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColorControls.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColorControls.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColorControls.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/ColorControls.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
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
    const { onWhite, onBlack } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$lib$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContrastRatio"])(colour.hex);
    const isDark = onWhite > onBlack;
    const textColor = isDark ? "text-white" : "text-black";
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
                className: `absolute inset-0 flex items-center justify-center ${isDark ? 'bg-black/20' : 'bg-white/20'} opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-[2px]`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            copied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center bg-brand-slate-900/80 z-10 transition-all duration-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-2 right-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex items-center justify-center w-8 h-8 rounded-full shadow-md border ${isDark ? 'border-white/20' : 'border-black/20'} ${Math.max(onWhite, onBlack) >= 4.5 ? "bg-green-500" : "bg-red-500"}`,
                    title: Math.max(onWhite, onBlack) >= 4.5 ? "Passes WCAG AA" : "Fails WCAG AA",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/OneDrive/Desktop/Pallete/pallete/components/PaletteSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PaletteSection",
    ()=>PaletteSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Pallete/pallete/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$components$2f$ColourSwatch$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Pallete/pallete/components/ColourSwatch.tsx [app-ssr] (ecmascript)");
"use client";
;
;
const PaletteSection = ({ palette })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-2xl shadow-sm border border-brand-slate-200 mb-8 last:mb-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-brand-slate-900",
                        children: palette.label
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/PaletteSection.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-medium uppercase tracking-wider text-brand-slate-400 bg-brand-slate-50 px-2 py-1 rounded",
                        children: palette.type
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/PaletteSection.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/PaletteSection.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row gap-2 md:gap-0 overflow-hidden md:rounded-xl md:border md:border-brand-slate-200",
                children: palette.colours.map((colour, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$components$2f$ColourSwatch$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ColourSwatch"], {
                                colour: colour,
                                size: "lg",
                                position: i === 0 ? "first" : i === palette.colours.length - 1 ? "last" : "middle"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/PaletteSection.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 md:hidden flex justify-between items-center px-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-mono font-medium text-brand-slate-500",
                                        children: colour.hex
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/PaletteSection.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-brand-slate-400",
                                        children: colour.name
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/PaletteSection.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/PaletteSection.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, `${palette.type}-${colour.hex}-${i}`, true, {
                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/PaletteSection.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/PaletteSection.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:flex justify-between mt-3 px-1",
                children: palette.colours.map((colour, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-mono font-medium text-brand-slate-600",
                                children: colour.hex
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/PaletteSection.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Pallete$2f$pallete$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-brand-slate-400",
                                children: colour.name
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/PaletteSection.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, `info-${i}`, true, {
                        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/PaletteSection.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/PaletteSection.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Pallete/pallete/components/PaletteSection.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__327e1038._.js.map