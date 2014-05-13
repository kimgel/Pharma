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
                templateUrl: '/modules/statusboard/index.html',
                dependencies: [
                    'modules/common/sidenav/view-main'
                ]   
                ,authenticate: true            
            }


            /************************
            *     Initiate Event     *
            *************************/

            /************************
            *     Propose Event     *
            *************************/

            ,'/initiateevent/propose-event': {
                templateUrl: '/modules/initiateevent/propose_event/list.html',
                dependencies: [
                    'modules/common/sidenav/view-main'
                ]   
                ,authenticate: true            
            }
            ,'/initiateevent/propose-event/add': {
                templateUrl: '/modules/initiateevent/propose_event/add.html'
                ,authenticate: true            
            }
            ,'/initiateevent/propose-event/view': {
                templateUrl: '/modules/initiateevent/propose_event/view.html'
                ,authenticate: true            
            }

            /************************
            *     Approve Event     *
            *************************/

             ,'/initiateevent/approve-event': {
                templateUrl: '/modules/initiateevent/approve_event/list.html'
                ,authenticate: true            
            }
            ,'/initiateevent/approve-event/approve': {
                templateUrl: '/modules/initiateevent/approve_event/approve.html'
                ,authenticate: true            
            }
          

            /************************
            *     Prepare Event     *
            *************************/
            ,'/initiateevent/prepare-event': {
                templateUrl: '/modules/initiateevent/prepare_event/list.html'
                ,authenticate: true            
            }
            ,'/initiateevent/prepare-event/prepare': {
                templateUrl: '/modules/initiateevent/prepare_event/prepare.html'
                ,authenticate: true            
            }
            /************************
            *     User    *
            *************************/
            ,'/user': {
                templateUrl: '/modules/user/list.html',
                dependencies: [
                    'modules/common/sidenav/view-main'
                ]   
                ,authenticate: true            
            }
            ,'/user/add': {
                templateUrl: '/modules/user/add.html',
                dependencies: [
                    'modules/common/sidenav/view-main'
                ]   
                ,authenticate: true            
            }
            /************************
            *     Implement Event     *
            *************************/
            ,'/implement-event': {
                templateUrl: '/modules/implement_event/list.html',
                dependencies: [
                    'modules/common/sidenav/view-main'
                ]   
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
                templateUrl: '/modules/close_event/list.html',
                dependencies: [
                    'modules/common/sidenav/view-main'
                ]   
                ,authenticate: true            
            }
            ,'/close-event/close': {
                templateUrl: '/modules/close_event/close.html',
                dependencies: [
                    'modules/common/sidenav/view-main'
                ]   
                ,authenticate: true            
            }
            /************************
            *    Event Financials    *
            *************************/
            ,'/event-financials': {
                templateUrl: '/modules/event_financials/list.html',
                dependencies: [
                    'modules/common/sidenav/view-main'
                ]   
                ,authenticate: true            
            }
            ,'/event-financials/enter': {
                templateUrl: '/modules/event_financials/enter.html',
                dependencies: [
                    'modules/common/sidenav/view-main'
                ]   
                ,authenticate: true            
            }
            /************************
            *    iNVENTORY    *
            *************************/
            ,'/inventory': {
                templateUrl: '/modules/inventory/list.html',
                dependencies: [
                    'modules/common/sidenav/view-main'
                ]   
                ,authenticate: true            
            }
            ,'/inventory/add': {
                templateUrl: '/modules/inventory/add.html',
                dependencies: [
                    'modules/common/sidenav/view-main'
                ]   
                ,authenticate: true            
            }
            /************************
            *    Payment Details    *
            *************************/
            ,'/payment-details': {
                templateUrl: '/modules/payment_details/list.html',
                dependencies: [
                    'modules/common/sidenav/view-main'
                ]   
                ,authenticate: true            
            }
            ,'/payment-details/pay': {
                templateUrl: '/modules/payment_details/pay.html',
                dependencies: [
                    'modules/common/sidenav/view-main'
                ]   
                ,authenticate: true            
            }
        }
    };
});
