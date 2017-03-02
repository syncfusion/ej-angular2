import { CreateComponent, Utils, Type } from './core';

let Outputs = ['beforeSelect', 'create', 'destroy', 'keyPress', 'select'
    ];
let ComplexProperties = [];
let Inputs = Utils.AngularizeInputs(['cssClass', 'dataSource', 'enableRTL', 'enabled', 'fields',
    'groupButtonMode', 'height', 'htmlAttributes', 'orientation', 'query',
    'selectedItemIndex', 'showRoundedCorner', 'size', 'width'], []);
export let GroupButtonComponent = CreateComponent('GroupButton', {
    selector: 'ej-groupbutton',
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

export const EJ_GROUPBUTTON_COMPONENTS: Type<any>[] = [GroupButtonComponent ];

