import { CreateComponent, Utils, Type } from './core';

let Outputs = ['change', 'click', 'create', 'destroy'
    ];
let ComplexProperties = [];
let Inputs = Utils.AngularizeInputs(['activePrefixIcon', 'activeSuffixIcon', 'activeText', 'contentType', 'cssClass',
    'defaultPrefixIcon', 'defaultSuffixIcon', 'defaultText', 'enabled', 'enablePersistence',
    'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'preventToggle',
    'showRoundedCorner', 'size', 'toggleState', 'type', 'width'], []);
export let ToggleButtonComponent = CreateComponent('ToggleButton', {
    selector: 'ej-togglebutton',
    inputs: Inputs,
    outputs: Outputs,
    template: '',
    queries: {
    }
}, {
        tags: [],
        twoways: [],
        complexes: ComplexProperties,
    });

export const EJ_TOGGLEBUTTON_COMPONENTS: Type<any>[] = [ToggleButtonComponent  ];

