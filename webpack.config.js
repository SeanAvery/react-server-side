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
      ].concat(commonLoaders)
    }
  },
  {
    entry: './src/app/browser.js',
    output: {
      path: './dist/assets',
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel'
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  }
]
