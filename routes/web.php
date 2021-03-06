<?php
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/login', 'LoginController@index');
Route::post('/login', 'LoginController@index')->name('login');

Route::get('/signup', 'SignupController@index');
Route::post('/signup', 'SignupController@index')->name('signup');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
