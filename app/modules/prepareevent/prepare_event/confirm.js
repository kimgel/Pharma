'use strict';

define(['app'], function(app) {
    app.controller('Confirmctrl', [
        '$scope',
        function($scope) {

            $scope.tabs = [
                      { 
                        "title": "View",
                        "template": "/modules/prepareevent/prepare_event/tpls/view.tpl.html",
                      },
                      {
                        "title": "HR Resources",
                        "template": "/modules/prepareevent/prepare_event/tpls/hr.tpl.html",
                      },
                      {
                        "title": "Equipment",
                        "template": "/modules/prepareevent/prepare_event/tpls/equipment.tpl.html",
                      },
                      {
                        "title": "Supplies",
                        "template": "/modules/prepareevent/prepare_event/tpls/supplies.tpl.html",
                      }
                    ];
                    $scope.tabs.activeTab = 0;
        }
    ]);
});
