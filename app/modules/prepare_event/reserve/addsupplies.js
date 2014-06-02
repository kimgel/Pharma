'use strict';

define(['app'], function(app) {
    app.controller('ReserveSuppliesctrl', [
        '$scope',
        function($scope) {

            $scope.tabs = [
                      { 
                        "title": "Supplies for Reservation",
                        "template": "/modules/prepare_event/reserve/reservesupplies.html",
                      },
                      {
                        "title": "Supplies for Purchase",
                        "template": "/modules/prepare_event/reserve/purchasesupplies.html",
                      }
                    ];
                    $scope.tabs.activeTab = 0;
        }
    ]);
});
