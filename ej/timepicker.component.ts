import { CreateComponent, Utils, Type, CreateControlValueAccessor } from './core';

let Outputs = ['beforeChange', 'beforeOpen', 'change', 'close', 'create',
    'destroy', 'focusIn', 'focusOut', 'open', 'select'
    ];
let ComplexProperties = [];
let Inputs = Utils.AngularizeInputs(['cssClass', 'disableTimeRanges', 'enableAnimation', 'enabled', 'enablePersistence',
    'enableRTL', 'enableStrictMode', 'height', 'hourInterval', 'htmlAttributes',
    'interval', 'locale', 'maxTime', 'minTime', 'minutesInterval',
    'popupHeight', 'popupWidth', 'readOnly', 'secondsInterval', 'showPopupButton',
    'showRoundedCorner', 'timeFormat', 'value', 'width'], []);
export let TimePickerComponent = CreateComponent('TimePicker', {
    selector: '[ej-timepicker]',
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

export let TimePickerValueAccessor = CreateControlValueAccessor('[ej-timepicker]', TimePickerComponent);
export const EJ_TIMEPICKER_COMPONENTS: Type<any>[] = [TimePickerComponent , TimePickerValueAccessor ];

