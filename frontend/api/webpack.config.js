let path = require('path')

let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../../user-service/src/main/resources/static/js'),
//        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'distr/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
//                exclude: '/node_modules'
            },
            {
                parser: {
                    amd: false
                }
            }
        ]
    }
}

module.exports = (env, options) => {
    let production = options.mod === 'prodactions';

    conf.devtool = production
                    ? false //'source-map'
                    : 'eval-sourcemap';
    return conf;
}

