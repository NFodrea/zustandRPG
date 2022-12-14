/* eslint-env node */
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    corePlugins: {
        // Disable the CSS reset that tailwind applies: otherwise when tailwind is loaded
        // it'll change styles for views that aren't intended to use tailwind
        preflight: false,
    },
    theme: {
        extend: {
            keyframes: {
                sprite: {
                    "0%, 0%": { transform: "translate3d(0%,0,0)" },
                    "100%": { transform: "translate3d(-100%,0,0)" },
                },
            },
            gridTemplateRows: {
                // Simple 8 row grid
                8: "repeat(8, minmax(0, 1fr))",
            },
            animation: {
                sprite: "sprite 1s steps(4) infinite",
                characterIdle: "sprite 1s steps(3) infinite",
                characterOnce: "sprite 1s steps(3)",
                characterDead: "sprite 1s steps(1)",
                effectHeal: "sprite 1s steps(20)",
                enemyIdle: "sprite 1s steps(4) infinite",
            },
        },
    },
    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    "translate-z": value => ({
                        "--tw-translate-z": value,
                        transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
                    }), // this is actual CSS
                },
                { values: theme("translate"), supportsNegativeValues: true },
            );
        }),
    ],
};
// module.exports = {
//     content: [
//       "./index.html",
//       "./src/**/*.{js,ts,jsx,tsx}",
