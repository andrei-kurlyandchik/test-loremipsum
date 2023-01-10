const path = require(`path`);

module.exports = {
  entry: {
    main: `./src/js/index.js`,
  },


  output: {
    filename: `bundle.js`,
    chunkFilename: `[name].js`,
    publicPath: `/`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`
        },
      }
    ]
  },

  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "%modules%": path.resolve(__dirname, `src/blocks`)
    }
  }
};
