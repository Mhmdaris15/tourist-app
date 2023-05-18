const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                vintage: {
                    50: "#00235B", // dark blue
                    100: "#E21818", // red
                    200: "#FFDD83", // light yellow
                    300: "#98DFD6", // light blue
                },
            },
        },
    },

    plugins: [
        require("@tailwindcss/forms"),
        require("daisyui"),
        require("flowbite/plugin"),
    ],
};
