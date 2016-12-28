import { CreateComponent, Utils, Type } from './core';

let Outputs = ['ajaxComplete', 'ajaxError', 'ajaxSuccess', 'beforeClose', 'open',
    'swipe'
    ];
let ComplexProperties = ['ajaxSettings'];
let Inputs = Utils.AngularizeInputs(['ajaxSettings', 'contentId', 'cssClass', 'direction', 'enableListView',
    'items', 'listViewSettings', 'position', 'targetId', 'type',
    'width', 'isPaneOpen', 'ajaxSettings.async', 'ajaxSettings.cache', 'ajaxSettings.contentType',
    'ajaxSettings.data', 'ajaxSettings.dataType', 'ajaxSettings.type'], []);
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

