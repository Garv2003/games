export default {
  compilers: {
    astro: (text: string) => Array.from(text.matchAll(/import[^;]+/g)).join("\n"),
    css: (text: string) => Array.from(text.matchAll(/(?<=@)import[^;]+/g)).join("\n"),
  },
  entry: ["src/pages/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,astro}"],
  project: [
    "src/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,astro}",
    "test/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,astro}",
  ],
};
