'use strict';

define(['app'], function(app) {
    app.controller('Encodectrl', [
        '$scope',
        function($scope) {

            $scope.tabs = [
                      { 
                        "title": "Summary",
                        "template": "/modules/implement_event/tpls/view.tpl.html",
                      },
                      {
                        "title": "Event Form",
                        "template": "/modules/implement_event/tpls/record.tpl.html",
                      },
                      {
                        "title": "Event Attachment",
                        "template": "/modules/implement_event/tpls/attach.tpl.html",
                      }
                    ];
                    $scope.tabs.activeTab = 0;
        }
    ]);
});
