const path = require('path')

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: 'webpack-numbers.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'webpackNumbers',
        libraryTarget: 'umd',
    },
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        }
    }
}
