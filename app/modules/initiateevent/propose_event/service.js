'use strict';

define(['app'], function(app) {
    app.factory('EventtFactory', [
        '$resource',
        function($resource) {
            return $resource('/api/eventts/:eventtId', {
                eventtId: '@_id'          
            }, {
                update: {
                    method: 'PUT'
                }
            });
        }
    ]);
});
