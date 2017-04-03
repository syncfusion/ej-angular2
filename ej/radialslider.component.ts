import { CreateComponent, Utils, Type } from './core';

let Outputs = ['change', 'create', 'mouseover', 'slide', 'start',
    'stop'
    , 'model.valueChange: valueChange'];
let ComplexProperties = [];
let Inputs = Utils.AngularizeInputs(['autoOpen', 'cssClass', 'enableAnimation', 'enableRoundOff', 'endAngle',
    'inline', 'innerCircleImageClass', 'innerCircleImageUrl', 'labelSpace', 'radius',
    'showInnerCircle', 'startAngle', 'strokeWidth', 'ticks'], ['value']);
export let RadialSliderComponent = CreateComponent('RadialSlider', {
    selector: 'ej-radialslider',
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

export const EJ_RADIALSLIDER_COMPONENTS: Type<any>[] = [RadialSliderComponent ];

