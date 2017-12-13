const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        port: 8080
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new ManifestPlugin()
    ],
});
