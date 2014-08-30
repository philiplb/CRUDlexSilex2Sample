<?php

$loader = require __DIR__.'/../vendor/autoload.php';

use Silex\Provider\SessionServiceProvider;
use Silex\Provider;
use Symfony\Component\HttpFoundation\Response;

$app = new Silex\Application();

$app['debug'] = true;

$app->register(new Silex\Provider\DoctrineServiceProvider(), array(
    'dbs.options' => array(
        'default' => array(
            'host'      => '127.0.0.1',
            'dbname'    => 'crud',
            'user'      => 'root',
            'password'  => '',
            'charset'   => 'utf8',
        )
    ),
));

$dataFactory = new CRUDlex\CRUDMySQLDataFactory($app['db']);
$app->register(new CRUDlex\CRUDServiceProvider(), array(
    'crud.file' => __DIR__ . '/../crud.yml',
    //'crud.stringsfile' => __DIR__ . '/../strings.yml',
    'crud.datafactory' => $dataFactory
));
$app->register(new Provider\UrlGeneratorServiceProvider());
$app->register(new Silex\Provider\TwigServiceProvider());

//$app['crud.layout'] = 'layout.twig';
$app->mount('/crud', new CRUDlex\CRUDControllerProvider());

$app->match('/', function() use ($app) {
    return $app->redirect($app['url_generator']->generate('crudList', array('entity' => 'library')));
})->bind('homepage');

$app->run();
