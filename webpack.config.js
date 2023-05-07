const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: {
        index: "./src/index.js",
        print: "./src/print.js",
    },
    mode: "production",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css/i,
                use: ["css-loader"],
            },
        ],
    },
    // devtool: "inline-source-map", // remove in production!
    devServer: {
        static: "./dist",
    },
    optimization: {
        runtimeChunk: "single",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Super Bubble Stacker",
        }),
    ],
}
