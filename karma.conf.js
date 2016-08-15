var webpack = require('webpack');

module.exports = function(config) {
    config.set({
        browsers: [ 'Chrome' ], //run in Chrome
        singleRun: true, //just run once by default
        frameworks:[ 'mocha', 'chai' ],
        files: [
            './src/index.spec.js' //just load this file
        ],
        plugins: [
            'karma-chrome-launcher',
            'karma-chai',
            'karma-mocha',
            'karma-sourcemap-loader',
            'karma-webpack',
            'karma-coverage',
            'karma-mocha-reporter'
        ],
        preprocessors: {
            './src/index.spec.js': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
        },
        reporters: [ 'mocha', 'coverage' ], //report results in this format
        webpack: { //kind of a copy of your webpack config
            devtool: 'inline-source-map', //just do inline source maps instead of the default
            module: {
                loaders: [
                    {
                        test: /\.jsx?$/,
                        loaders: ['react-hot', 'babel-loader']
                    },
                    {
                        test: /\.scss$/,
                        loaders: ['style', 'css', 'sass']
                    }
                ],
                postLoaders: [{ //delays coverage til after tests are run, fixing transpiled source coverage error
                    test: /\.js$/,
                    exclude: /(node_modules|\.spec\.jsx?)/,
                    loader: 'istanbul-instrumenter'
                }]
            }
        },
        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        },
        coverageReporter: {
            dir: 'bin/coverage/',
            reporters: [
                {type: 'html', subdir: 'html'}
            ]
        }
    });
};
