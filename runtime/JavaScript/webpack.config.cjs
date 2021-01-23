const path = require('path');

module.exports = {
    mode: "production",
    entry: './src/antlr4/index.js',
    output: {
        globalObject: 'this',
        filename: 'antlr4.js',
        path: path.resolve(__dirname, 'dist')
    },
    node: {
        module: "empty",
        net: "empty",
        fs: "empty"
    },
    target: "web",
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        }]
    },
    devtool: "source-map"
};
