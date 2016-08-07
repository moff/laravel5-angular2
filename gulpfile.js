var elixir = require('laravel-elixir');
var webpack = require('webpack')
require('laravel-elixir-webpack-ex');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss');

    mix.webpack(
        {
            app: 'app.ts',
            vendor: 'vendor.ts'
        },
        {
            module: {
                loaders: [
                    {
                        test: /\.ts$/,
                        loader: 'ts-loader',
                        exclude: /node_modules/
                    },
                    {
                        test: /\.html$/,
                        loader: 'raw-loader'
                    },
                    {
                        test: /\.scss$/,
                        loaders: ["raw", "sass"]
                    }
                ]
            },
            plugins: [
                new webpack.optimize.CommonsChunkPlugin({
                    name: 'app',
                    filename: 'app.js',
                    minChunks: 5,
                    chunks: [
                        'app'
                    ]
                }),
                new webpack.optimize.CommonsChunkPlugin({
                    name: 'vendor',
                    filename: 'vendor.js',
                    minChunks: Infinity
                }),
                new webpack.ProvidePlugin({
                    '__decorate': 'typescript-decorate',
                    '__extends': 'typescript-extends',
                    '__param': 'typescript-param',
                    '__metadata': 'typescript-metadata'
                })
            ],
            resolve: {
                extensions: ['', '.js', '.ts']
            },
            debug: true,
            devtool: 'source-map'
        },
        'public/js',
        'resources/assets/typescript'
    );

    mix.browserSync({
        files: [
            "public/js/*",
            "public/css/*"
        ],
        proxy: "localhost:8000"
    });

});
