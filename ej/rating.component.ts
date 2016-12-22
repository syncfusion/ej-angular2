import { CreateComponent, Utils, Type } from './core';

let Outputs = ['change', 'click', 'create', 'destroy', 'mouseout',
    'mouseover'
    , 'model.valueChange: valueChange'];
let ComplexProperties = [];
let Inputs = Utils.AngularizeInputs(['allowReset', 'cssClass', 'enabled', 'enablePersistence', 'height',
    'htmlAttributes', 'incrementStep', 'maxValue', 'minValue', 'orientation',
    'precision', 'readOnly', 'shapeHeight', 'shapeWidth', 'showTooltip',
    'width'], ['value']);
export let RatingComponent = CreateComponent('Rating', {
    selector: 'ej-rating',
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

export const EJ_RATING_COMPONENTS: Type<any>[] = [RatingComponent  ];

