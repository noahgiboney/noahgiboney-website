/** Resolves a brand channel token into an alpha-aware Tailwind color. */
const brand = (token) => `rgb(var(${token}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Spec §3 — Archivo for display/UI, JetBrains Mono for labels,
      // IBM Plex Sans for long-form body copy.
      fontFamily: {
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        prose: ["var(--font-plex)", "system-ui", "sans-serif"],
      },
      // Spec §4 — buttons 7px, cards square.
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        button: "var(--nmg-radius-button)",
        card: "var(--nmg-radius-card)",
      },
      // Spec §2 — 7 / 14 / 20 / 28 / 40 / 64.
      spacing: {
        "nmg-1": "7px",
        "nmg-2": "14px",
        "nmg-3": "20px",
        "nmg-4": "28px",
        "nmg-5": "40px",
        "nmg-6": "64px",
      },
      letterSpacing: {
        wordmark: "0.04em",
        label: "0.12em",
        eyebrow: "0.22em",
        tagline: "0.30em",
        h1: "-0.035em",
        h2: "-0.02em",
        display: "-0.04em",
      },
      maxWidth: {
        content: "1180px",
      },
      colors: {
        // Brand accents — bright set (dark grounds, Iris button fills)
        iris: brand("--nmg-iris-rgb"),
        azure: brand("--nmg-azure-rgb"),
        mint: brand("--nmg-mint-rgb"),
        // Brand accents — deep set (light grounds)
        "iris-deep": brand("--nmg-iris-deep-rgb"),
        "azure-deep": brand("--nmg-azure-deep-rgb"),
        "mint-deep": brand("--nmg-mint-deep-rgb"),
        // Neutrals
        carbon: brand("--nmg-carbon-rgb"),
        surface: brand("--nmg-surface-rgb"),
        chalk: brand("--nmg-chalk-rgb"),
        // Ink scale on the light ground
        ink: brand("--nmg-ink-rgb"),
        "ink-body": brand("--nmg-body-rgb"),
        "ink-muted": brand("--nmg-muted-rgb"),
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [],
};
