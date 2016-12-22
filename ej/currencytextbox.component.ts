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
export let CurrencyTextboxComponent = CreateComponent('CurrencyTextbox', {
    selector: '[ej-currencytextbox]',
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

export let CurrencyTextboxValueAccessor = CreateControlValueAccessor('[ej-currencytextbox]', CurrencyTextboxComponent);
export const EJ_CURRENCYTEXTBOX_COMPONENTS: Type<any>[] = [CurrencyTextboxComponent , CurrencyTextboxValueAccessor ];

