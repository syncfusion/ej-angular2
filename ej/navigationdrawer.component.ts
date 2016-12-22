import { CreateComponent, Utils, Type } from './core';

let Outputs = ['beforeClose', 'open', 'swipe'
    ];
let ComplexProperties = [];
let Inputs = Utils.AngularizeInputs(['contentId', 'cssClass', 'direction', 'enableListView', 'items',
    'listViewSettings', 'position', 'targetId', 'type', 'width',
    'isPaneOpen'], []);
export let NavigationDrawerComponent = CreateComponent('NavigationDrawer', {
    selector: '[ej-navigationdrawer]',
    inputs: Inputs,
    outputs: Outputs,
    template: '<ng-content></ng-content>',
    queries: {
    }
}, {
        tags: [],
        twoways: [],
        complexes: ComplexProperties,
    });

export const EJ_NAVIGATIONDRAWER_COMPONENTS: Type<any>[] = [NavigationDrawerComponent  ];

