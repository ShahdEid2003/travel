const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Webpack configuration
module.exports = {
  // Define the entry point for the application
  entry: './src/client/js/index.js',

  // Configure the output settings
  output: {
    filename: 'bundle.js', // Name of the output file
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true, // Automatically clean the output directory before each build
  },

  // Define module rules for different file types
  module: {
    rules: [
      {
        // Transpile JavaScript (ES6+) to ES5 using Babel
        test: /\.js$/,
        exclude: /node_modules/, // Exclude third-party libraries
        use: {
          loader: 'babel-loader',
        },
      },
      {
        // Process SCSS files and compile them into CSS
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        // Process regular CSS files
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  // Define plugins to enhance Webpack functionality
  plugins: [
    // Generate an HTML file from the template
    new HtmlWebpackPlugin({
      template: './src/views/index.html', // Path to the HTML template
    }),
    
    // Clean the 'dist' folder before each build
    new CleanWebpackPlugin(),

    // Enable Service Worker for offline support and caching
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],

  // Configure Webpack DevServer for live reloading
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // Serve content from 'dist' folder
    compress: true, // Enable gzip compression
    port: 9000, // Set the development server port
  },
};
