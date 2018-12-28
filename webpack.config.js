const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    library: 'Tabby',
    libraryTarget: 'umd',
    filename: 'tabby.js',
    path: path.resolve(__dirname, './dist'),
  },
};
