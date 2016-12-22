import { CreateComponent, Utils, Type, CreateControlValueAccessor } from './core';

let Outputs = ['click', 'create', 'destroy'
    ];
let ComplexProperties = [];
let Inputs = Utils.AngularizeInputs(['contentType', 'cssClass', 'enabled', 'enableRTL', 'height',
    'htmlAttributes', 'imagePosition', 'prefixIcon', 'repeatButton', 'showRoundedCorner',
    'size', 'suffixIcon', 'text', 'timeInterval', 'type',
    'width'], []);
export let ButtonComponent = CreateComponent('Button', {
    selector: '[ej-button]',
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

export let ButtonValueAccessor = CreateControlValueAccessor('[ej-button]', ButtonComponent);
export const EJ_BUTTON_COMPONENTS: Type<any>[] = [ButtonComponent , ButtonValueAccessor ];

