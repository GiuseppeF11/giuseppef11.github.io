/** @type {import('tailwindcss').Config} */

// I valori vivono in src/index.css (:root): qui li si espone come classi Tailwind.
const token = (name) => `rgb(var(--${name}-rgb) / <alpha-value>)`;

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: token("night"),
        surface: token("surface"),
        line: token("line"),
        accent: token("accent"),
        ink: token("ink"),
        muted: token("muted"),
        subtle: token("subtle"),
      },
      fontSize: {
        "2xs": ["var(--fs-2xs)", { lineHeight: "1rem" }],
      },
      borderRadius: {
        control: "var(--radius-sm)",
        card: "var(--radius-md)",
        modal: "var(--radius-lg)",
        pill: "var(--radius-pill)",
      },
    },
  },
  plugins: [],
}
