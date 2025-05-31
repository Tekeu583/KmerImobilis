<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');
Route::get('/inscription', function () {
    return Inertia::render('inscription');
})->name('inscription');

Route::get('/a-propos', function () {
    return Inertia::render('A Propos');
})->name('a-propos');

Route::get('/contact', function () {
    return Inertia::render('contact'); 
});


Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
