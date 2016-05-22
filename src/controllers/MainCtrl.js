angular
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
