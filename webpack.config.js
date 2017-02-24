(function() {
    var path = require('path');
    var webpack = require('webpack');

    var config = {
        context: __dirname + '/app', // `__dirname` is root of project and `src` is source
        entry: {
            app: './index.jsx',
        },
        output: {
            path: __dirname + '/dist', // `dist` is the destination
            filename: '[name].bundle.js',
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
                   use: [
                       'style-loader',
                       'css-loader',
                       'sass-loader',
                   ]
               },
               {
                   test: /\.json$/,
                   loader: "json-loader"  //JSON loader
               }
           ]
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'commons',
                filename: 'commons.js',
                minChunks: 2,
            })
        ],
        devServer: {
            open: true, // to open the local server in browser
            contentBase: path.resolve(__dirname, '/index.html'),
        },
        devtool: "eval-source-map", // Default development sourcemap
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
