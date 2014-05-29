'use strict';

define(['app'], function(app) {
    app.factory('SuppliesResourceFactory', [
        '$resource', 
        function($resource) {
            return $resource('/api/suppliesresources/:suppliesResourceId', {
                suppliesResourceId: '@_id'          
            }, {
                update: {
                    method: 'PUT'
                }
            });
        }
    ]);
});
