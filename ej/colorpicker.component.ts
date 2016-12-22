import { CreateComponent, Utils, Type, CreateControlValueAccessor } from './core';

let Outputs = ['change', 'close', 'create', 'destroy', 'open',
    'select'
    , 'model.valueChange: valueChange', 'model.opacityValueChange: opacityValueChange'];
let ComplexProperties = ['buttonText', 'tooltipText'];
let Inputs = Utils.AngularizeInputs(['buttonText', 'buttonMode', 'columns', 'cssClass', 'custom',
    'displayInline', 'enabled', 'enableOpacity', 'htmlAttributes', 'locale',
    'modelType', 'palette', 'presetType', 'showApplyCancel', 'showClearButton',
    'showPreview', 'showRecentColors', 'showSwitcher', 'showTooltip', 'toolIcon',
    'tooltipText', 'buttonText.apply', 'buttonText.cancel', 'buttonText.swatches', 'tooltipText.switcher',
    'tooltipText.addbutton', 'tooltipText.basic', 'tooltipText.monochrome', 'tooltipText.flatcolors', 'tooltipText.seawolf',
    'tooltipText.webcolors', 'tooltipText.sandy', 'tooltipText.pinkshades', 'tooltipText.misty', 'tooltipText.citrus',
    'tooltipText.vintage', 'tooltipText.moonlight', 'tooltipText.candycrush', 'tooltipText.currentcolor', 'tooltipText.selectedcolor'], ['value', 'opacityValue']);
export let ColorPickerComponent = CreateComponent('ColorPicker', {
    selector: '[ej-colorpicker]',
    inputs: Inputs,
    outputs: Outputs,
    template: '',
    queries: {
    }
}, {
        tags: [],
        twoways: ['value', 'opacityValue'],
        complexes: ComplexProperties,
    });

export let ColorPickerValueAccessor = CreateControlValueAccessor('[ej-colorpicker]', ColorPickerComponent);
export const EJ_COLORPICKER_COMPONENTS: Type<any>[] = [ColorPickerComponent , ColorPickerValueAccessor ];

