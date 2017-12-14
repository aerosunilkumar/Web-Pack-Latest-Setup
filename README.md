//install package global
npm install --global webpack
//install Package for development
npm install --save-dev PackageName
//install package for solution
npm install --save PackageName to download
//webpack build
npx webpack src/index.js dist/bundle.js
//webpack run 
npm run build
//css loader
npm install --save-dev style-loader css-loader
//Managing content of html file
npm install --save-dev html-webpack-plugin
//Cleaning Dist folder
npm install clean-webpack-plugin --save-dev
//manifest
npm install --save-dev webpack-manifest-plugin
//helps to debug the error detailed with file name by adding the following line to webpack.config.js
devtool: 'inline-source-map',
//watch mode of webpack by adding the folling line to script of package file
"watch": "webpack --watch",
//start in watch mode
npm run watch
//adding devserver
npm install --save-dev webpack-dev-server
//dev server setup adding the following line to webpack.config.js
devServer: {
     contentBase: './dist',
     port:8080
}
//dev server setup in package.json file
//This tells webpack-dev-server to serve the files from the dist directory on localhost:8080
"start": "webpack-dev-server --open"
//start the dev server with 8080 port
npm start
//minification
npm install --save-dev uglifyjs-webpack-plugin
//merge 2 or more web pack configs
npm install --save-dev webpack-merge
//common js which will taking care of code dublication
const webpack = require('webpack');
new webpack.optimize.CommonsChunkPlugin({
            name: 'common' // Specify the common bundle's name.
        })
//Dynamic Imports
chunkFilename: '[name].bundle.js',
//transpiler to convert 
npm install --save-dev babel-loader babel-core 
//babel es6 es 2015 
npm install --save-dev babel-cli babel-preset-es2015
//adding .babelrc file and the following json to install
{
  "presets": ["es2015"]
}
//babel-preset-react
npm install --save-dev babel-preset-react
//adding react to presers in .babelrc file
{
  "presets": ["es2015","react"]
}
//Babel dynamic lazy loading enable 
npm install --save-dev babel-plugin-syntax-dynamic-import
//adding the follwoing code to .babelrc file
"plugins": ["syntax-dynamic-import"]
//Adding react react-dom --https://reacttraining.com/react-router/web/guides/philosophy
npm install --save react react-dom
//react-hot-loader
npm install --save react-hot-loader