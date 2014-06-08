'use strict';

define(['app'], function(app) {
    app.factory('InitiateEventFactory', [
        '$resource',
        function($resource) {
            return $resource('/api/initiateevent/:initiateEventId:initiateEventCode', {
                initiateEventId: '@_id',
                initiateEventCode: '@code'            
            }, {
                update: {
                    method: 'PUT'
                }
            });
        }
    ]);
});
