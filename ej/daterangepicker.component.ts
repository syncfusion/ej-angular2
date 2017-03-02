import { CreateComponent, Utils, Type, CreateControlValueAccessor } from './core';

let Outputs = ['beforeClose', 'beforeOpen', 'onChange', 'close', 'create',
    'destroy', 'open', 'select'
    ];
let ComplexProperties = [];
let Inputs = Utils.AngularizeInputs(['allowEdit', 'buttonText', 'cssClass', 'dateFormat', 'enableTimePicker',
    'enabled', 'enablePersistence', 'endDate', 'height', 'locale',
    'ranges', 'startDate', 'showPopupButton', 'showRoundedCorner', 'timeFormat',
    'value', 'watermarkText', 'width'], []);
export let DateRangePickerComponent = CreateComponent('DateRangePicker', {
    selector: '[ej-daterangepicker]',
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

export let DateRangePickerValueAccessor = CreateControlValueAccessor('[ej-daterangepicker]', DateRangePickerComponent);
export const EJ_DATERANGEPICKER_COMPONENTS: Type<any>[] = [DateRangePickerComponent , DateRangePickerValueAccessor];

