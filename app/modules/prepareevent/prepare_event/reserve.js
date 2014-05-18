'use strict';

define(['app'], function(app) {
    app.controller('Reservectrl', [
        '$scope',
        function($scope) {

            $scope.tabs = [
                      { 
                        "title": "View",
                        "template": "/modules/prepareevent/prepare_event/tpls/view.tpl.html",
                      },
                      {
                        "title": "Human Resource",
                        "template": "/modules/prepareevent/prepare_event/tpls/resourceshr.tpl.html",
                      },
                      {
                        "title": "Equipment Resource",
                        "template": "/modules/prepareevent/prepare_event/tpls/resourcesequipment.tpl.html",
                      },
                      {
                        "title": "Supplies Resource",
                        "template": "/modules/prepareevent/prepare_event/tpls/resourcessupplies.tpl.html",
                      }
                    ];
                    $scope.tabs.activeTab = 0;
        }
    ]);
});
