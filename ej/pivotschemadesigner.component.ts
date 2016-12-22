import { CreateComponent, Utils, Type } from './core';

let Outputs = ['afterServiceInvoke', 'beforeServiceInvoke', 'dragMove'
    ];
let ComplexProperties = ['olap', 'serviceMethod'];
let Inputs = Utils.AngularizeInputs(['cssClass', 'customObject', 'enableWrapper', 'enableRTL', 'olap',
    'enableDragDrop', 'height', 'locale', 'pivotControl', 'serviceMethod',
    'url', 'width', 'layout', 'olap.showKPI', 'olap.showNamedSets',
    'serviceMethod.fetchMembers', 'serviceMethod.filtering', 'serviceMethod.memberExpand', 'serviceMethod.nodeDropped', 'serviceMethod.nodeStateModified',
    'serviceMethod.removeButton'], []);
export let PivotSchemaDesignerComponent = CreateComponent('PivotSchemaDesigner', {
    selector: 'ej-pivotschemadesigner',
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

export const EJ_PIVOTSCHEMADESIGNER_COMPONENTS: Type<any>[] = [PivotSchemaDesignerComponent  ];

