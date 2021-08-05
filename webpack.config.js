const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },

    resolve: {
        alias: {
            '@Components': path.resolve(__dirname, 'src/components/'),
            '@Pages': path.resolve(__dirname, 'src/pages/')
        }
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-class-properties',]
                }
            }
        }, {
            test: /\.s?css/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },

    watch: true,
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};