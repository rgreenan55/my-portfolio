const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            favicon: './src/assets/icon/favicon.ico',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(pdf|gif|png|jpe?g|svg|ico)$/,
                use: ['file-loader'],
            }
        ],
    },
    devServer: {
        port: 3000,
        open: true,
        historyApiFallback: true,   // Allows React-Router to render pages properly
    },
};