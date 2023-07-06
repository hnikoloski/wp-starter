// webpack.mix.js

const mix = require("laravel-mix");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
mix
    .options({
        processCssUrls: false,
    })
    .js('src/app.js', 'js')
    .sass('src/app.scss', 'css')
    .setPublicPath('dist')
    // Example of copying Fonts to dist folder. Comment out if you don't need this or delete it.
    .copyDirectory('src/sass/fonts/roboto', 'dist/css/fonts')
    .sourceMaps(true, 'source-map')

    .disableNotifications();

mix.webpackConfig({
    plugins: [
        new CompressionWebpackPlugin({
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$|\.svg$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ]
});