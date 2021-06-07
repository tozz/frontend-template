const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, options) => {
  const devMode = options.mode !== 'production';

  return {
    entry: {
      main: './src/js/main.tsx',
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.[s]?css$/,
          exclude: /node_modules/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        inject: 'body',
      }),
    ],
    optimization: {
      minimizer: ['...', new CssMinimizerPlugin()],
    },
    devtool: devMode ? 'source-map' : undefined,
    devServer: {
      firewall: ['localhost'],
      historyApiFallback: true,
      hot: true,
      open: false,
      port: 4000,
      static: {
        directory: path.resolve(__dirname, './build'),
        publicPath: '/',
      },
    },
  };
};
