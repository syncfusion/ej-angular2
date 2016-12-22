import { CreateComponent, Utils, Type } from './core';

let Outputs = ['change', 'mouseDown', 'mouseMove', 'mouseUp'
    ];
let ComplexProperties = [];
let Inputs = Utils.AngularizeInputs(['backgroundColor', 'backgroundImage', 'enabled', 'height', 'isResponsive',
    'saveImageFormat', 'saveWithBackground', 'showRoundedCorner', 'strokeColor', 'strokeWidth',
    'width'], []);
export let SignatureComponent = CreateComponent('Signature', {
    selector: 'ej-signature',
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

export const EJ_SIGNATURE_COMPONENTS: Type<any>[] = [SignatureComponent  ];

