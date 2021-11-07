const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    devtool: false,
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'dist'),
        //publicPath: "/dist"
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),
    ],
    module:{
        rules:[
            {
                test:/\.(s[ca]ss)$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    //'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.m?js$/,
                //exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/env',
                                {
                                    loose: true,
                                    modules: false,
                                    forceAllTransforms:true,
                                }
                            ],
                        ]
                    }
                }
            }
        ]


    }

};