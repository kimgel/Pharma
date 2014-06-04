'use strict';

define([
    'app',
    'Eventmains',
    'Eventtypes',
], function(app, Eventmains, Eventtypes) {
    app.controller('EventMainCtrl', [
        '$scope',
        '$state',
        'EventMainFactory',
        'EventtypeFactory',
        function(
            $scope,
            $state,
            EventMainFactory,
            EventtypeFactory
        ) {

            $scope.eventmain = {};
            $scope.schedule = {};
            $scope.view = false;
            $scope.submit = function(form) {
                $scope.eventmain.schedule = $scope.schedule;
                //console.log($scope.eventt);
                
                EventMainFactory.save($scope.eventmain, function(err) {
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
                $scope.eventmain = angular.copy({});
            };

            $scope.all = function() {
                
                EventtypeFactory.query(function(eventtypes) {
                    $scope.eventtypes = eventtypes;
                    $scope.eventmain.eventtypes = $scope.eventtypes[0]._id;
                    console.log($scope.eventtypes);
                });
            };

          
        }
    ]);

});
