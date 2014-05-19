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
                templateUrl: '/modules/initiateevent/propose_event/add.html',
                dependencies: [
                    'modules/common/sidenav/view-main'
                ]   
                ,authenticate: true            
            }
            ,'/initiateevent/propose-event/view': {
                templateUrl: '/modules/initiateevent/propose_event/view.html',
                dependencies: [
                    'modules/common/sidenav/view-main'
                ]   
                ,authenticate: true            
            }

            /************************
            *     Approve Event     *
            *************************/

             ,'/initiateevent/approve-event': {
                templateUrl: '/modules/initiateevent/approve_event/list.html',
                dependencies: [
                    'modules/common/sidenav/view-main'
                ]   
                ,authenticate: true            
            }
            ,'/initiateevent/approve-event/approve': {
                templateUrl: '/modules/initiateevent/approve_event/approve.html',
                dependencies: [
                    'modules/common/sidenav/view-main'
                ]   
                ,authenticate: true            
            }
          

            /************************
            *     Prepare Event     *
            *************************/
            ,'/prepareevent/prepare-event': {
                templateUrl: '/modules/prepareevent/prepare_event/list.html',
                dependencies: [
                    'modules/common/sidenav/view-main'
                ]   
                ,authenticate: true            
            }
            
            ,'/prepareevent/prepare-event/reserve': {
                templateUrl: '/modules/prepareevent/prepare_event/reserve.html'
                ,dependencies: [
                     'modules/prepareevent/prepare_event/reserve',
                     'modules/common/sidenav/view-main'
                ]
                ,authenticate: true            
            }
            ,'/prepareevent/prepare-event/addhumanresources': {
                templateUrl: '/modules/prepareevent/prepare_event/addhumanresources.html',
                dependencies: [
                    'modules/common/sidenav/view-main'
                ]   
                ,authenticate: true            
            }
            ,'/prepareevent/prepare-event/confirm': {
                templateUrl: '/modules/prepareevent/prepare_event/confirm.html'
                ,dependencies: [
                    'modules/prepareevent/prepare_event/confirm',
                     'modules/common/sidenav/view-main'

                ]
                ,authenticate: true            
            }
            ,'/prepareevent/prepare-event/confirmresources': {
                templateUrl: '/modules/prepareevent/prepare_event/confirmresources.html'
                ,dependencies: [
                     'modules/common/sidenav/view-main'

                ]
                ,authenticate: true            
            }

            ,'/prepareevent/prepare-event/addequipment': {
                templateUrl: '/modules/prepareevent/prepare_event/addequipment.html'
                ,dependencies: [
                     'modules/common/sidenav/view-main'

                ]
                ,authenticate: true            
            }
            ,'/prepareevent/prepare-event/addsupplies': {
                templateUrl: '/modules/prepareevent/prepare_event/addsupplies.html'
                ,dependencies: [
                     'modules/common/sidenav/view-main'

                ]
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

                    'modules/implement_event/encode',
                    'modules/common/sidenav/view-main'
                ]
                ,authenticate: true            
            }
            /************************
            *     Close Event     *
            *************************/
            ,'/closeevent/receive': {
                templateUrl: '/modules/closeevent/receive/list.html',
                dependencies: [
                    'modules/common/sidenav/view-main'
                ]   
                ,authenticate: true            
            }
            ,'/closeevent/receive/close': {
                templateUrl: '/modules/closeevent/receive/close.html',
                dependencies: [
                    'modules/common/sidenav/view-main'
                ]   
                ,authenticate: true            
            }
            /************************
            *    Close Event Reimbursements    *
            *************************/
            ,'/closeevent/reimbursements': {
                templateUrl: '/modules/closeevent/reimbursements/list.html',
                dependencies: [
                    'modules/common/sidenav/view-main'
                ]   
                ,authenticate: true            
            }
            ,'/closeevent/reimbursements/enter': {
                templateUrl: '/modules/closeevent/reimbursements/enter.html',
                dependencies: [
                    'modules/common/sidenav/view-main'
                ]   
                ,authenticate: true            
            }
            /************************
            *    iNVENTORY    *
            *************************/
            ,'/inventory/equipmentmaster': {
                templateUrl: '/modules/inventory/equipmentmaster/listequipment.html',
                dependencies: [
                    'modules/common/sidenav/view-main'
                ]   
                ,authenticate: true            
            }
            ,'/inventory/suppliesmaster': {
                templateUrl: '/modules/inventory/suppliesmaster/listsupplies.html',
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
                    'modules/payment_details/pay',
                    'modules/common/sidenav/view-main'
                ]   
                ,authenticate: true            
            }
            ,'/payment-details/add': {
                templateUrl: '/modules/payment_details/add.html',
                dependencies: [
                    'modules/common/sidenav/view-main'
                ]   
                ,authenticate: true            
            }
            ,'/payment-details/addhr': {
                templateUrl: '/modules/payment_details/addhr.html',
                dependencies: [
                    'modules/common/sidenav/view-main'
                ]   
                ,authenticate: true            
            }
            ,'/payment-details/viewhr': {
                templateUrl: '/modules/payment_details/viewhr.html',
                dependencies: [
                    'modules/common/sidenav/view-main'
                ]   
                ,authenticate: true            
            }
            /************************
            *    HR Master   *
            *************************/
            ,'/hrmaster': {
                templateUrl: '/modules/hrmaster/list.html',
                dependencies: [
                    'modules/common/sidenav/view-main'
                ]   
                ,authenticate: true            
            }
            ,'/hrmaster/viewprofile': {
                templateUrl: '/modules/hrmaster/viewprofile.html',
                dependencies: [
                    'modules/common/sidenav/view-main'
                ]   
                ,authenticate: true            
            }
            ,'/hrmaster/add': {
                templateUrl: '/modules/hrmaster/add.html',
                dependencies: [
                    'modules/common/sidenav/view-main'
                ]   
                ,authenticate: true            
            }
            

        }
    };
});
