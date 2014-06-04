'use strict';

define(['app', 'Eventts'], function(app, Eventts) {
    app.controller('EventtCtrl', [
        '$scope',
        '$state',
        'EventtFactory',
        function($scope, $state, EventtFactory) {

            $scope.eventt = {};
            $scope.submit = function(form) {
                EventtFactory.save($scope.eventt, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $state.go('propose_event');
                    }
                });
            };
            $scope.clear = function() {
                $scope.eventt = angular.copy({});
            };
        }
    ]);

});
