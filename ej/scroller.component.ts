import { CreateComponent, Utils, Type } from './core';

let Outputs = ['create', 'destroy', 'thumbMove', 'thumbStart', 'thumbEnd',
    'wheelMove', 'wheelStart', 'wheelStop'
    ];
let ComplexProperties = [];
let Inputs = Utils.AngularizeInputs(['animationSpeed', 'autoHide', 'buttonSize', 'enabled', 'enablePersistence',
    'enableRTL', 'enableTouchScroll', 'height', 'scrollerSize', 'scrollLeft',
    'scrollOneStepBy', 'scrollTop', 'targetPane', 'width'], []);
export let ScrollerComponent = CreateComponent('Scroller', {
    selector: 'ej-scroller',
    inputs: Inputs,
    outputs: Outputs,
    template: '<ng-content></ng-content>',
    queries: {
    }
}, {
        tags: [],
        twoways: [],
        complexes: ComplexProperties,
    });

export const EJ_SCROLLER_COMPONENTS: Type<any>[] = [ScrollerComponent  ];

