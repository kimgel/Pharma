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
            ,'/propose-event/view': {
                templateUrl: '/modules/propose_event/view.html'
                ,authenticate: true            
            }

            /************************
            *     Approve Event     *
            *************************/

             ,'/approve-event': {
                templateUrl: '/modules/approve_event/list.html'
                ,authenticate: true            
            }
            ,'/approve-event/approve': {
                templateUrl: '/modules/approve_event/approve.html'
                ,authenticate: true            
            }
          

            /************************
            *     Prepare Event     *
            *************************/
            ,'/prepare-event': {
                templateUrl: '/modules/prepare_event/list.html'
                ,authenticate: true            
            }
            ,'/prepare-event/prepare': {
                templateUrl: '/modules/prepare_event/prepare.html'
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
            ,'/implement-event/encode': {
                templateUrl: '/modules/implement_event/encode.html'
                ,dependencies: [

                    'modules/implement_event/encode'
                ]
                ,authenticate: true            
            }
            /************************
            *     Close Event     *
            *************************/
            ,'/close-event': {
                templateUrl: '/modules/close_event/list.html'
                ,authenticate: true            
            }
            ,'/close-event/close': {
                templateUrl: '/modules/close_event/close.html'
                ,authenticate: true            
            }
            /************************
            *    Event Financials    *
            *************************/
            ,'/event-financials': {
                templateUrl: '/modules/event_financials/list.html'
                ,authenticate: true            
            }
            ,'/event-financials/enter': {
                templateUrl: '/modules/event_financials/enter.html'
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
            /************************
            *    Payment Details    *
            *************************/
            ,'/payment-details': {
                templateUrl: '/modules/payment_details/list.html'
                ,authenticate: true            
            }
            ,'/payment-details/pay': {
                templateUrl: '/modules/payment_details/pay.html'
                ,authenticate: true            
            }
        }
    };
});
