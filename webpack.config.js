const path = require("path")
const uglifyPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
  entry:"./src/index.js",
  output:path.resolve(__dirname,"dist"),
  module:{
    rules:[
      {
        test:/\.jsx?/,
        use:"babel-loader"，


      }
    ]
  },
  plugins:[
    new uglifyPlugin(),
  ]
}
