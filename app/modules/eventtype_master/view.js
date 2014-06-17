'use strict';

define(['app', 'Eventtypes'], function(app, Eventtypes) {
    app.controller('EventTypeViewCtrl', [
        '$scope',
        '$location', 
        '$stateParams',
        'EventtypeFactory',
        function($scope, $location, $stateParams, EventtypeFactory) {
            $scope.findOne = function() {
                EventtypeFactory.get({
                    eventtypeId: $stateParams.eventtypeId      
                               
                }, function(eventtype) {
                    $scope.eventtype = eventtype;              
                });
            };

            $scope.eventformA = [{
                    //title: 'Event Form A',
                    template: '/modules/eventtype_master/tpls/eventformA.tpl.html'
                }
            ];

        }
    ]);
});
