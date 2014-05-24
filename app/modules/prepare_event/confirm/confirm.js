'use strict';

define(['app'], function(app) { 
    app.controller('Confirmctrl', [
        '$scope',
        function($scope) {

            $scope.tabs = [
                      { 
                        "title": "View",
                        "template": "/modules/prepare_event/confirm/tpls/view.tpl.html",
                      },
                      {
                        "title": "HR Resources",
                        "template": "/modules/prepare_event/confirm/tpls/hr.tpl.html",
                      },
                      {
                        "title": "Equipment",
                        "template": "/modules/prepare_event/confirm/tpls/equipment.tpl.html",
                      },
                      {
                        "title": "Supplies",
                        "template": "/modules/prepare_event/confirm/tpls/supplies.tpl.html",
                      }
                    ];
                    $scope.tabs.activeTab = 0;
        }
    ]);
});
