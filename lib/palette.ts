import chroma from "chroma-js";

export type PaletteType = 
  | "complementary" 
  | "triadic" 
  | "analogous" 
  | "split-complementary" 
  | "monochromatic"
  | "square"
  | "tetradic";

export type Colour = {
  hex: string;
  hsl: string;
  rgb: string;
  name: string;
};

export type Palette = {
  type: PaletteType;
  label: string;
  colours: Colour[];
};

/**
 * Returns a descriptive name based on the lightness of the color.
 */
function getLightnessName(color: chroma.Color): string {
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
 */
function createColour(color: chroma.Color, customName?: string): Colour {
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
    name: customName || getLightnessName(color),
  };
}

/**
 * Generates 5 palettes (Complementary, Triadic, Analogous, Split-complementary, Monochromatic).
 */
export function generatePalettes(baseHex: string): Palette[] {
  const base = chroma(baseHex);

  const palettes: Palette[] = [
    // Monochromatic: 20, 40, 60, 70, 85% lightness
    {
      type: "monochromatic",
      label: "Monochromatic",
      colours: [0.2, 0.4, 0.6, 0.7, 0.85].map((l, i) => {
        const names = ["Dark", "Base", "Light", "Lighter", "Lightest"];
        return createColour(base.set("hsl.l", l), names[i]);
      }),
    },

    // Analogous: base + -30, -15, +15, +30 degrees
    {
      type: "analogous",
      label: "Analogous",
      colours: [-30, -15, 0, 15, 30].map((shift) => 
        createColour(base.set("hsl.h", (base.get("hsl.h") + shift + 360) % 360))
      ),
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
        createColour(base.set("hsl.l", 0.9), "Lightest"),
      ],
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
        createColour(base.set("hsl.h", (base.get("hsl.h") + 240) % 360)),
      ],
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
        createColour(base.set("hsl.h", (base.get("hsl.h") + 210) % 360)),
      ],
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
        createColour(base.set("hsl.l", 0.9), "Lightest"),
      ],
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
        createColour(base.set("hsl.l", 0.9), "Lightest"),
      ],
    },
  ];

  return palettes;
}

/**
 * Calculates contrast ratios and accessibility passes for a given hex color.
 */
export function getContrastRatio(hex: string): { 
  onWhite: number; 
  onBlack: number; 
  passesAA: boolean; 
  passesAAA: boolean; 
} {
  const color = chroma(hex);
  const onWhite = chroma.contrast(color, "#ffffff");
  const onBlack = chroma.contrast(color, "#000000");

  // We use the higher contrast ratio (typically against black/white) to determine passes
  const maxContrast = Math.max(onWhite, onBlack);

  return {
    onWhite: Number(onWhite.toFixed(2)),
    onBlack: Number(onBlack.toFixed(2)),
    passesAA: maxContrast >= 4.5,
    passesAAA: maxContrast >= 7.0,
  };
}
