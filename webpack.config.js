const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "production",
    devtool: "inline-source-map",
    entry: "./src/index.js",

    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", 'eslint-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),
    ],
};
