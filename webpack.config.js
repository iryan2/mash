var webpack = require("webpack");

var config = {
    addVendor: function (name, path) {
        this.resolve.alias[name] = path;
        this.module.noParse.push(new RegExp(path));
    },
    resolve: { alias: {} },

    // Project files
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './main'
    ],

    output: {
        filename: 'bundle.js'
    },

    module: {
        noParse: [], // don't parse already minified vendor files
        loaders: [ {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel'],
        }, {
            test: /\.less$/,
            // use ! to chain loaders
            loader: 'style-loader!css-loader?sourceMap!less-loader?sourceMap=true'
        }, {
            test: /\.css$/, loader: 'style-loader!css-loader'
        }, {
            test: /\.(png|jpg)$/,
            // inline base64 URLs for <=8k images, direct URLs for the rest
            loader: 'url-loader?limit=8192'
        } ]
    },

    devServer: {
        hot: true,
        inline: true,
    },

    //devTool: 'eval',
    devtool: 'source-map',

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]

};

module.exports = config;
