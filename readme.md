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
- run following commands in project's root folder:
	- `composer install`
	- `cp .env.example .env`
	- `php artisan key:generate`
	- `chmod -R 777 storage`
	- `chmod -R 777 bootstrap/cache`
	- `npm install`
	- `gulp`

At this point you can start develop your app. 

Run `gulp watch` to update assets bundle on the fly.

## Database

In order to connect database set database credentials in `.env` file.

Run `php artisan migrate` to apply basic Laravel migrations.

## License

The repository code is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
