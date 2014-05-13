'use strict';

define(['app'], function(app) {
    app.controller('Encodectrl', [
        '$scope',
        function($scope) {

            $scope.tabs = [
                      { 
                        "title": "View",
                        "template": "/modules/implement_event/tpls/view.tpl.html",
                      },
                      {
                        "title": "Encode",
                        "template": "/modules/implement_event/tpls/record.tpl.html",
                      },
                      {
                        "title": "Attach",
                        "template": "/modules/implement_event/tpls/attach.tpl.html",
                      }
                    ];
                    $scope.tabs.activeTab = 0;
        }
    ]);
});
