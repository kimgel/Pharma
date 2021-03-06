'use strict';

define(['app'], function(app) {
    app.controller('LoginCtrl',[
        '$scope',
        'Auth',
        '$location',
        function($scope, Auth, $location) {
            $scope.user = {};
            $scope.errors = {};
            $scope.login = function(form) {

                $scope.submitted = true;

                if (form.$valid) {
                    Auth.login({
                        username: $scope.user.username,
                        password: $scope.user.password
                    }).then(function() {
                        // Logged in, redirect to home
                        $location.path('/statusboard');
                    }).
                    catch (function(err) {
                        err = err.data;
                        $scope.errors.other = err.message;
                    });
                }
            };
        }
    ]);
});
