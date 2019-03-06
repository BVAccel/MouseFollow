const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'mousefollow.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
