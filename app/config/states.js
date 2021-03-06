'use strict';
  
define(['Dependency'], function(Dependency) {
    return {
        defaultStatePath: '/login',
        states: {
            /* ======= Parents ======= */
            root: {
                name: 'root',
                abstract: true,
                template: '<ui-view/>', 
                views: {
                    'header@': {
                        templateUrl: '/modules/common/header/view.html'
                    },
                    'navigation@': {
                        templateUrl: '/modules/common/sidenav/view-main.html'
                    }
                },
                resolve: new Dependency([
                    'modules/common/header/view',
                    'modules/common/sidenav/view-main'
                ])
            },
            settings: {
                name: 'settings',
                abstract: true,
                template: '<ui-view/>',
                views: {
                    'header@': {
                        templateUrl: '/modules/common/header/view.html'
                    },
                    'navigation@': {
                        templateUrl: '/modules/common/sidenav/view-settings.html'
                    }
                },
                resolve: new Dependency([
                    'modules/common/header/view',
                    'modules/common/sidenav/view-settings'
                ])
            },
            /* ======= Login ======= */
            login: {
                name: 'login',
                url: '/login',
                parent: '',
                views: {
                    '@': {
                        templateUrl: '/modules/login/index.html'
                    }
                },
                resolve: new Dependency([
                    'modules/login/index'
                ]),
                authenticate: false
            },
            /* ======= Statusboard ======= */
            statusboard: {
                name: 'statusboard',
                url: '/statusboard',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/statusboard/index.html'
                    }
                },
                data: {
                    displayName: 'Status Board'
                },
                authenticate: true
            },
            /* ======= Initiate Event ======= */
            propose_event: {
                name: 'propose_event',
                url: '/initiateevent/propose',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/initiateevent/propose_event/list.html'
                    }
                },
                data: {
                    displayName: 'Propose'
                },
                resolve: new Dependency([
                    'modules/initiateevent/propose_event/list'
                ]),
                authenticate: true
            },
            propose_event_add: {
                name: 'propose_event_add',
                url: '/add',
                parent: 'propose_event',
                views: {
                    '@': {
                        templateUrl: '/modules/initiateevent/propose_event/add.html'
                    }
                },
                data: {
                    displayName: 'Add'
                },
                resolve: new Dependency([
                    'modules/initiateevent/propose_event/add'
                ]),
                authenticate: true
            },
            
            propose_event_view: {
                name: 'propose_event_view',
                url: '/:initiateEventId',
                parent: 'propose_event',
                views: {
                    '@': {
                        templateUrl: '/modules/initiateevent/propose_event/view.html'
                    }
                },
                data: {
                    displayName: 'Summary'
                },
                resolve: new Dependency([
                    'modules/initiateevent/propose_event/view'
                ]),
                authenticate: true
            },
            propose_event_edit: {
                name: 'propose_event_edit',
                url: '/:initiateEventId/edit',
                parent: 'propose_event',
                views: {
                    '@': {
                        templateUrl: '/modules/initiateevent/propose_event/edit.html'
                    }
                },
                data: {
                    displayName: 'Edit'
                },
                resolve: new Dependency([
                    'modules/initiateevent/propose_event/edit'
                ]),
                authenticate: true
            },
            /* ======= Initiate Event/Approve ======= */
            approve_event: {
                name: 'approve_event',
                url: '/initiateevent/approve',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/initiateevent/approve_event/list.html'
                    }
                },
                data: {
                    displayName: 'Approve'
                },
                resolve: new Dependency([
                    'modules/initiateevent/approve_event/list'
                ]),
                authenticate: true
            },
            approve_event_view: {
                name: 'approve_event_view',
                url: '/:initiateEventId',
                parent: 'approve_event',
                views: {
                    '@': {
                        templateUrl: '/modules/initiateevent/approve_event/view.html'
                    }
                },
                data: {
                    displayName: 'Summary'
                },
                resolve: new Dependency([
                    'modules/initiateevent/approve_event/view'
                ]),
                authenticate: true
            },
            /* ======= Prepare Event ======= */
            prepare_event: {
                name: 'prepare_event',
                abstract: true,
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/prepare_event'
                    }
                },
                data: {
                    displayName: 'Prepare Event'
                },

                resolve: new Dependency([
                    'modules/prepare_event/reserve/reserve'
                ]),
                authenticate: true
            },

            reserve: {
                name: 'reserve',
                url: '/prepare/reserve',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/prepare_event/reserve/list.html'
                    }
                },
                data: {
                    displayName: 'Reserve'
                },

                resolve: new Dependency([
                    'modules/prepare_event/reserve/reserve',
                    'modules/prepare_event/reserve/list'
                ]),
                authenticate: true
            },
            reserve_resources: {
                name: 'reserve_resources',
                //url: '/resources',
                url: '/:initiateEventId',
                parent: 'reserve',
                views: {
                    '@': {
                        templateUrl: '/modules/prepare_event/reserve/reserve.html'
                    }
                },
                data: {
                    displayName: 'Resources'
                },

                resolve: new Dependency([
                    'modules/prepare_event/reserve/reserve',
                    'modules/prepare_event/reserve/view',
                    'modules/prepare_event/reserve/hr/list',
                    'modules/prepare_event/reserve/equipment/list',
                    'modules/prepare_event/reserve/supplies/list'
                ]),
                authenticate: true
            },
            reserve_hr: {
                name: 'reserve_hr',
                url: '/hr',
                parent: 'reserve_resources',
                views: {
                    '@': {
                        templateUrl: '/modules/prepare_event/reserve/hr/add.html'
                    }
                },
                data: {
                    displayName: 'HR'
                },

                resolve: new Dependency([
                    'modules/prepare_event/reserve/reserve',
                    'modules/prepare_event/reserve/hr/add'
                ]),
                authenticate: true
            },
            reserve_hr_view: {
                name: 'reserve_hr_view',
                url: '/:humanResourceId',
                parent: 'reserve_hr',
                views: {
                    '@': {
                        templateUrl: '/modules/prepare_event/reserve/hr/view.html'
                    }
                },
                data: {
                    displayName: 'View'
                },

                resolve: new Dependency([
                    'modules/prepare_event/reserve/reserve',
                    'modules/prepare_event/reserve/hr/view'
                ]),
                authenticate: true
            },
            reserve_equipment: {
                name: 'reserve_equipment',
                url: '/equipment',
                parent: 'reserve_resources',
                views: {
                    '@': {
                        templateUrl: '/modules/prepare_event/reserve/equipment/add.html'
                    }
                },
                data: {
                    displayName: 'Equipment'
                },

                resolve: new Dependency([
                    'modules/prepare_event/reserve/reserve',
                    'modules/prepare_event/reserve/equipment/add'
                ]),
                authenticate: true
            },
            reserve_equipment_view: {
                name: 'reserve_equipment_view',
                url: '/:equipmentResourceId',
                parent: 'reserve_equipment',
                views: {
                    '@': {
                        templateUrl: '/modules/prepare_event/reserve/equipment/view.html'
                    }
                },
                data: {
                    displayName: 'View'
                },

                resolve: new Dependency([
                    'modules/prepare_event/reserve/reserve',
                    'modules/prepare_event/reserve/equipment/view'
                ]),
                authenticate: true
            },
            reserve_supplies: {
                name: 'reserve_supplies',
                url: '/suppliesreservation',
                parent: 'reserve_resources',
                views: {
                    '@': {
                        templateUrl: '/modules/prepare_event/reserve/supplies/add.html'
                    }
                },
                data: {
                    displayName: 'Supplies Reservation'
                },

                resolve: new Dependency([
                    'modules/prepare_event/reserve/reserve',
                    'modules/prepare_event/reserve/supplies/add'
                ]),
                authenticate: true
            },
            purchase_supplies: {
                name: 'purchase_supplies',
                url: '/suppliesforpurchase',
                parent: 'reserve_resources',
                views: {
                    '@': {
                        templateUrl: '/modules/prepare_event/reserve/supplies/purchase.html'
                    }
                },
                data: {
                    displayName: 'Supplies for Purchase'
                },

                resolve: new Dependency([
                    'modules/prepare_event/reserve/reserve',
                    'modules/prepare_event/reserve/supplies/purchase'
                ]),
                authenticate: true
            },

            /* ======= Confirm Resources ======= */
            confirm: {
                name: 'confirm',
                url: '/prepare/confirm',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/prepare_event/confirm/list.html'
                    }
                },
                data: {
                    displayName: 'Confirm'
                },

                resolve: new Dependency([
                    'modules/prepare_event/confirm/confirm',
                    'modules/prepare_event/confirm/list'
                ]),
                authenticate: true
            },
            confirm_resources: {
                name: 'confirm_resources',
                //url: '/resources',
                url: '/:initiateEventId',
                parent: 'confirm',
                views: {
                    '@': {
                        templateUrl: '/modules/prepare_event/confirm/confirm.html'
                    }
                },
                data: {
                    displayName: 'Resources'
                },

                resolve: new Dependency([
                    'modules/prepare_event/confirm/confirm',
                    'modules/prepare_event/confirm/view',
                    'modules/prepare_event/confirm/hr/hr.tpl.js',
                    'modules/prepare_event/confirm/equipment/equipment.tpl.js'
                ]),
                authenticate: true
            },
            /* ======= Close Event ======= */
            close_event_receive: {
                name: 'close_event_receive',
                url: '/receiveequipment&supplies',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/close_event/receive/list.html'
                    }
                },
                data: {
                    displayName: 'Receive Equipment & Supplies'
                },
                resolve: new Dependency([
                    'modules/close_event/receive/list'
                ]),
                authenticate: true
            },  
            receive: {
                name: 'receive',
                //url: '/view',
                url: '/:initiateEventId',
                parent: 'close_event_receive',
                views: {
                    '@': {
                        templateUrl: '/modules/close_event/receive/receive.html'
                    }
                },
                data: {
                    displayName: 'View'
                },
                resolve: new Dependency([
                    'modules/close_event/receive/receive',
                    'modules/close_event/receive/tpls/view.tpl'
                ]),
                authenticate: true
            },
            close_event_reimbursements: {
                name: 'close_event_reimbursements',
                url: '/reimbursements',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/close_event/reimbursements/list.html'
                    }
                },
                data: {
                    displayName: 'Reimbursements'
                },
                resolve: new Dependency([
                    'modules/close_event/reimbursements/list'
                ]),
                authenticate: true
            },
            reimbursements: {
                name: 'reimbursements',
                //url: '/view',
                url: '/:initiateEventId',
                parent: 'close_event_reimbursements',
                views: {
                    '@': {
                        templateUrl: '/modules/close_event/reimbursements/reimbursements.html'
                    }
                },
                data: {
                    displayName: 'View'
                },
                resolve: new Dependency([
                    'modules/close_event/reimbursements/reimbursements',
                    'modules/close_event/reimbursements/tpls/view.tpl'
                ]),
                authenticate: true
            }, 
            add_billing: {
                name: 'add_billing',
                url: '/add',
                parent: 'reimbursements',
                views: {
                    '@': {
                        templateUrl: '/modules/close_event/reimbursements/add.html'
                    }
                },
                data: {
                    displayName: 'Add'
                },
                resolve: new Dependency([
                    'modules/close_event/reimbursements/reimbursements'
                ]),
                authenticate: true
            }, 
            /* ======= Implement Event ======= */
            implement_event: {
                name: 'implement_event',
                url: '/implement',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/implement_event/list.html'
                    }
                },
                data: {
                    displayName: 'Implement'
                },

                resolve: new Dependency([
                    'modules/implement_event/encode',
                    'modules/implement_event/list'
                ]),
                authenticate: true
            }, 
            encode: {
                name: 'encode',
                //url: '/records',
                url: '/:initiateEventId',
                parent: 'implement_event',
                views: {
                    '@': {
                        templateUrl: '/modules/implement_event/encode.html'
                    }
                },
                data: {
                    displayName: 'Records'
                },

                resolve: new Dependency([
                    'modules/implement_event/encode',
                    'modules/implement_event/list',
                    'modules/implement_event/tpls/view.tpl'
                ]),
                authenticate: true
            },  
            add_templateA: {
                name: 'add_templateA',
                url: '/add',
                parent: 'encode',
                views: {
                    '@': {
                        templateUrl: '/modules/implement_event/add.html'
                    }
                },
                data: {
                    displayName: 'Add'
                },

                authenticate: true
            }, 
            /* ======= Event Financials ======= */
            event_financials: {
                name: 'event_financials',
                url: '/eventfinancials',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/event_financials/list.html'
                    }
                },
                data: {
                    displayName: 'Event Financials'
                },

                resolve: new Dependency([
                    'modules/event_financials/pay',
                    'modules/event_financials/list'

                ]),
                authenticate: true
            },
            pay: {
                name: 'pay',
                url: '/:initiateEventId',
                parent: 'event_financials',
                views: {
                    '@': {
                        templateUrl: '/modules/event_financials/pay.html'
                    }
                },
                data: {
                    displayName: 'Billing'
                },

                resolve: new Dependency([
                    'modules/event_financials/pay',
                    'modules/event_financials/view'
                ]),
                authenticate: true
            }, 
            preparebilling_add: {
                name: 'preparebilling_add',
                url: '/preparebilling/add',
                parent: 'pay',
                views: {
                    '@': {
                        templateUrl: '/modules/event_financials/billing/add.html'
                    }
                },
                data: {
                    displayName: 'Prepare Billing - Add'
                },

                resolve: new Dependency([
                    'modules/event_financials/pay'
                ]),
                authenticate: true
            },
            add_eventpayment: {
                name: 'add_eventpayment',
                url: '/add',
                parent: 'pay',
                views: {
                    '@': {
                        templateUrl: '/modules/event_financials/event/add.html'
                    }
                },
                data: {
                    displayName: 'Billing Payment - Add'
                },

                resolve: new Dependency([
                    'modules/event_financials/pay'
                ]),
                authenticate: true
            }, 
            add_hr: {
                name: 'add_hr',
                url: '/add',
                parent: 'pay',
                views: {
                    '@': {
                        templateUrl: '/modules/event_financials/hr/add.html'
                    }
                },
                data: {
                    displayName: 'Add'
                },

                resolve: new Dependency([
                    'modules/event_financials/pay'
                ]),
                authenticate: true
            }, 
            financials_view_hr: {
                name: 'financials_view_hr',
                url: '/view',
                parent: 'pay',
                views: {
                    '@': {
                        templateUrl: '/modules/event_financials/hr/view.html'
                    }
                },
                data: {
                    displayName: 'View'
                },

                resolve: new Dependency([
                    'modules/event_financials/pay'
                ]),
                authenticate: true
            },
           





            /* ======= Master Files ======= */
            settings_home: {
                name: 'settings_home',
                url: '/settings/home',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/settings/index.html'
                    }
                },
                data: {
                    displayName: 'Settings'
                },
                resolve: new Dependency([
                    'modules/settings/index'
                ]),
                authenticate: true
            },
             /* ======= User ======= */
            settings_user: {
                name: 'settings_user',
                url: '/user',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/user/list.html'
                    }
                },
                data: {
                    displayName: 'User'
                },
                resolve: new Dependency([
                    'modules/user/add',
                    'modules/user/edit',
                    'modules/user/list',
                    'modules/user/view',
                ]),
                authenticate: true
            },
               
              
             /* ======= equipment ======= */
            equipment_master: {
                name: 'equipment_master',
                url: '/equipment',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/inventory/equipment_master/list_equipment.html'
                    }
                },
                data: {
                    displayName: 'Equipment'
                },
                 resolve: new Dependency([
                    'modules/inventory/equipment_master/list_equipment',
                ]),
                authenticate: true
            },
            equipment_add: {
                name: 'equipment_add',
                url: '/add',
                parent: 'equipment_master',
                views: {
                    '@': {
                        templateUrl: '/modules/inventory/equipment_master/add.html'
                    }
                },
                data: {
                    displayName: 'Add'
                },
                resolve: new Dependency([
                    'modules/inventory/equipment_master/add',
                ]),
                authenticate: true
            },

            view_equipment: {
                name: 'view_equipment',
                url: '/:equipmentResourceId',
                parent: 'equipment_master',
                views: {
                    '@': {
                        templateUrl: '/modules/inventory/equipment_master/view_equipment.html'
                    }
                },
                data: {
                    displayName: 'View'
                },
                resolve: new Dependency([
                    'modules/inventory/equipment_master/view_equipment'
                ]),
                authenticate: true
            },
            edit_equipment: {
                name: 'edit_equipment',
                url: '/:equipmentResourceId/edit',
                parent: 'equipment_master',
                views: {
                    '@': {
                        templateUrl: '/modules/inventory/equipment_master/edit.html'
                    }
                },
                data: {
                    displayName: 'Edit'
                },
                resolve: new Dependency([
                    'modules/inventory/equipment_master/edit'
                ]),
                authenticate: true
            },
             /* ======= supplies ======= */
            supplies_master: {
                name: 'supplies_master',
                url: '/supplies',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/inventory/supplies_master/list_supplies.html'
                    }
                },
                data: {
                    displayName: 'Supplies'
                },
                 resolve: new Dependency([
                    'modules/inventory/supplies_master/list_supplies',
                ]),
                authenticate: true
            },
            supplies_add: {
                name: 'supplies_add',
                url: '/add',
                parent: 'supplies_master',
                views: {
                    '@': {
                        templateUrl: '/modules/inventory/supplies_master/add.html'
                    }
                },
                data: {
                    displayName: 'Add'
                },
                resolve: new Dependency([
                    'modules/inventory/supplies_master/add',
                ]),
                authenticate: true
            },

            view_supplies: {
                name: 'view_supplies',
                url: '/:suppliesResourceId',
                parent: 'supplies_master',
                views: {
                    '@': {
                        templateUrl: '/modules/inventory/supplies_master/view_supplies.html'
                    }
                },
                data: {
                    displayName: 'View'
                },
                resolve: new Dependency([
                    'modules/inventory/supplies_master/view_supplies'
                ]),
                authenticate: true
            },
            edit_supplies: {
                name: 'edit_supplies',
                url: '/:suppliesResourceId/edit',
                parent: 'supplies_master',
                views: {
                    '@': {
                        templateUrl: '/modules/inventory/supplies_master/edit.html'
                    }
                },
                data: {
                    displayName: 'Edit'
                },
                resolve: new Dependency([
                    'modules/inventory/supplies_master/edit'
                ]),
                authenticate: true
            },

            /* ======= HR Master ======= */
            hr_master: {
                name: 'hr_master',
                url: '/hr',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/hr_master/list.html'
                    }
                },
                data: {
                    displayName: 'HR'
                },
                resolve: new Dependency([
                    'modules/hr_master/list'
                ]),
                authenticate: true
            }, 
            hr_master_add: {
                name: 'hr_master_add',
                url: '/add',
                parent: 'hr_master',
                views: {
                    '@': {
                        templateUrl: '/modules/hr_master/add.html'
                    }
                },
                data: {
                    displayName: 'Add'
                },
                resolve: new Dependency([
                    'modules/hr_master/add'
                ]),
                authenticate: true
            },    
            hr_master_edit: {
                name: 'hr_master_edit',
                url: '/:humanResourceId/edit',
                parent: 'hr_master',
                views: {
                    '@': {
                        templateUrl: '/modules/hr_master/edit.html'
                    }
                },
                data: {
                    displayName: 'Edit'
                },
                resolve: new Dependency([
                    'modules/hr_master/edit'
                ]),
                authenticate: true
            },   
            view_profile: {
                name: 'view_profile',
                url: '/:humanResourceId',
                parent: 'hr_master',
                views: {
                    '@': {
                        templateUrl: '/modules/hr_master/view_profile.html'
                    }
                },
                data: {
                    displayName: 'View'
                },
                resolve: new Dependency([
                    'modules/hr_master/view_profile'
                ]),
                authenticate: true
            },
            /* ======= Event Type Master ======= */
            eventtype_master: {
                name: 'eventtype_master',
                url: '/eventtype',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/eventtype_master/list.html'
                    }
                },
                data: {
                    displayName: 'Event Types'
                },
                resolve: new Dependency([
                    'modules/eventtype_master/list'
                ]),
                authenticate: true
            }, 
            eventtype_add: {
                name: 'eventtype_add',
                url: '/add',
                parent: 'eventtype_master',
                views: {
                    '@': {
                        templateUrl: '/modules/eventtype_master/add.html'
                    }
                },
                data: {
                    displayName: 'Add'
                },
                resolve: new Dependency([
                    'modules/eventtype_master/add'
                ]),
                authenticate: true
            },
            eventtype_view: {
                name: 'eventtype_view',
                url: '/:eventtypeId',
                parent: 'eventtype_master',
                views: {
                    '@': {
                        templateUrl: '/modules/eventtype_master/view.html'
                    }
                },
                data: {
                    displayName: 'View'
                },
                resolve: new Dependency([
                    'modules/eventtype_master/view'
                ]),
                authenticate: true
            },
            eventtype_edit: {
                name: 'eventtype_edit',
                url: '/:eventtypeId/edit',
                parent: 'eventtype_master',
                views: {
                    '@': {
                        templateUrl: '/modules/eventtype_master/edit.html'
                    }
                },
                data: {
                    displayName: 'Edit'
                },
                resolve: new Dependency([
                    'modules/eventtype_master/edit'
                ]),
                authenticate: true
            },

            /* ======= Parent Event Master ======= */
            parent_event: {
                name: 'parent_event',
                url: '/parent',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/parent_event/list.html'
                    }
                },
                data: {
                    displayName: 'Parent Events'
                },
                resolve: new Dependency([
                    'modules/parent_event/list'
                ]),
                authenticate: true
            }, 
            
            parentevent_add: {
                name: 'parentevent_add',
                url: '/add',
                parent: 'parent_event',
                views: {
                    '@': {
                        templateUrl: '/modules/parent_event/add.html'
                    }
                },
                data: {
                    displayName: 'Add'
                },
                resolve: new Dependency([
                    'modules/parent_event/add'
                ]),
                authenticate: true
            },
            parent_event_summary: {
                name: 'parent_event_summary',
                url: '/:initiateEventId',
                parent: 'parentevent_add',
                views: {
                    '@': {
                        templateUrl: '/modules/parent_event/event/view.html'
                    }
                },
                data: {
                    displayName: 'Summary'
                },
                resolve: new Dependency([
                    'modules/parent_event/event/view'
                ]),
                authenticate: true
            }, 
            parentevent_view: {
                name: 'parentevent_view',
                url: '/:parenteventId',
                parent: 'parent_event',
                views: {
                    '@': {
                        templateUrl: '/modules/parent_event/view.html'
                    }
                },
                data: {
                    displayName: 'View'
                },
                resolve: new Dependency([
                    'modules/parent_event/view'
                ]),
                authenticate: true
            },
            parentevent_edit: {
                name: 'parentevent_edit',
                url: '/:parenteventId/edit',
                parent: 'parent_event',
                views: {
                    '@': {
                        templateUrl: '/modules/parent_event/edit.html'
                    }
                },
                data: {
                    displayName: 'Edit'
                },
                resolve: new Dependency([
                    'modules/parent_event/edit'
                ]),
                authenticate: true
            }

        }
    };
});
