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
                    "text": "Reserve Resources",
                    "href": '/prepareevent/prepare-event'
                },
                {
                    "text": "Confirm Resources",
                     "href": '/prepareevent/prepare-event/confirmresources'
                }
            ],
            $scope.closeeventDd = [
                {
                    "text": "Receive Equipment/Supplies",
                    "href": '/closeevent/receive'
                },
                {
                    "text": "Reimbursements",
                     "href": '/closeevent/reimbursements'
                }
            ],
            $scope.inventoryDd = [
                {
                    "text": "Equipment",
                    "href": '/inventory/equipmentmaster'
                },
                {
                    "text": "Supplies",
                     "href": '/inventory/suppliesmaster'
                }
            ];
        }
    ]);
});