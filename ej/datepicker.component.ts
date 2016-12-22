import { CreateComponent, Utils, Type, CreateControlValueAccessor } from './core';

let Outputs = ['beforeClose', 'beforeDateCreate', 'beforeOpen', 'change', 'close',
    'create', 'destroy', 'focusIn', 'focusOut', 'navigate',
    'open', 'select'
    ];
let ComplexProperties = ['fields'];
let Inputs = Utils.AngularizeInputs(['allowEdit', 'allowDrillDown', 'blackoutDates', 'buttonText', 'cssClass',
    'dateFormat', 'dayHeaderFormat', 'depthLevel', 'displayInline', 'enableAnimation',
    'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'fields',
    'headerFormat', 'height', 'highlightSection', 'highlightWeekend', 'htmlAttributes',
    'locale', 'maxDate', 'minDate', 'readOnly', 'showDisabledRange',
    'showFooter', 'showOtherMonths', 'showPopupButton', 'showRoundedCorner', 'showTooltip',
    'specialDates', 'startDay', 'startLevel', 'stepMonths', 'tooltipFormat',
    'validationMessage', 'validationRules', 'value', 'watermarkText', 'width',
    'fields.date', 'fields.iconClass', 'fields.tooltip', 'fields.cssClass'], []);
export let DatePickerComponent = CreateComponent('DatePicker', {
    selector: '[ej-datepicker]',
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

export let DatePickerValueAccessor = CreateControlValueAccessor('[ej-datepicker]', DatePickerComponent);
export const EJ_DATEPICKER_COMPONENTS: Type<any>[] = [DatePickerComponent , DatePickerValueAccessor ];

