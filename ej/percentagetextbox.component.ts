import { CreateComponent, Utils, Type, CreateControlValueAccessor } from './core';

let Outputs = ['change', 'create', 'destroy', 'focusIn', 'focusOut'
    ];
let ComplexProperties = [];
let Inputs = Utils.AngularizeInputs(['cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL',
    'enableStrictMode', 'groupSize', 'groupSeparator', 'height', 'htmlAttributes',
    'incrementStep', 'locale', 'maxValue', 'minValue', 'name',
    'negativePattern', 'positivePattern', 'readOnly', 'showRoundedCorner', 'showSpinButton',
    'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText',
    'width'], []);
export let PercentageTextboxComponent = CreateComponent('PercentageTextbox', {
    selector: '[ej-percentagetextbox]',
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

export let PercentageTextboxValueAccessor = CreateControlValueAccessor('[ej-percentagetextbox]', PercentageTextboxComponent);
export const EJ_PERCENTAGETEXTBOX_COMPONENTS: Type<any>[] = [PercentageTextboxComponent , PercentageTextboxValueAccessor ];

