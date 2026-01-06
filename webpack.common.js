const path = require('path');

module.exports = {
  entry: {
    app: './js/pronoun.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/pronoun.js',
  },
};
