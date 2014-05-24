'use strict';

define(['app'], function(app) {
    app.factory('HumanResourceFactory', [
        '$resource',
        function($resource) {
            return $resource('/api/humanresources/:humanResourceId', {
                humanResourceId: '@_id'          
            }, {
                update: {
                    method: 'PUT'
                }
            });
        }
    ]);
});
