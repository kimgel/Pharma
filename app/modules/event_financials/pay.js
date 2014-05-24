'use strict';

define(['app'], function(app) {
    app.controller('Payctrl', [
        '$scope',
        function($scope) {

            $scope.tabs = [
                      { 
                        "title": "View",
                        "template": "/modules/event_financials/tpls/view.tpl.html",
                      },
                      {
                        "title": "Prepare Billing",
                        "template": "/modules/event_financials/tpls/preparebilling.tpl.html",
                      },
                      {
                        "title": "Billing Payment",
                        "template": "/modules/event_financials/tpls/payevent.tpl.html",
                      },
                      {
                        "title": "HR Payment",
                        "template": "/modules/event_financials/tpls/payhr.tpl.html",
                      }
                    ];
                    $scope.tabs.activeTab = 0;
        }
    ]);
});
