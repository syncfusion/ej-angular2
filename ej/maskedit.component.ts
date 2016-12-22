import { CreateComponent, Utils, Type, CreateControlValueAccessor } from './core';

let Outputs = ['change', 'create', 'destroy', 'focusIn', 'focusOut',
    'keydown', 'keyPress', 'keyup', 'mouseOut', 'mouseOver'
    ];
let ComplexProperties = [];
let Inputs = Utils.AngularizeInputs(['cssClass', 'customCharacter', 'enabled', 'enablePersistence', 'height',
    'hidePromptOnLeave', 'htmlAttributes', 'inputMode', 'maskFormat', 'name',
    'readOnly', 'showError', 'showPromptChar', 'showRoundedCorner', 'textAlign',
    'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], []);
export let MaskEditComponent = CreateComponent('MaskEdit', {
    selector: '[ej-maskedit]',
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

export let MaskEditValueAccessor = CreateControlValueAccessor('[ej-maskedit]', MaskEditComponent);
export const EJ_MASKEDIT_COMPONENTS: Type<any>[] = [MaskEditComponent , MaskEditValueAccessor ];

