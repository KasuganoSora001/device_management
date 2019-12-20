const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        // 正则匹配以.css结尾的文件
        test: /\.css$/,
        // css-loader：加载css文件
        // style-loader：添加样式到DOM中
        // 使用多个loader时，加载从右往左
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}