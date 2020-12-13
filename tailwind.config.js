module.exports = {
    purge: ["./components/**/*.js"],
    darkMode: false,
    theme: {extend: {}},
    variants: {extend: {}},
    plugins: [
        require("@tailwindcss/typography")
    ],
};
