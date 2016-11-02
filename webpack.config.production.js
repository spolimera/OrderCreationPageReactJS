var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var bundleName = 'OrderCreationPage';

module.exports = {
    debug: false,
    devtool: 'cheap-module-source-map',
    entry: './src/App',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: bundleName + '.resource',
        path: 'dist/staticresources/',
        publicPath: '/staticresources/'
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: './build/package.xml',
                to: '../package.xml'
            },
            {
                from: './build/template.resource-meta.xml',
                to: bundleName + '.resource-meta.xml'
            }
        ]),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin()
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
