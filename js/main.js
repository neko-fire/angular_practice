angular
    .module('portfolio', ['ui.router'])
    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.html',
                controller: function($scope){
                    $scope.title = 'Home';
                    $scope.items = ['1', '2', '3', '4'];
                }
            })
            .state('about', {
                url: '/about',
                templateUrl: 'templates/about.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'templates/contact.html',
                controller: function($scope){
                    $scope.title = 'Contact me';
                }
            })
    }])