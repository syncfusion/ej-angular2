import { CreateComponent, Utils, Type } from './core';

let Outputs = [];
let ComplexProperties = [];
let Inputs = Utils.AngularizeInputs(['sourceID', 'height', 'width'], []);
export let OverviewComponent = CreateComponent('Overview', {
    selector: 'ej-overview',
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

export const EJ_OVERVIEW_COMPONENTS: Type<any>[] = [OverviewComponent  ];

