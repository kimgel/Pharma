'use strict';

define(['app', 'Parentevents'], function(app, Parentevents) {
    app.controller('ParenteventEditCtrl', [
        '$scope',
        '$state',
        '$stateParams',
        'ParenteventFactory',
        function($scope, $state, $stateParams, ParenteventFactory) {            
            $scope.update = function(form) {            
                var updateParentevent = $scope.parentevents;
                ParenteventFactory.update($scope.parentevent, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $state.go('parent_event');
                    }
                });
            };

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
