<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get( '/list', 'UserControllerByAdmin@list' );
Route::post('/edit/{id}','UserControllerByAdmin@edit');
Route::get('/delete/{id}','UserControllerByAdmin@delete');
Route::post('/add','UserControllerByAdmin@add');
Route::post('/login','UserControllerByAdmin@login');

Route::post('/addProduct',"UserControllerByAdmin@addProduct");
Route::get( '/productList', 'UserControllerByAdmin@productList' );
Route::post('/editProduct/{id}','UserControllerByAdmin@editProduct');
Route::get('/delete/product/{id}','UserControllerByAdmin@deleteProduct');

