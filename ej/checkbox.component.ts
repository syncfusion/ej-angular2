import { CreateComponent, Utils, Type } from './core';

let Outputs = ['beforeChange', 'change', 'create', 'destroy'
    , 'model.checkedChange: checkedChange', 'model.checkStateChange: checkStateChange'];
let ComplexProperties = [];
let Inputs = Utils.AngularizeInputs(['cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'enableTriState',
    'htmlAttributes', 'id', 'idPrefix', 'name', 'showRoundedCorner',
    'size', 'text', 'validationMessage', 'validationRules', 'value'], ['checked', 'checkState']);
export let CheckBoxComponent = CreateComponent('CheckBox', {
    selector: 'ej-checkbox',
    inputs: Inputs,
    outputs: Outputs,
    template: '',
    queries: {
    }
}, {
        tags: [],
        twoways: ['checked', 'checkState'],
        complexes: ComplexProperties,
    });

export const EJ_CHECKBOX_COMPONENTS: Type<any>[] = [CheckBoxComponent ];

