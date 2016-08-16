module.exports = {
    entry: './example/app.js',
    output: {
        path: './example',
        filename: 'example.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ],

    }
};
