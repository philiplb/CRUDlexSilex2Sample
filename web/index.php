<?php

/*
 * This file is part of the CRUDlex Silex 2 sample package.
 *
 * (c) Philip Lehmann-Böhm <philip@philiplb.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

$loader = require __DIR__.'/../vendor/autoload.php';

//$loader->add('CRUDlex', __DIR__.'/../../CRUDlex/src');
$app = new Silex\Application();

$app['debug'] = true;

$app->register(new Silex\Provider\DoctrineServiceProvider(), [
    'dbs.options' => [
        'default' => [
            'host'      => '127.0.0.1',
            'dbname'    => 'crud',
            'user'      => 'root',
            'password'  => '',
            'charset'   => 'utf8',
        ]
    ],
]);
$app->register(new Silex\Provider\SessionServiceProvider());

$dataFactory = new CRUDlex\MySQLDataFactory($app['db']);
$app->register(new CRUDlex\Silex\ServiceProvider(), [
    'crud.file' => __DIR__ . '/../crud.yml',
    'crud.datafactory' => $dataFactory
]);
$app->register(new Silex\Provider\TwigServiceProvider());

//$app['crud.layout'] = 'layout.twig';
$app->boot();
$app->mount('/crud', new CRUDlex\Silex\ControllerProvider());

$app->match('/', function() use ($app) {
    return $app->redirect($app['url_generator']->generate('crudList', ['entity' => 'library']));
})->bind('homepage');

$app->run();
