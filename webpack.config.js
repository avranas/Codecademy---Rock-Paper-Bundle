module.exports = {
  mode: 'development',
  entry: './code/main.js',
  module: 
  {
    rules: 
    [
      {
        test: /\.txt$/i,
        type: 'asset/source'
      },
      {
        test: /\.png$/i,
        type: 'asset/resource'
      },
      {
        test: /\.css$/i,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.(woff|woff2)$/i,
        type: 'asset/resource'
      }
    ]
  }
}