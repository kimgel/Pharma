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
                        "template": "/modules/prepare_event/reserve/tpls/resourceshr.tpl.html",
                      },
                      {
                        "title": "Equipment Resource",
                        "template": "/modules/prepare_event/reserve/tpls/resourcesequipment.tpl.html",
                      },
                      {
                        "title": "Supplies Resource",
                        "template": "/modules/prepare_event/reserve/tpls/resourcessupplies.tpl.html",
                      }
                    ];
                    $scope.tabs.activeTab = 0;
        }
    ]);
});
