const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'mousefollow.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
