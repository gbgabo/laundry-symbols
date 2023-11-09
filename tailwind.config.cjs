/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        main: "1fr min(65ch, 100%) 1fr",
      },
    },
  },
  safelist: ["mb-24", "text-cyan-400"],
  plugins: [],
};
