const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.tsx'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/i,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js'
    ]
  },
  devServer: {
    static: './dist'
  },
  optimization: {
    runtimeChunk: 'single'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
      chunkFilename: 'styles.css'
    }),
    new HtmlWebpackPlugin({
      title: 'Super Bubble Stacker',
      template: './src/index.html',
      filename: './index.html'
    })
  ]
}
