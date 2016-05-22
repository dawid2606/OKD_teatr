angular.module('Theatre.Routes', [
        'ui.router',
        'ngMaterial',

        'Theatre.Controllers.MainCtrl',
        'Theatre.Controllers.LoginCtrl',
        'Theatre.Controllers.RegisterCtrl',
        'Theatre.Controllers.ArtsCtrl',
        'Theatre.Controllers.ActorsCtrl',
        'Theatre.Controllers.HomeCtrl',
        'Theatre.Controllers.ProfilCtrl',
    ])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        '$mdDateLocaleProvider',
        '$httpProvider',
        function($stateProvider, $urlRouterProvider, $mdDateLocaleProvider, $httpProvider) {
            $stateProvider
                .state('main', {
                    url: '/main',
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl',
                })
                .state('login', {
                    url: '/login',
                    templateUrl: 'views/login.html',
                    parent: 'main',
                    controller: 'LoginCtrl',
                })
                .state('register', {
                    url: '/register',
                    templateUrl: 'views/register.html',
                    parent: 'main',
                    controller: 'RegisterCtrl',
                })
                .state('arts', {
                    url: '/arts',
                    templateUrl: 'views/arts.html',
                    parent: 'main',
                    controller: 'ArtsCtrl',
                })
                .state('actors', {
                    url: '/actors',
                    templateUrl: 'views/actors.html',
                    parent: 'main',
                    controller: 'ActorsCtrl',
                })
                .state('home', {
                    url: '/home',
                    templateUrl: 'views/home.html',
                    parent: 'main',
                    controller: 'HomeCtrl',
                })
                .state('profil', {
                    url: '/profil',
                    templateUrl: 'views/profil.html',
                    parent: 'main',
                    controller: 'ProfilCtrl',
                })

            $urlRouterProvider.otherwise('/main');



        }
    ]).run(function($state, $rootScope, $localStorage) {
        $rootScope.$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams) {
                $rootScope.currentState = toState.name;

                if ($localStorage.user) {
                    $rootScope.logged = true;
                } else if (toState.name != 'login' && toState.name != 'register' && toState.name != 'actors' && toState.name != 'arts' && toState.name != 'home') {
                    $rootScope.logged = false;
                    event.preventDefault();
                    $state.go('home');
                }
            })


    });
