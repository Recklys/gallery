var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: './src/js/app.js',
    output: {
         path: './assets',
         publicPath: '/assets/',
         filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    },
    scssLoader: {
        includePaths: [path.resolve(__dirname, './src/style')]
    },
    watch: true
};
