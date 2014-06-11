'use strict';

define(['app', 'Initiateevents'], function(app, Initiateevents) {
    app.controller('ApproveEvent', [
        '$rootScope',
        '$scope',
        '$state',
        '$stateParams',
        'InitiateEventFactory',
        function($rootScope, $scope, $state, $stateParams, InitiateEventFactory) {   

            $scope.update = function(form) {
//$scope.initiateevent.approver = $scope.userId;                
var currentUser = $rootScope.currentUser;
 $scope.initiateevent.approver = currentUser.userId;

$scope.initiateevent.approvalDate = Date.now();
                var updateApprovalStatus = $scope.initiateevents;
                InitiateEventFactory.update($scope.initiateevent, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $state.go('approve_event');
                    }
                });
            };

            $scope.findOne = function() {
                InitiateEventFactory.get({
                    initiateEventId: $stateParams.initiateEventId
                }, function(initiateevent) {
                    $scope.initiateevent = initiateevent;
                });
            };

        }
    ]);
});
