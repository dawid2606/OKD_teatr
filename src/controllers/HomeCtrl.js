angular
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
