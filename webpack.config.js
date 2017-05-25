var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/vector.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'vector.min.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            }
        ]
    }
}