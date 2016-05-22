angular
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
