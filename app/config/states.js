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
                    displayName: 'Propose Event'
                },
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
                authenticate: true
            },
            propose_event_view: {
                name: 'propose_event_view',
                url: '/view',
                parent: 'propose_event',
                views: {
                    '@': {
                        templateUrl: '/modules/initiateevent/propose_event/view.html'
                    }
                },
                data: {
                    displayName: 'View'
                },
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
                    displayName: 'Approve Event'
                },
                authenticate: true
            },
            approve_event_approve: {
                name: 'approve_event_approve',
                url: '/approve',
                parent: 'approve_event',
                views: {
                    '@': {
                        templateUrl: '/modules/initiateevent/approve_event/approve.html'
                    }
                },
                data: {
                    displayName: 'Approve'
                },
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
                url: '/prepare_event/reserve',
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
                    'modules/prepare_event/reserve/reserve'
                ]),
                authenticate: true
            },
            reserve_resources: {
                name: 'reserve_resources',
                url: '/reserve',
                parent: 'reserve',
                views: {
                    '@': {
                        templateUrl: '/modules/prepare_event/reserve/reserve.html'
                    }
                },
                data: {
                    displayName: 'Reserve Resources'
                },

                resolve: new Dependency([
                    'modules/prepare_event/reserve/reserve'
                ]),
                authenticate: true
            },
            reserve_hr: {
                name: 'reserve_hr',
                url: '/addhumanresources',
                parent: 'reserve_resources',
                views: {
                    '@': {
                        templateUrl: '/modules/prepare_event/reserve/addhumanresources.html'
                    }
                },
                data: {
                    displayName: 'Reserve HR'
                },

                resolve: new Dependency([
                    'modules/prepare_event/reserve/reserve'
                ]),
                authenticate: true
            },
            reserve_equipment: {
                name: 'reserve_equipment',
                url: '/addequipment',
                parent: 'reserve_resources',
                views: {
                    '@': {
                        templateUrl: '/modules/prepare_event/reserve/addequipment.html'
                    }
                },
                data: {
                    displayName: 'Reserve Equipment'
                },

                resolve: new Dependency([
                    'modules/prepare_event/reserve/reserve'
                ]),
                authenticate: true
            },
            reserve_supplies: {
                name: 'reserve_supplies',
                url: '/addsupplies',
                parent: 'reserve_resources',
                views: {
                    '@': {
                        templateUrl: '/modules/prepare_event/reserve/addsupplies.html'
                    }
                },
                data: {
                    displayName: 'Reserve Supplies'
                },

                resolve: new Dependency([
                    'modules/prepare_event/reserve/reserve'
                ]),
                authenticate: true
            },
            /* ======= Confirm Resources ======= */
            confirm: {
                name: 'confirm',
                url: '/prepare_event/confirm',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/prepare_event/confirm/confirmresources.html'
                    }
                },
                data: {
                    displayName: 'Confirm'
                },

                resolve: new Dependency([
                    'modules/prepare_event/confirm/confirm'
                ]),
                authenticate: true
            },
            confirm_resources: {
                name: 'confirm_resources',
                url: '/confirm',
                parent: 'confirm',
                views: {
                    '@': {
                        templateUrl: '/modules/prepare_event/confirm/confirm.html'
                    }
                },
                data: {
                    displayName: 'Confirm Resources'
                },

                resolve: new Dependency([
                    'modules/prepare_event/confirm/confirm'
                ]),
                authenticate: true
            },
            /* ======= Close Event ======= */
            close_event_receive: {
                name: 'close_event_receive',
                url: '/close_event/receive',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/close_event/receive/list.html'
                    }
                },
                data: {
                    displayName: 'Close Event-Receive'
                },
                authenticate: true
            },  
            receive: {
                name: 'receive',
                url: '/close',
                parent: 'close_event_receive',
                views: {
                    '@': {
                        templateUrl: '/modules/close_event/receive/close.html'
                    }
                },
                data: {
                    displayName: 'Receive Equipment/Supplies'
                },
                authenticate: true
            },
            close_event_reimbursements: {
                name: 'close_event_reimbursements',
                url: '/close_event/reimbursements',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/close_event/reimbursements/list.html'
                    }
                },
                data: {
                    displayName: 'Close Event-Reimbursements'
                },
                authenticate: true
            },
            reimbursements: {
                name: 'reimbursements',
                url: '/enter',
                parent: 'close_event_reimbursements',
                views: {
                    '@': {
                        templateUrl: '/modules/close_event/reimbursements/enter.html'
                    }
                },
                data: {
                    displayName: 'Reimburse'
                },
                authenticate: true
            }, 
            /* ======= Implement Event ======= */
            implement_event: {
                name: 'implement_event',
                url: '/implement_event',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/implement_event/list.html'
                    }
                },
                data: {
                    displayName: 'Implement Event'
                },

                resolve: new Dependency([
                    'modules/implement_event/encode'
                ]),
                authenticate: true
            }, 
            encode: {
                name: 'encode',
                url: '/encode',
                parent: 'implement_event',
                views: {
                    '@': {
                        templateUrl: '/modules/implement_event/encode.html'
                    }
                },
                data: {
                    displayName: 'Encode'
                },

                resolve: new Dependency([
                    'modules/implement_event/encode'
                ]),
                authenticate: true
            },   
            /* ======= Event Financials ======= */
            event_financials: {
                name: 'event_financials',
                url: '/event_financials',
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
                    'modules/event_financials/pay'
                ]),
                authenticate: true
            },
            pay: {
                name: 'pay',
                url: '/pay',
                parent: 'event_financials',
                views: {
                    '@': {
                        templateUrl: '/modules/event_financials/pay.html'
                    }
                },
                data: {
                    displayName: 'Payment'
                },

                resolve: new Dependency([
                    'modules/event_financials/pay'
                ]),
                authenticate: true
            }, 
            add: {
                name: 'add',
                url: '/add',
                parent: 'event_financials',
                views: {
                    '@': {
                        templateUrl: '/modules/event_financials/add.html'
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
            add_hr: {
                name: 'add_hr',
                url: '/add_hr',
                parent: 'event_financials',
                views: {
                    '@': {
                        templateUrl: '/modules/event_financials/add_hr.html'
                    }
                },
                data: {
                    displayName: 'Add HR Payment'
                },

                resolve: new Dependency([
                    'modules/event_financials/pay'
                ]),
                authenticate: true
            }, 
            view_hr: {
                name: 'view_hr',
                url: '/view_hr',
                parent: 'event_financials',
                views: {
                    '@': {
                        templateUrl: '/modules/event_financials/view_hr.html'
                    }
                },
                data: {
                    displayName: 'View HR Payment Summary'
                },

                resolve: new Dependency([
                    'modules/event_financials/pay'
                ]),
                authenticate: true
            },
             /* ======= User ======= */
            user: {
                name: 'user',
                url: '/user',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/user/list.html'
                    }
                },
                data: {
                    displayName: 'Users'
                },
                resolve: new Dependency([
                    'modules/user/add',
                    'modules/user/edit',
                    'modules/user/list',
                    'modules/user/view',
                ]),
                authenticate: true
            },
               
              
             /* ======= Inventory ======= */
            equipment_master: {
                name: 'equipment_master',
                url: '/inventory/equipment_master',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/inventory/equipment_master/list_equipment'
                    }
                },
                data: {
                    displayName: 'Equipment Master'
                },
                authenticate: true
            },
            supplies_master: {
                name: 'supplies_master',
                url: '/inventory/supplies_master',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/inventory/supplies_master/list_supplies'
                    }
                },
                data: {
                    displayName: 'Supplies Master'
                },
                authenticate: true
            },

            /* ======= HR Master ======= */
            hr_master: {
                name: 'hr_master',
                url: '/hr_master',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/hr_master/list.html'
                    }
                },
                data: {
                    displayName: 'HR Master'
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
                    displayName: 'Add Human Resource'
                },
                resolve: new Dependency([
                    'modules/hr_master/add'
                ]),
                authenticate: true
            },       
            view_profile: {
                name: 'view_profile',
                url: '/view_profile/:humanResourceId',
                parent: 'hr_master',
                views: {
                    '@': {
                        templateUrl: '/modules/hr_master/view_profile.html'
                    }
                },
                data: {
                    displayName: 'Profile'
                },

                authenticate: true
            }               

        }
    };
});