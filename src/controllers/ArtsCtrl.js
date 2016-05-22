angular
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
