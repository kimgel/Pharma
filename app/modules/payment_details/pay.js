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
                        "title": "Payment",
                        "template": "/modules/payment_details/tpls/payevent.tpl.html",
                      },
                      {
                        "title": "Human Resources",
                        "template": "/modules/payment_details/tpls/payhr.tpl.html",
                      }
                    ];
                    $scope.tabs.activeTab = 0;
        }
    ]);
});
