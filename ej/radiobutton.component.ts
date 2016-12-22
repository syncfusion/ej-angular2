import { CreateComponent, Utils, Type, CreateControlValueAccessor } from './core';

let Outputs = ['beforeChange', 'change', 'create', 'destroy'
    ];
let ComplexProperties = [];
let Inputs = Utils.AngularizeInputs(['checked', 'cssClass', 'enabled', 'enablePersistence', 'enableRTL',
    'htmlAttributes', 'id', 'idPrefix', 'name', 'size',
    'text', 'validationMessage', 'validationRules', 'value'], []);
export let RadioButtonComponent = CreateComponent('RadioButton', {
    selector: '[ej-radiobutton]',
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

export let RadioButtonValueAccessor = CreateControlValueAccessor('[ej-radiobutton]', RadioButtonComponent);
export const EJ_RADIOBUTTON_COMPONENTS: Type<any>[] = [RadioButtonComponent , RadioButtonValueAccessor ];

