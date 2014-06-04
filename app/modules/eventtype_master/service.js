'use strict';

define(['app'], function(app) {
    app.factory('EventtypeFactory', [
        '$resource',
        function($resource) {
            return $resource('/api/eventtypes/:eventtypeId', {
                eventtypeId: '@_id'          
            }, {
                update: {
                    method: 'PUT'
                }
            });
        }
    ]);
});
