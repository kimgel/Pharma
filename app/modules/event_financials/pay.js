'use strict';

define(['app'], function(app) {
    app.controller('Payctrl', [
        '$scope',
        function($scope) {

            $scope.tabs = [
                      { 
                        "title": "Summary",
                        "template": "/modules/event_financials/view.html",
                      },
                      {
                        "title": "Prepare Billing",
                        "template": "/modules/event_financials/billing/list.html",
                      },
                      {
                        "title": "Billing Payment",
                        "template": "/modules/event_financials/event/list.html",
                      },
                      {
                        "title": "HR Payment",
                        "template": "/modules/event_financials/hr/list.html",
                      }
                    ];
                    $scope.tabs.activeTab = 0;
        }
    ]);
});
