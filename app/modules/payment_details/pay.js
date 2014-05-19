'use strict';

define(['app'], function(app) {
    app.controller('Payctrl', [
        '$scope',
        function($scope) {

            $scope.tabs = [
                      { 
                        "title": "View",
                        "template": "/modules/payment_details/tpls/view.tpl.html",
                      },
                      {
                        "title": "Prepare Billing",
                        "template": "/modules/payment_details/tpls/preparebilling.tpl.html",
                      },
                      {
                        "title": "Billing Payment",
                        "template": "/modules/payment_details/tpls/payevent.tpl.html",
                      },
                      {
                        "title": "HR Payment",
                        "template": "/modules/payment_details/tpls/payhr.tpl.html",
                      }
                    ];
                    $scope.tabs.activeTab = 0;
        }
    ]);
});
