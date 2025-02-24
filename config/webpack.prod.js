const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    // Set mode to production for optimized and minified output
    mode: 'production',

    // Define the entry point for the application
    entry: './src/client/index.js',

    // Configure the output settings
    output: {
        filename: 'bundle.js', // Output bundled JavaScript file
        path: path.resolve(__dirname, 'dist'), // Set the output directory
        clean: true, // Remove old build files before generating new ones
        libraryTarget: 'var', // Export the library as a global variable
        library: 'Client' // Name of the global library variable
    },

    // Define module rules for different file types
    module: {
        rules: [
            {
                // Transpile modern JavaScript (ES6+) to ES5 using Babel
                test: /\.js$/,
                exclude: /node_modules/, // Exclude dependencies
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'], // Use preset for modern JavaScript
                    },
                }
            },
            {
                // Process SCSS files and compile them into CSS
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                // Process regular CSS files
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                // Handle image files (PNG, SVG, JPG, GIF)
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]', // Keep original file name
                            outputPath: 'img/', // Output images in the 'img/' folder
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

    // Optimize and minimize CSS files
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(), // Minify CSS for better performance
        ],
        minimize: true, // Enable minimization
    },

    // Define plugins to enhance Webpack functionality
    plugins: [
        // Generate an HTML file from the template
        new HtmlWebpackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html"
        }),

        // Clean the 'dist' folder before each build
        new CleanWebpackPlugin(),

        // Enable Service Worker for offline support and caching
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
        })
    ]
};
