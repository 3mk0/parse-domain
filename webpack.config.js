var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        "parseDomain.min": "./lib/parseDomain.js",
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'ParseDomain'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.join(__dirname, 'lib'),
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    "presets": [
                        ["es2015", {
                            "modules": false
                        }]
                    ],
                    "plugins": ["babel-plugin-transform-class-properties"]
                }
            }]
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: false
        })
    ]
};