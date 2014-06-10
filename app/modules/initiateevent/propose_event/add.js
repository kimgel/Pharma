'use strict';

define([
    'app',
    'Initiateevents',
    'Eventtypes',
], function(app, Initiateevents, Eventtypes) {
    app.controller('InitiateEventCtrl', [
        '$scope',
        '$state',
        'InitiateEventFactory',
        'EventtypeFactory',
        function(
            $scope,
            $state,
            InitiateEventFactory,
            EventtypeFactory
        ) {

            $scope.initiateevent = {};
            $scope.schedule = {};
            $scope.view = false;
            $scope.submit = function(form) {
                $scope.initiateevent.schedule = $scope.schedule;
                //console.log($scope.eventt);
                
                InitiateEventFactory.save($scope.initiateevent, function(err) {
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
                $scope.initiateevent = angular.copy({});
            };

            $scope.all = function() {
                
                EventtypeFactory.query(function(eventtypes) {
                    $scope.eventtypes = eventtypes;
                    $scope.initiateevent.eventtypes = $scope.eventtypes[0]._id;
                    //console.log($scope.eventtypes);
                });
            };

          
        }
    ]);

});
