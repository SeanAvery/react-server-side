var webpack= require('webpack');

var commonLoaders = [
  {
    test: /\.json$/,
    loader: 'json-loader'
  }
];

module exports = [
  {
    entry: './src/server.js',
    output: {
      path: './dist',
      filename: 'server.js',
      publicPath: '/'
    },
    module: {
      loaders: [
        test: /\.js$/,
        loader: 'babel'
      ]
    }
  }
]
