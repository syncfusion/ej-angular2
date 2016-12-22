import { CreateComponent, Utils, Type, CreateControlValueAccessor } from './core';

let Outputs = ['beforeClose', 'beforeOpen', 'change', 'close', 'create',
    'destroy', 'focusIn', 'focusOut', 'open'
    ];
let ComplexProperties = ['buttonText', 'timeDrillDown'];
let Inputs = Utils.AngularizeInputs(['buttonText', 'cssClass', 'dateTimeFormat', 'dayHeaderFormat', 'depthLevel',
    'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode',
    'headerFormat', 'height', 'htmlAttributes', 'interval', 'locale',
    'maxDateTime', 'minDateTime', 'popupPosition', 'readOnly', 'showOtherMonths',
    'showPopupButton', 'showRoundedCorner', 'startDay', 'startLevel', 'stepMonths',
    'timeDisplayFormat', 'timeDrillDown', 'timePopupWidth', 'validationMessage', 'validationRules',
    'value', 'watermarkText', 'width', 'buttonText.done', 'buttonText.timeNow',
    'buttonText.timeTitle', 'buttonText.today', 'timeDrillDown.enabled', 'timeDrillDown.interval', 'timeDrillDown.showMeridian',
    'timeDrillDown.autoClose'], []);
export let DateTimePickerComponent = CreateComponent('DateTimePicker', {
    selector: '[ej-datetimepicker]',
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

export let DateTimePickerValueAccessor = CreateControlValueAccessor('[ej-datetimepicker]', DateTimePickerComponent);
export const EJ_DATETIMEPICKER_COMPONENTS: Type<any>[] = [DateTimePickerComponent , DateTimePickerValueAccessor ];

