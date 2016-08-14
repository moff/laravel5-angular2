<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/


// put all your REST routes inside api-group
Route::group(['prefix' => 'api'], function() {
    Route::resource('employees', 'EmployeesController');
});


// this route is for Angular and it should be placed after all other back end routes
// just keep it at the bottom
Route::get('/{any}', function ($any) {
    return view('welcome');
})->where('any', '.*');
