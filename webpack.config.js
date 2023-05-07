const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: "production",
    entry: {
        index: "./src/index.ts",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: "css-loader",
                exclude: /node_modules/,
            },
            {
                test: /\/.tsx?$/i,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [
            ".ts",
            ".tsx",
            ".js",
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
