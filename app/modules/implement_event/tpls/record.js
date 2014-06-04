'use strict';

define(['app'], function(app) {
    app.controller('Recordctrl', [
        '$scope',
        function($scope) {

            $scope.tabs = [
                      { 
                        "title": "BP",
                        "template": "/modules/implement_event/tpls/templateA.tpl.html",
                      },
                      {
                        "title": "Sugar",
                        "template": "/modules/implement_event/tpls/templateB.tpl.html",
                      },
                      {
                        "title": "Cholesterol",
                        "template": "/modules/implement_event/tpls/templateC.tpl.html",
                      }
                    ];
                    $scope.tabs.activeTab = 0;
        }
    ]);
});
