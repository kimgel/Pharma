'use strict';

define(['app', 'Parentevents'], function(app, Parentevents) {
    app.controller('ParentEventViewCtrl', [
        '$scope',
        '$location', 
        '$stateParams',
        'ParenteventFactory',
        function($scope, $location, $stateParams, ParenteventFactory) {
            $scope.findOne = function() {
                ParenteventFactory.get({
                    parenteventId: $stateParams.parenteventId      
                               
                }, function(parentevent) {
                    $scope.parentevent = parentevent;              
                });
            };
        }
    ]);
});
