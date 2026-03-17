export type PaletteType = 
  | "analogous" 
  | "monochromatic" 
  | "triadic" 
  | "complementary" 
  | "split-complementary" 
  | "square" 
  | "tetradic";

/**
 * Encodes palette parameters into a URL-safe query string.
 */
export function encodePaletteUrl(baseHex: string, type: PaletteType): string {
  const cleanHex = baseHex.replace("#", "").toUpperCase();
  const params = new URLSearchParams({
    color: cleanHex,
    type: type,
  });
  return `?${params.toString()}`;
}

/**
 * Decodes palette parameters from URLSearchParams and validates them.
 */
export function decodePaletteUrl(searchParams: URLSearchParams): { 
  baseHex: string | null; 
  type: PaletteType | null; 
} {
  const colorParam = searchParams.get("color");
  const typeParam = searchParams.get("type");

  const isValidHex = colorParam && /^[0-9A-F]{6}$/i.test(colorParam);
  const validTypes: PaletteType[] = [
    "analogous",
    "monochromatic",
    "triadic",
    "complementary",
    "split-complementary",
    "square",
    "tetradic",
  ];

  const baseHex = isValidHex ? `#${colorParam.toUpperCase()}` : null;
  const type = validTypes.includes(typeParam as PaletteType) 
    ? (typeParam as PaletteType) 
    : null;

  return { baseHex, type };
}

/**
 * Builds a pre-filled tweet text for sharing.
 */
export function buildTweetText(
  baseHex: string, 
  type: PaletteType, 
  pageUrl: string
): string {
  const hex = baseHex.startsWith("#") ? baseHex : `#${baseHex}`;
  return `Just created this beautiful ${type} palette from ${hex} using PaletteForge ✨ ${pageUrl} #design #color #webdev`;
}

/**
 * Copies text to the clipboard with a fallback for older browsers.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof window === "undefined") return false;

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
