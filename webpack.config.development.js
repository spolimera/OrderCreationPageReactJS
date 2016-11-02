var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/App'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react'],
                include: path.join(__dirname, 'src')
            },
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                presets:[ 'es2015', 'react', 'stage-2' ]
              }
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    }
};
