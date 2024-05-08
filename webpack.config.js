const path = require("path");
const { babel } = require("babel-loader");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js", // Name of the bundled file
    path: path.resolve(__dirname, "dist"), // Output directory (replace with your desired path)
  },
  module: {
    rules: [
      {
        test: /\.jsx $/, // This rule matches all JavaScript files
        exclude: /node_modules/, // Excludes files in the node_modules folder
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // Add presets for JSX and environment
          },
        },
      },
    ],
  },
};
