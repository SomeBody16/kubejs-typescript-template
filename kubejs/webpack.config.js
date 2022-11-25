//webpack.config.js
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const kubejs = path.resolve(__dirname, '../minecraft/kubejs')

module.exports = [
    {
        mode: 'development',
        devtool: 'inline-source-map',
        entry: {
            main: './kubejs/server/index.ts',
        },
        output: {
            path: path.resolve(kubejs, 'server_scripts'),
            filename: 'some-bundle.js',
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /script/,
                },
            ],
        },
    },
    {
        mode: 'development',
        devtool: 'inline-source-map',
        entry: {
            main: './kubejs/client/index.ts',
        },
        output: {
            path: path.resolve(kubejs, 'client_scripts'),
            filename: 'some-bundle.js',
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /script/,
                },
            ],
        },
    },
    {
        mode: 'development',
        devtool: 'inline-source-map',
        entry: {
            main: './kubejs/startup/index.ts',
        },
        output: {
            path: path.resolve(kubejs, 'startup_scripts'),
            filename: 'some-bundle.js',
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /script/,
                },
            ],
        },
    },
]
