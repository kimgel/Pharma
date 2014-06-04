'use strict';

define(['app', 'Eventtypes'], function(app, Eventtypes) {
    app.controller('EventtypeCtrl', [
        '$scope',
        '$state',
        'EventtypeFactory',
        function($scope, $state, EventtypeFactory) {

            $scope.eventtype = {};
            $scope.submit = function(form) {
                EventtypeFactory.save($scope.eventtype, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $state.go('eventtype_master');
                    }
                });
            };
            $scope.clear = function() {
                $scope.eventtype = angular.copy({});
            };
        }
    ]);

});
