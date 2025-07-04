/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "tailwindcss/lib/util/flattenColorPalette" {
  const flattenColorPalette: (colors: Record<string, any>) => Record<string, string>;
  export default flattenColorPalette;
}