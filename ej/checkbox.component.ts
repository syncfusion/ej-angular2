import { CreateComponent, Utils, Type } from './core';

let Outputs = ['beforeChange', 'change', 'create', 'destroy'
    , 'model.checkedChange: checkedChange'];
let ComplexProperties = [];
let Inputs = Utils.AngularizeInputs(['checkState', 'cssClass', 'enabled', 'enablePersistence', 'enableRTL',
    'enableTriState', 'htmlAttributes', 'id', 'idPrefix', 'name',
    'showRoundedCorner', 'size', 'text', 'validationMessage', 'validationRules',
    'value'], ['checked']);
export let CheckBoxComponent = CreateComponent('CheckBox', {
    selector: 'ej-checkbox',
    inputs: Inputs,
    outputs: Outputs,
    template: '',
    queries: {
    }
}, {
        tags: [],
        twoways: ['checked'],
        complexes: ComplexProperties,
    });

export const EJ_CHECKBOX_COMPONENTS: Type<any>[] = [CheckBoxComponent  ];

