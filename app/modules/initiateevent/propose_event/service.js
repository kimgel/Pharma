'use strict';

define(['app'], function(app) {
    app.factory('EventMainFactory', [
        '$resource',
        function($resource) {
            return $resource('/api/eventmain/:eventMainId:eventMainCode', {
                eventMainId: '@_id',
                eventMainCode: '@code'            
            }, {
                update: {
                    method: 'PUT'
                }
            });
        }
    ]);
});
