'use strict';

define(['app', 'Parentevents','Initiateevents'], function(app, Parentevents, Initiateevents) {
    app.controller('ParenteventAdd', [
        '$scope',
        '$state',
        'ParenteventFactory',
        'InitiateEventFactory',
        function($scope, $state, ParenteventFactory, InitiateEventFactory) {
            $scope.initiateevent = {};
            $scope.parentevent = {};
            
            $scope.submit = function(form) {
                ParenteventFactory.save($scope.parentevent, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $state.go('parent_event');
                    }
                });
            };
            $scope.clear = function() {
                $scope.parentevent = angular.copy({});
            };
            $scope.all = function() {
                InitiateEventFactory.query(function(initiateevents) {
                    $scope.initiateevents = initiateevents;
                });
            };
        }
    ]);

});
