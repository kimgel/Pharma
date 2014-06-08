'use strict';

define(['app', 'Eventtypes'], function(app, Eventtypes) {
    app.controller('EventTypeEditCtrl', [
        '$scope',
        '$state',
        '$stateParams',
        'EventtypeFactory',
        function($scope, $state, $stateParams, EventtypeFactory) {            
            $scope.update = function(form) {            
                var updateEventtype = $scope.eventtypes;
                EventtypeFactory.update($scope.eventtype, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $state.go('eventtype_master');
                    }
                });
            };

            $scope.findOne = function() {
                EventtypeFactory.get({
                    eventtypeId: $stateParams.eventtypeId
                }, function(eventtype) {
                    $scope.eventtype = eventtype;
                });
            };
        }
    ]);
});
