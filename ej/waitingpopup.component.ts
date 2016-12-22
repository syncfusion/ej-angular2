import { CreateComponent, Utils, Type } from './core';

let Outputs = ['create', 'destroy'
    ];
let ComplexProperties = [];
let Inputs = Utils.AngularizeInputs(['cssClass', 'htmlAttributes', 'showImage', 'showOnInit', 'target',
    'appendTo', 'template', 'text'], []);
export let WaitingPopupComponent = CreateComponent('WaitingPopup', {
    selector: 'ej-waitingpopup',
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

export const EJ_WAITINGPOPUP_COMPONENTS: Type<any>[] = [WaitingPopupComponent  ];

