angular
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

