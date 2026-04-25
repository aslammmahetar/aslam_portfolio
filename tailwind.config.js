/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: "var(--bg)",
                text: "var(--text)",
                card: "var(--card)",
                border: "var(--border)",
                primary: "var(--primary)",
            },
            borderRadius: {
                xl: "1rem",
                "2xl": "1.5rem",
            },
            boxShadow: {
                soft: "0 10px 30px rgba(0,0,0,0.1)",
            },
        },
    },
    plugins: [],
};

export default config;