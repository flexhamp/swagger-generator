let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../../user-service/src/main/resources/static/dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true,
        port: 3001,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
//                exclude: '/node_modules'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
//                    fallback: 'style-loader',
                    use: 'css-loader'
                })
//                use: ['style-loader', 'css-loader']
            },
            {
                parser: {
                    amd: false
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
};

module.exports = (env, options) => {
    let production = options.mod === 'prodactions';

    conf.devtool = production
                    ? false //'source-map'
                    : 'eval-sourcemap';
    return conf;
}

