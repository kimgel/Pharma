'use strict';

define(['app'], function(app) {
    app.controller('Reservectrl', [
        '$scope',
        function($scope) {

            $scope.tabs = [
                      { 
                        "title": "View",
                        "template": "/modules/prepare_event/reserve/view.html",
                      },
                      {
                        "title": "Human Resource",
                        "template": "/modules/prepare_event/reserve/hr/list.html",
                      },
                      {
                        "title": "Equipment Resource",
                        "template": "/modules/prepare_event/reserve/equipment/list.html",
                      },
                      {
                        "title": "Supplies Resource",
                        "template": "/modules/prepare_event/reserve/supplies/list.html",
                      }
                    ];
                    $scope.tabs.activeTab = 0;
        }
    ]);
});
