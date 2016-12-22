import { CreateComponent, Utils, Type } from './core';

let Outputs = ['click', 'create', 'destroy', 'mouseout', 'mouseover'
    ];
let ComplexProperties = ['fields'];
let Inputs = Utils.AngularizeInputs(['cssClass', 'dataSource', 'enableRTL', 'fields', 'htmlAttributes',
    'format', 'maxFontSize', 'minFontSize', 'query', 'showTitle',
    'titleImage', 'titleText', 'fields.frequency', 'fields.htmlAttributes', 'fields.text',
    'fields.url'], []);
export let TagCloudComponent = CreateComponent('TagCloud', {
    selector: 'ej-tagcloud',
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

export const EJ_TAGCLOUD_COMPONENTS: Type<any>[] = [TagCloudComponent  ];

