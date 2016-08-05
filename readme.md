# Laravel 5 + Angular 2 boilerplate

![alt tag](http://i.imgur.com/3sileJw.png)

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](http://opensource.org/licenses/MIT)

This is a boilerplate for Laravel5 + Angular2 projects.
Webpack is used for bundling assets.

Follow installation steps below to start a new project.

## Requirements

- PHP >= 5.5.9
- [Composer](https://getcomposer.org/download/) - Package manager for PHP
- [NPM](https://npmjs.org/) - Node package manager
- [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#getting-started) ```npm install --global gulp```

## Installation

- clone repository
- run installer script via `./install` or `bash install`

> Installer is just a bash script that runs list of commands one-by-one. It is created to simplify installation process.

At this point you can start develop your app. 

Run `php artisan serve` to use development server.

Run `gulp watch` to update assets bundle on the fly.

## Database

In order to connect database set database credentials in `.env` file.

Run `php artisan migrate` to apply basic Laravel migrations.

## License

The repository code is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
