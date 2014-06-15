'use strict';

define(['app'], function(app) {
    app.controller('Receivectrl', [
        '$scope',
        function($scope) {

            $scope.tabs = [
                      { 
                        "title": "Summary",
                        "template": "/modules/close_event/receive/tpls/view.tpl.html",
                      },
                      {
                        "title": "Equipment",
                        "template": "/modules/close_event/receive/tpls/equipment.tpl.html",
                      },
                      {
                        "title": "Supplies",
                        "template": "/modules/close_event/receive/tpls/supplies.tpl.html",
                      }
                    ];
                    $scope.tabs.activeTab = 0;
        }
    ]);
});
