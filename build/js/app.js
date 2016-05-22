(function () { 'use strict';
angular.module('Theatre', [
  'Theatre.Routes',


]);
;angular.module('Theatre.Routes', [
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
;angular.module('Theatre.Services.AuthorizationSrvc', [
    'ngStorage'
])

.service('AuthorizationSrvc', [
    '$http',
    '$localStorage',
    '$state',
    '$rootScope',
    '$window',
    function($http, $localStorage, $state, $rootScope, $window) {

        var user = null;

        if ($localStorage.user) {
            user = $localStorage.user;
        };

        this.isLogged = function(){
            if (!$localStorage.user) {
                $state.go('login');
            }
        };
        this.login = function(user){
            // var url = '';
            // var obj={
            //     'email': user.email,
            //     'password': user.password,
            // };
            // var req={
            //     'method': 'POST',
            //     'url': url,
            //     'data': obj,
            //     'headers':{
            //         'Content-Type':'text/plain',
            //     }
            // };
            // return $http(req);
        };
        this.successLogin = function(user){
            $localStorage.user = user;
            $rootScope.logged = true;
            $state.go('home');

        };
        this.logOut = function(){
            $localStorage.user = null;
            $rootScope.logged = false;
            $state.go('login');
        };
        this.getUsers = function(){
            var user= $localStorage.user;
            var url= 'http://notatka.52prawdy.pl/restAPI/users/';
            var obj={
                'token': user.token,
                'user_id': user.id,
            };
            var req= {
                'method': 'POST',
                'data': obj,
                'url': url,
                'headers':{
                    'Content-Type': 'text/plain',
                }
            };            
            return $http(req);
        };
        this.register = function(user){
            var url='http://notatka.52prawdy.pl/restAPI/register/';
            var obj={
                'name': user.surname,
                'lastname': user.name,
                'email': user.email,
                'password': user.password1,
            };
            var req={
                'method': 'POST',
                'url': url,
                'data': obj,
                'headers':{
                    'Content-Type':'text/plain',
                },
            };
            return $http(req);

        }




}]);
;angular
    .module('Theatre.Controllers.ActorsCtrl', [
        'ui.router',
    ])
    .controller('ActorsCtrl', [
        '$scope',
        '$state',
        '$rootScope',
        'AuthorizationSrvc',
        function($scope, $state, $rootScope, AuthorizationSrvc) {
           
           $scope.actors = [{
            'id' : '1',
            'name' : 'Lorem',
            'lastname' : 'Ipsum',
            'photoUrl' : 'img/Cezary-Pazura-350x350.jpg',
            'description' : 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat',

           },{
            'id' : '1',
            'name' : 'Lorem',
            'lastname' : 'Ipsum',
            'photoUrl' : 'img/Cezary-Pazura-350x350.jpg',
            'description' : 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat',

           },{
            'id' : '1',
            'name' : 'Lorem',
            'lastname' : 'Ipsum',
            'photoUrl' : 'img/Cezary-Pazura-350x350.jpg',
            'description' : 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat',

           },{
            'id' : '1',
            'name' : 'Lorem',
            'lastname' : 'Ipsum',
            'photoUrl' : 'img/Cezary-Pazura-350x350.jpg',
            'description' : 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat',

           },{
            'id' : '1',
            'name' : 'Lorem',
            'lastname' : 'Ipsum',
            'photoUrl' : 'img/Cezary-Pazura-350x350.jpg',
            'description' : 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat',

           },{
            'id' : '1',
            'name' : 'Lorem',
            'lastname' : 'Ipsum',
            'photoUrl' : 'img/Cezary-Pazura-350x350.jpg',
            'description' : 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat',

           },{
            'id' : '1',
            'name' : 'Lorem',
            'lastname' : 'Ipsum',
            'photoUrl' : 'img/Cezary-Pazura-350x350.jpg',
            'description' : 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat',

           },{
            'id' : '1',
            'name' : 'Lorem',
            'lastname' : 'Ipsum',
            'photoUrl' : 'img/Cezary-Pazura-350x350.jpg',
            'description' : 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat',

           },{
            'id' : '1',
            'name' : 'Lorem',
            'lastname' : 'Ipsum',
            'photoUrl' : 'img/Cezary-Pazura-350x350.jpg',
            'description' : 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat',

           },{
            'id' : '1',
            'name' : 'Lorem',
            'lastname' : 'Ipsum',
            'photoUrl' : 'img/Cezary-Pazura-350x350.jpg',
            'description' : 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat',

           },];

        }
    ]);
;angular
    .module('Theatre.Controllers.ArtsCtrl', [
        'ui.router',
    ])
    .controller('ArtsCtrl', [
        '$scope',
        '$state',
        '$rootScope',
        'AuthorizationSrvc',
        '$timeout',
        function($scope, $state, $rootScope, AuthorizationSrvc, $timeout) {

            $scope.arts = [{
                'id': '1',
                'name': 'Pan Tadeusz',
                'actors': [{
                    'id': '1',
                    'name': 'Jan Testowy'
                }, {
                    'id': '2',
                    'name': 'Jan Testowy'
                }, {
                    'id': '3',
                    'name': 'Jan Testowy'
                }],
                'director': 'Lorem Ipsum',
                'pictureUrl': 'img/zajazd.jpg',
                'description': 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat  '
            }, {
                'id': '1',
                'name': 'Pan Tadeusz',
                'actors': [{
                    'id': '1',
                    'name': 'Jan Testowy'
                }, {
                    'id': '2',
                    'name': 'Jan Testowy'
                }, {
                    'id': '3',
                    'name': 'Jan Testowy'
                }],
                'director': 'Lorem Ipsum',
                'pictureUrl': 'img/zajazd.jpg',
                'description': 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat  '
            }, {
                'id': '1',
                'name': 'Pan Tadeusz',
                'actors': [{
                    'id': '1',
                    'name': 'Jan Testowy'
                }, {
                    'id': '2',
                    'name': 'Jan Testowy'
                }, {
                    'id': '3',
                    'name': 'Jan Testowy'
                }],
                'director': 'Lorem Ipsum',
                'pictureUrl': 'img/zajazd.jpg',
                'description': 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat  '
            }, {
                'id': '1',
                'name': 'Pan Tadeusz',
                'actors': [{
                    'id': '1',
                    'name': 'Jan Testowy'
                }, {
                    'id': '2',
                    'name': 'Jan Testowy'
                }, {
                    'id': '3',
                    'name': 'Jan Testowy'
                }],
                'director': 'Lorem Ipsum',
                'pictureUrl': 'img/zajazd.jpg',
                'description': 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat  '
            }, {
                'id': '1',
                'name': 'Pan Tadeusz',
                'actors': [{
                    'id': '1',
                    'name': 'Jan Testowy'
                }, {
                    'id': '2',
                    'name': 'Jan Testowy'
                }, {
                    'id': '3',
                    'name': 'Jan Testowy'
                }],
                'director': 'Lorem Ipsum',
                'pictureUrl': 'img/zajazd.jpg',
                'description': 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat  '
            }, {
                'id': '1',
                'name': 'Pan Tadeusz',
                'actors': [{
                    'id': '1',
                    'name': 'Jan Testowy'
                }, {
                    'id': '2',
                    'name': 'Jan Testowy'
                }, {
                    'id': '3',
                    'name': 'Jan Testowy'
                }],
                'director': 'Lorem Ipsum',
                'pictureUrl': 'img/zajazd.jpg',
                'description': 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat  '
            }, {
                'id': '1',
                'name': 'Pan Tadeusz',
                'actors': [{
                    'id': '1',
                    'name': 'Jan Testowy'
                }, {
                    'id': '2',
                    'name': 'Jan Testowy'
                }, {
                    'id': '3',
                    'name': 'Jan Testowy'
                }],
                'director': 'Lorem Ipsum',
                'pictureUrl': 'img/zajazd.jpg',
                'description': 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat  '
            }, {
                'id': '1',
                'name': 'Pan Tadeusz',
                'actors': [{
                    'id': '1',
                    'name': 'Jan Testowy'
                }, {
                    'id': '2',
                    'name': 'Jan Testowy'
                }, {
                    'id': '3',
                    'name': 'Jan Testowy'
                }],
                'director': 'Lorem Ipsum',
                'pictureUrl': 'img/zajazd.jpg',
                'description': 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat  '
            }, ];

            $scope.selectedArt = null;

            $scope.selectArt = function(index) {
                if (!$scope.selectedArt) {
                    $scope.selectedArt = -1;
                    $timeout(function() {
                        $scope.selectedArt = index;
                    }, 700);
                }
            };

            $scope.close = function() {
                if ($scope.selectedArt) {
                    $scope.selectedArt = -1;
                    $timeout(function() {
                        $scope.selectedArt = null;
                    }, 700);
                }
            };

            $scope.buyTicket = function(id){
                
            };



        }
    ]);
;angular
    .module('Theatre.Controllers.HomeCtrl', [
        'ui.router',
    ])
    .controller('HomeCtrl', [
        '$scope',
        '$state',
        '$rootScope',
        'AuthorizationSrvc',
        '$timeout',
        function($scope, $state, $rootScope, AuthorizationSrvc, $timeout) {

            $scope.init = function() {};
            $scope.init();

            $scope.pic = {
                'showed': 0
            };

            $scope.sliderItems = [{
                'id': '1',
                'url': 'maxresdefault.jpg',
            }, {
                'id': '1',
                'url': '1272694_teatr-narodowy--praga.jpg',
            }, {
                'id': '1',
                'url': '1626655_teatr-polski--bielskobiala.jpg',
            }, {
                'id': '1',
                'url': 'Teatr-Jaracza-Olsztyn-003a-1280x720.jpg',
            }, ];

            var order = function() {
                $timeout(function() {
                    if ($scope.pic.showed != ($scope.sliderItems.length - 1)) {
                        $scope.pic.showed++;
                    } else {
                        $scope.pic.showed = 0;
                    }
                    order();
                }, 5000);
            };
            order();

            $scope.left = function() {
                if ($scope.pic.showed != 0) {
                    $scope.pic.showed--;
                } else {
                    $scope.pic.showed = $scope.sliderItems.length - 1;
                }
            };

            $scope.right = function() {
                if ($scope.pic.showed != $scope.sliderItems.length - 1) {
                    $scope.pic.showed++;
                } else {
                    $scope.pic.showed = 0;
                }
            };
        }
    ]);
;angular
    .module('Theatre.Controllers.LoginCtrl', [
        'ui.router',
    ])
    .controller('LoginCtrl', [
        '$scope',
        '$state',
        '$rootScope',
        'AuthorizationSrvc',
        function($scope, $state, $rootScope, AuthorizationSrvc) {
            $scope.loginVariables = {
                'email': '',
                'password': ''
            };

            var validateEmail = function(email) {
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return re.test(email);
                };

            $scope.validator = function() {
                if ($scope.loginVariables.email && $scope.loginVariables.password.length > 3 && $scope.loginVariables.password.length < 30 && validateEmail($scope.loginVariables.email)) {
                    return false;
                } else {
                    return true;
                }
            };
            $scope.login = function() {
                // AuthorizationSrvc.login($scope.loginVariables).then(function(data) {
                //     AuthorizationSrvc.successLogin(data.data);

                // }, function(data) {


                // })
                AuthorizationSrvc.successLogin($scope.loginVariables);
            };




        }
    ]);
;angular
    .module('Theatre.Controllers.MainCtrl', [
        'ui.router',
        'Theatre.Services.AuthorizationSrvc',
    ])
    .controller('MainCtrl', [
        '$scope',
        '$state',
        'AuthorizationSrvc',
        '$rootScope',
        function($scope, $state, AuthorizationSrvc, $rootScope) {
            $scope.alert = null;
            $scope.init = function() {

            };
            $scope.init();

            $scope.showTooltips = function(box, what) {
                if (what) {
                    $scope.alert = box;
                } else {
                    $scope.alert = null;
                }
            };

            $scope.logOut = function(){
                AuthorizationSrvc.logOut();
            };
        }
    ]);
;angular
    .module('Theatre.Controllers.ProfilCtrl', [
        'ui.router',
    ])
    .controller('ProfilCtrl', [
        '$scope',
        '$state',
        '$rootScope',
        'AuthorizationSrvc',
        '$timeout',
        '$localStorage',
        function($scope, $state, $rootScope, AuthorizationSrvc, $timeout, $localStorage) {

            $scope.init = function() {
                $scope.user = $localStorage.user;
                console.log($scope.user);
            };
            $scope.init();

         
        }
    ]);
;angular
    .module('Theatre.Controllers.RegisterCtrl', [
        'ui.router',
    ])
    .controller('RegisterCtrl', [
        '$scope',
        '$state',
        '$rootScope',
        'AuthorizationSrvc',
        function($scope, $state, $rootScope, AuthorizationSrvc) {
        	$scope.registerVariables = {
        		'surname' : '',
        		'name' : '',
        		'email' : '',
        		'password1' : '',
        		'password2' : '',
				};
				var validateEmail = function(email) {
    				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   						return re.test(email);
				};
				$scope.validator = function() {
                if ($scope.registerVariables.surname.length > 1 && $scope.registerVariables.surname.length < 30 && $scope.registerVariables.name.length > 2 && $scope.registerVariables.name.length < 30 && $scope.registerVariables.password1.length > 5 && $scope.registerVariables.password1.length < 40 && $scope.registerVariables.password1 == $scope.registerVariables.password2 && validateEmail($scope.registerVariables.email)) {
                    return false;
                	} else {
                    return true;
                }
            };

            	$scope.register = function(){
            		// AuthorizationSrvc.register($scope.registerVariables).then(function(data){
            		// 	AuthorizationSrvc.successLogin(data.data[0]);

            		// }, function(data){


            		// })
                    AuthorizationSrvc.successLogin($scope.registerVariables);
            	};
        }]);

})();