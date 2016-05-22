angular
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
