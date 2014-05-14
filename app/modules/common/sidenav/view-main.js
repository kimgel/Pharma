'use strict';

define(['app'], function (app) {
    app.controller('MainNavCtrl', [
        '$scope',
        function ($scope) {
            $scope.initiateeventDd = [
                {
                    "text": "Propose",
                    "href": '/initiateevent/propose-event'
                },
                {
                    "text": "Approve",
                     "href": '/initiateevent/approve-event'
                }
            ],
            $scope.prepareeventDd = [
                {
                    "text": "Reserve",
                    "href": '/prepareevent/prepare-event'
                },
                {
                    "text": "Confirm",
                     "href": '/prepareevent/prepare-event/confirmresources'
                }
            ],
            $scope.closeeventDd = [
                {
                    "text": "Receive",
                    "href": '/closeevent/receive'
                },
                {
                    "text": "Reimbursements",
                     "href": '/closeevent/reimbursements'
                }
            ];
        }
    ]);
});