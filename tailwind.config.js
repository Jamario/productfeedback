/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "theme-purple": "#AD1FEA",
                "theme-blue": {
                    DEFAULT: "#4661E6",
                    light: "#62BCFA",
                    dark: "#3A4374",
                    darkest: "#4661E6",
                },
                "theme-grey": {
                    DEFAULT: "#F2F4FF",
                    light: "#F7F8FD",
                    dark: "#647196",
                },
                "theme-orange": "#F49F85",
                gradientColors: {
                    to: "#E84D70",
                    via: "#A337F6",
                    from: "#28A7ED",
                },
            },
            fontFamily: {
                sans: ["var(--font-jost)", ...fontFamily.sans],
            },
        },
    },
    plugins: [],
};
