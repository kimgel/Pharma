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
                        "title": "Resources",
                        "template": "/modules/prepareevent/prepare_event/tpls/resources.tpl.html",
                      }
                    ];
                    $scope.tabs.activeTab = 0;
        }
    ]);
});
