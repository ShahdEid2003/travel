const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    // Set mode to development for easier debugging
    mode: 'development',

    // Define the entry point of the application
    entry: './src/client/index.js',

    // Configure the output settings
    output: {
        filename: 'bundle.js', // Output bundled JavaScript file
        path: path.resolve(__dirname, 'dist'), // Set output directory
        clean: true // Clean old files in the output directory
    },

    // Configure Webpack DevServer
    devServer: {
        static: path.join(__dirname, 'dist'), // Serve static files from 'dist'
        compress: true, // Enable gzip compression
        port: 8000, // Set the development server port
    },

    // Define module rules for different file types
    module: {
        rules: [
            {
                // Process SCSS files
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                // Process CSS files
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                // Handle image files
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]', // Keep original file name
                            outputPath: 'img/', // Output images in 'img/' folder
                            publicPath: 'img/' // Set public path for images
                        }
                    }
                ],
            },
            {
                // Process HTML files
                test: /\.(html)$/,
                use: [{
                    loader: 'html-loader',
                }]
            }
        ]
    },

    // Define plugins to enhance Webpack functionality
    plugins: [
        // Generate an HTML file using a template
        new HtmlWebpackPlugin({
            template: './src/client/views/index.html',
            filename: 'index.html',
        }),

        // Extract CSS into a separate file
        new MiniCssExtractPlugin({
            filename: 'styles/main.css'
        }),

        // Clean the 'dist' folder before each build
        new CleanWebpackPlugin({           
            dry: true,        
            verbose: false,   
            cleanStaleWebpackAssets: true, // Remove old assets
            protectWebpackAssets: false,
        }),

        // Enable Service Worker for offline support
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        }), 
    ]
};
