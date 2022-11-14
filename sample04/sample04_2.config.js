const path = require("path");

module.exports = {
    entry: "./src/sample04_2.js",
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            }]
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
        }]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "sample04_2.bundle.js"
    },
    devServer: {
        publicPath: "/dist/"
    }
};