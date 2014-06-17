'use strict'; 

define(['app', 'Parentevents'], function(app, Parentevents) {
    app.controller('ParenteventList', [
        '$scope',
        '$location',
        'ParenteventFactory', 
        function($scope, $location, ParenteventFactory) {
            $scope.all = function() {
                ParenteventFactory.query(function(parentevents) {
                    $scope.parentevents = parentevents;
                });
            };
        }
    ]);
});
