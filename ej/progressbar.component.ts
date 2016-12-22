import { CreateComponent, Utils, Type } from './core';

let Outputs = ['change', 'complete', 'create', 'destroy', 'start'
    ];
let ComplexProperties = [];
let Inputs = Utils.AngularizeInputs(['cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'height',
    'htmlAttributes', 'maxValue', 'minValue', 'percentage', 'showRoundedCorner',
    'text', 'value', 'width'], []);
export let ProgressBarComponent = CreateComponent('ProgressBar', {
    selector: 'ej-progressbar',
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

export const EJ_PROGRESSBAR_COMPONENTS: Type<any>[] = [ProgressBarComponent  ];

