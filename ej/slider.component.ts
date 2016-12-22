import { CreateComponent, Utils, Type } from './core';

let Outputs = ['change', 'create', 'destroy', 'slide', 'start',
    'stop', 'tooltipChange'
    , 'model.valueChange: valueChange'];
let ComplexProperties = [];
let Inputs = Utils.AngularizeInputs(['allowMouseWheel', 'animationSpeed', 'cssClass', 'enableAnimation', 'enabled',
    'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'incrementStep',
    'largeStep', 'maxValue', 'minValue', 'orientation', 'readOnly',
    'showRoundedCorner', 'showScale', 'showSmallTicks', 'showTooltip', 'sliderType',
    'smallStep', 'values', 'width'], ['value']);
export let SliderComponent = CreateComponent('Slider', {
    selector: 'ej-slider',
    inputs: Inputs,
    outputs: Outputs,
    template: '',
    queries: {
    }
}, {
        tags: [],
        twoways: ['value'],
        complexes: ComplexProperties,
    });

export const EJ_SLIDER_COMPONENTS: Type<any>[] = [SliderComponent  ];

