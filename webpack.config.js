(function() {
    "use strict"

    var path = require('path');
    const webpack = require('webpack');
    var ExtractTextPlugin = require('extract-text-webpack-plugin');

    var config = {
        context: __dirname + '/app', // `__dirname` is root of project and `src` is source
        entry: [
            // activate HMR for React
            'react-hot-loader/patch',

            // bundle the client for webpack-dev-server
            // and connect to the provided endpoint
            'webpack-dev-server/client?http://localhost:8080',

            // bundle the client for hot reloading
            // only- means to only hot reload for successful updates
            'webpack/hot/only-dev-server',

            // the entry point of our app
            './index.jsx'
        ],
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'), // `dist` is the destination
            publicPath: '/'
        },
        module: {
          rules: [
              {
                  test: /\.js?x$/, //Check for all js and jsx files
                  use: [{
                      loader: 'babel-loader',
                      options: { presets: ['es2015', 'react'] }
                  }]
              },
              {
                   test: /\.(sass|scss)$/, //Check for sass or scss file names
                   use: ExtractTextPlugin.extract({
                       use: [
                           'style-loader',
                           'css-loader',
                           'sass-loader',
                       ]
                   })
               },
               {
                   test: /\.json$/,
                   loader: "json-loader"  //JSON loader
               }
           ]
        },
        devServer: {
            open: true, // to open the local server in browser
            hot: true,

            // match the output path
            contentBase: path.resolve(__dirname, 'dist'),

            // match the output `publicPath`
            publicPath: '/'
        },
        devtool: "eval-source-map", // Default development sourcemap
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'commons',
                filename: 'commons.js',
                minChunks: 2,
            }),
            new ExtractTextPlugin('styles.css'),

            // enable HMR globally
            new webpack.HotModuleReplacementPlugin(),

            // prints more readable module names in the browser console on HMR updates
            new webpack.NamedModulesPlugin(),
        ],
        resolve: {
            extensions: ['.js', '.jsx']
        }
    };

    if (process.env.NODE_ENV === "production") {
        config.devtool = "source-map";

        // Can do more here
        // JSUglify plugin
        // Offline plugin
        // Bundle styles seperatly using plugins etc,
    }


    module.exports = config;
})();
