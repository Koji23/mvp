module.exports = {
  entry: './client/components/main.js',
  output: {
    path: './',
    filename: './client/index.js'
  },
  devserver: {
    inline: true,
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}