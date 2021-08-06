const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
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
                use: [MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
                ],

            }]
        },

        plugins: [
            new MiniCssExtractPlugin({
                filename: 'styles.css'
            })
        ],

        watch: true,

        mode: 'development',
        devtool: isProduction ? 'source-map' : 'inline-cheap-module-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }

};