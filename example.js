'using strict';
angular.module('ui-router-example', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');
            $stateProvider
                    .state('home', {
                        url: '/',
                        templateUrl: 'partials/home.html'
                    })

                    .state('users', {
                        url: '/users',
                        templateUrl: 'partials/users.html'
                    })

                    .state('users.admin', {
                        url: '/admin',
                        views: {
                            '': {
                                templateUrl: 'partials/users.detail.html',
                                controller: function ($scope) {
                                    $scope.persons = ['Dominik', 'Sven'];
                                }
                            },
                            'info@': {
                                template: 'Admin ist aktiv'
                            }
                        }
                    })

                    .state('users.user', {
                        url: '/user',
                        templateUrl: 'partials/users.detail.html',
                        views: {
                            '': {
                                templateUrl: 'partials/users.detail.html',
                                controller: function ($scope) {
                                    $scope.persons = ['Jens', 'Stefan', 'Sabine'];
                                }
                            },
                            'info@': {
                                template: 'User ist aktiv'
                            }
                        }
                    })

                    .state('about', {
                        url: '/about',
                        templateUrl: 'partials/about.html'
                    });
        });