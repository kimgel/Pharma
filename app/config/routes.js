'use strict';

define([], function() {
    return {
        defaultRoutePath: '/statusboard',
        routes: {  
            '/login': {
                templateUrl: '/modules/login/index.html',
                dependencies: [
                    'modules/login/index'
                ]                
            }
            ,'/statusboard': {
                templateUrl: '/modules/statusboard/index.html'
                ,authenticate: true            
            }


            /************************
            *     Propose Event     *
            *************************/

            ,'/propose-event': {
                templateUrl: '/modules/propose_event/list.html'
                ,authenticate: true            
            }
            ,'/propose-event/add': {
                templateUrl: '/modules/propose_event/add.html'
                ,authenticate: true            
            }

            /************************
            *     Approve Event     *
            *************************/

             ,'/approve-event': {
                templateUrl: '/modules/approve_event/list.html'
                ,authenticate: true            
            }

            /************************
            *     Prepare Event     *
            *************************/
            ,'/prepare-event': {
                templateUrl: '/modules/prepare_event/list.html'
                ,authenticate: true            
            }
            /************************
            *     User    *
            *************************/
            ,'/user': {
                templateUrl: '/modules/user/list.html'
                ,authenticate: true            
            }
            ,'/user/add': {
                templateUrl: '/modules/user/add.html'
                ,authenticate: true            
            }
            /************************
            *     Implement Event     *
            *************************/
            ,'/implement-event': {
                templateUrl: '/modules/implement_event/list.html'
                ,authenticate: true            
            }
            /************************
            *     Close Event     *
            *************************/
            ,'/close-event': {
                templateUrl: '/modules/close_event/list.html'
                ,authenticate: true            
            }
            /************************
            *    Event Financials    *
            *************************/
            ,'/event-financials': {
                templateUrl: '/modules/event_financials/list.html'
                ,authenticate: true            
            }
            /************************
            *    iNVENTORY    *
            *************************/
            ,'/inventory': {
                templateUrl: '/modules/inventory/list.html'
                ,authenticate: true            
            }
            ,'/inventory/add': {
                templateUrl: '/modules/inventory/add.html'
                ,authenticate: true            
            }
        }
    };
});
