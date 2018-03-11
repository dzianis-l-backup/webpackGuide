const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        polyfills: './src/polyfills.js',
        index: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: require.resolve('index.js'),
                use: 'imports-loader?this=>window'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            /** courtesy of _.join treeshaking occurs*/
            join: ['lodash', 'join']
        })
    ]
}
