'use strict';

define(['app'], function(app) {
    app.factory('EventtypeFactory', [
        '$resource',
        function($resource) {
            return $resource('/api/eventtypes/:eventtypeId', {
                eventtId: '@_id'          
            }, {
                update: {
                    method: 'PUT'
                }
            });
        }
    ]);
});
