'use strict';

define(['app'], function(app) { 
    app.controller('Confirmctrl', [
        '$scope',
        function($scope) {

            $scope.tabs = [
                      { 
                        "title": "Summary",
                        "template": "/modules/prepare_event/confirm/view.html",
                      },
                      {
                        "title": "Human Resource",
                        "template": "/modules/prepare_event/confirm/hr/hr.tpl.html",
                      },
                      {
                        "title": "Equipment Resource",
                        "template": "/modules/prepare_event/confirm/equipment/equipment.tpl.html",
                      },
                      {
                        "title": "Supplies Resource",
                        "template": "/modules/prepare_event/confirm/supplies/supplies.tpl.html",
                      }
                    ];
                    $scope.tabs.activeTab = 0;
        }
    ]);
});
