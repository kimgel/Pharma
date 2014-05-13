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
                },
                {
                    "text": "Prepare",
                     "href": '/initiateevent/prepare-event'
                }
            ];
        }
    ]);
});