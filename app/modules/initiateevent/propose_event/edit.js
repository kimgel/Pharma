'use strict';

define(['app', 'Eventmains'], function(app, Eventmains) {
    app.controller('EventMainEditCtrl', [
        '$scope',
        '$state',
        '$stateParams',
        'EventMainFactory',
        function($scope, $state, $stateParams, EventMainFactory) {            
            $scope.update = function(form) {            
                var updateEventmain = $scope.eventmains;
                EventMainFactory.update($scope.eventmain, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $state.go('propose_event');
                    }
                });
            };

            $scope.findOne = function() {
                EventMainFactory.get({
                    eventMainId: $stateParams.eventMainId
                }, function(eventmain) {
                    $scope.eventmain = eventmain;
                });
            };
        }
    ]);
});
