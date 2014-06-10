'use strict';

define(['app'], function(app) {
    app.controller('Reservectrl', [
        '$scope',
        function($scope) {

            $scope.tabs = [
                      { 
                        "title": "View",
                        "template": "/modules/prepare_event/reserve/tpls/view.tpl.html",
                      },
                      {
                        "title": "Human Resource",
                        "template": "/modules/prepare_event/reserve/tpls/resourcesHr.tpl.html",
                      },
                      {
                        "title": "Equipment Resource",
                        "template": "/modules/prepare_event/reserve/tpls/resourcesEquipment.tpl.html",
                      },
                      {
                        "title": "Supplies Resource",
                        "template": "/modules/prepare_event/reserve/tpls/resourcesSupplies.tpl.html",
                      }
                    ];
                    $scope.tabs.activeTab = 0;
        }
    ]);
});
