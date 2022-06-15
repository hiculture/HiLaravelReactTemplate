const mix = require('laravel-mix');
const webpackConfig = require('./webpack.config')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js")
    .postCss("resources/css/components.css", "public/css",)
    .postCss("resources/css/tailwind.css", "public/css", [
        require("tailwindcss"),
    ])
    .less('resources/css/app.less', 'public/css', {
        lessOptions:
            {
                javascriptEnabled: true
            }
    })
    .copy('resources/images/favicon.png', 'public/images/favicon.png')
    .react()
    .webpackConfig(webpackConfig)
    .version()
    .sourceMaps();
