'use strict';

define(['app'], function(app) {
    app.factory('EquipmentResourceFactory', [
        '$resource', 
        function($resource) {
            return $resource('/api/equipmentresources/:equipmentResourceId', {
                equipmentResourceId: '@_id'          
            }, {
                update: {
                    method: 'PUT'
                }
            });
        }
    ]);
});
