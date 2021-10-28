const path = require("path");

const CopyPlugin = require("copy-webpack-plugin");
const ZipPlugin = require("zip-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const pkg = require("./package.json");
const manifest = require("./public/manifest.json");

module.exports = (env, { mode }) => ({
    mode,
    entry: {
        index: path.join(__dirname, "src/index.js"),
        background: path.join(__dirname, "src/background.js"),
        "i18n-contents": path.join(__dirname, "src/i18n-contents.js"),
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: "public",
                    to: ".",
                },
                {
                    from: "src/index.css",
                    to: ".",
                },
            ],
        }),
        new ZipPlugin({
            path: "../zip", // Relative to webpack output path
            filename: `${pkg.name}-v${manifest.version}.zip`,
        }),
    ],
});
