angular
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
