const path = require('path')

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader', // must come before css-loader
                    'css-loader'
                ]
            }
        ]
    }
}
