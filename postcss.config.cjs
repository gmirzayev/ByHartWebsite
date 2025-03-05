module.exports = {
    plugins: [
        require('autoprefixer'),
        require("@csstools/postcss-is-pseudo-class"),
        require("postcss-nesting"),
        require('cssnano'),
    ],
};