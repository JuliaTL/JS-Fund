const path = require('path');

module.exports = {
  mode: "development",
	devtool: "inline-source-map",
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		port: 9000,
		open: true,
		compress: true
  },
  entry: "./app/index.js",
  output: {
    filename: "index.js"
  },
  resolve: {
    extensions: [".ts", ".js", ".json"]
  },
  // module: {
  //   rules: [
  //     // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
  //     { test: /\.ts$/, loader: "ts-loader" }
  //   ]
  // }
};
