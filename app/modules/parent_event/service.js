'use strict';

define(['app'], function(app) {
    app.factory('ParenteventFactory', [
        '$resource',
        function($resource) {
            return $resource('/api/parentevent/:parenteventId', {
                parenteventId: '@_id'          
            }, {
                update: {
                    method: 'PUT'
                }
            });
        }
    ]);
});
