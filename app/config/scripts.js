require.config({
    baseUrl: '/',
    paths: {

        /* Config
        =================================================================== */
        'States': '/config/states',
        'Dependency': '/config/dependency',
       // 'Init': '/config/init',
        'Templates': '/config/templates',

        /* 3rd Party
        =================================================================== */
        'angular': '/assets/bower_components/angular/angular.min',
        'angular-resource': '/assets/bower_components/angular-resource/angular-resource.min',
        'angular-cookies': '/assets/bower_components/angular-cookies/angular-cookies.min',
        'angular-sanitize': '/assets/bower_components/angular-sanitize/angular-sanitize.min',
        'angular-ui-router': '/assets/bower_components/angular-ui-router/release/angular-ui-router.min',
        'angular-animate': '/assets/bower_components/angular-animate/angular-animate.min',
        'angular-strap': '/assets/bower_components/angular-strap/dist/angular-strap.min',
        'angular-strap-tpl': '/assets/bower_components/angular-strap/dist/angular-strap.tpl',
        'angular-loading-bar': '/assets/bower_components/angular-loading-bar/build/loading-bar.min',

        /* Services
        =================================================================== */
        'Auth': '/modules/auth/service',
        'Session': '/modules/session/service',
        'Users': '/modules/user/service',
        'HumanResources': '/modules/hr_master/service',
        'EquipmentResources': '/modules/inventory/equipment_master/service',
        'SuppliesResources': '/modules/inventory/supplies_master/service',
        'Eventmains': '/modules/initiateevent/propose_event/service',
        'Eventtypes': '/modules/eventtype_master/service'
        
        /* Directives
        =================================================================== 
        'Navigation': '/directives/navigation'
        */
    },
    shim: {
        'app': {
            deps: [
                'angular',
                'angular-resource',
                'angular-cookies',
                'angular-sanitize',
                'angular-ui-router',
                'angular-animate',
                'angular-strap',
                'Templates',
                'angular-loading-bar'
            ]
        },
        'angular-resource': {
            deps: ['angular']
        },
        'angular-cookies': {
            deps: ['angular']
        },
        'angular-sanitize': {
            deps: ['angular']
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-strap': {
            deps: ['angular']
        },
        'Templates': {
            deps: ['angular-strap']
        },
        'angular-loading-bar': {
            deps: [
                'angular',
                'angular-animate'
            ]
        }
    }
});

require(
    [
        'app',
        'Users',
        'Auth',
        'Session'
    ],
    function(app) {
        angular.bootstrap(document, ['app']);
    }
);
