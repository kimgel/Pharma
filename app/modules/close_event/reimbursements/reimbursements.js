'use strict';

define(['app'], function(app) {
    app.controller('Reimbursementsctrl', [
        '$scope',
        function($scope) {

            $scope.tabs = [
                      { 
                        "title": "Summary",
                        "template": "/modules/close_event/reimbursements/tpls/view.tpl.html",
                      },
                      {
                        "title": "Billing",
                        "template": "/modules/close_event/reimbursements/tpls/billing.tpl.html",
                      }
                    ];
                    $scope.tabs.activeTab = 0;
        }
    ]);
});
