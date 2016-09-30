# Laravel 5 + Angular 2 boilerplate

![alt tag](http://i.imgur.com/3sileJw.png)

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](http://opensource.org/licenses/MIT)

This is a boilerplate for Laravel5 + Angular2 projects.
Webpack is used for bundling assets.

## Versions
- Laravel 5.3.9
- Angular 2.0.0
- Webpack 1.13.1


## Requirements

- PHP >= 5.6.4
- [Composer](https://getcomposer.org/download/) - Package manager for PHP
- [NPM](https://npmjs.org/) - Node package manager
- [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#getting-started)


## Installation

- clone repository
- run installer script via `./install` or `bash install`

> Installer script is a bash script that runs list of commands one-by-one. It is created to simplify installation process.

At this point you can start developing your app.


## Development

Run development script via `./develop` or `bash develop`.

> Development script is a bash script that runs development php server and watches for changes with Gulp and Browsersync.


## Database

Set proper credentials in `.env` file in order to use database.

Run migrations via `php artisan migrate`.


## Production

Run `gulp --production` to merge and minify: 

- JavaScript-files into `all.js` file.
- CSS-files into `all.css` file.

> Check `resources/views/welcome.blade.php` to see how to use those according to active environment. Don't forget to run `php artisan config:cache` when change environment in `.env` file.


## License

The repository code is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
