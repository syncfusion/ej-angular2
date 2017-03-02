import { CreateComponent, Utils, Type, CreateControlValueAccessor } from './core';

let Outputs = ['change', 'create', 'destroy', 'focusIn', 'focusOut'
    ];
let ComplexProperties = [];
let Inputs = Utils.AngularizeInputs(['currencySymbol', 'cssClass', 'decimalPlaces', 'enabled', 'enablePersistence',
    'enableRTL', 'enableStrictMode', 'groupSize', 'groupSeparator', 'height',
    'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue',
    'name', 'negativePattern', 'positivePattern', 'readOnly', 'showRoundedCorner',
    'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value',
    'watermarkText', 'width'], []);
export let NumericTextboxComponent = CreateComponent('NumericTextbox', {
    selector: '[ej-numerictextbox]',
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

export let NumericTextboxValueAccessor = CreateControlValueAccessor('[ej-numerictextbox]', NumericTextboxComponent);
export const EJ_NUMERICTEXTBOX_COMPONENTS: Type<any>[] = [NumericTextboxComponent , NumericTextboxValueAccessor];

