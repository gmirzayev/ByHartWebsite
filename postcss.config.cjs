module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require("@csstools/postcss-is-pseudo-class"),
        require("postcss-nesting"),
        require('cssnano'),
    ],
};