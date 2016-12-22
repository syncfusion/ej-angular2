import { CreateComponent, Utils, Type } from './core';

let Outputs = ['beforeExpandCollapse', 'create', 'destroy', 'expandCollapse', 'resize'
    ];
let ComplexProperties = [];
let Inputs = Utils.AngularizeInputs(['allowKeyboardNavigation', 'animationSpeed', 'cssClass', 'enableAnimation', 'enableRTL',
    'height', 'htmlAttributes', 'isResponsive', 'orientation', 'properties',
    'width'], []);
export let SplitterComponent = CreateComponent('Splitter', {
    selector: 'ej-splitter',
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

export const EJ_SPLITTER_COMPONENTS: Type<any>[] = [SplitterComponent  ];

