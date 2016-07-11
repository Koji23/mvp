module.exports = {
  entry: './components/main.js',
  output: {
    path: './',
    filename: './index.js'
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