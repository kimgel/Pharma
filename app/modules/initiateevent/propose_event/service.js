'use strict';

define(['app'], function(app) {
    app.factory('EventMainFactory', [
        '$resource',
        function($resource) {
            return $resource('/api/eventmains/:eventMainId', {
                eventMainId: '@_id'          
            }, {
                update: {
                    method: 'PUT'
                }
            });
        }
    ]);
});
