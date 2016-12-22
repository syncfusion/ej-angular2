import { CreateComponent, Utils, Type } from './core';

let Outputs = ['ajaxBeforeLoad', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'load',
    'loadComplete', 'mouseDown', 'mouseUp'
    , 'model.dataSourceChange: dataSourceChange'];
let ComplexProperties = [];
let Inputs = Utils.AngularizeInputs(['cssClass', 'enableAjax', 'enableCache', 'enableCheckMark', 'enableFiltering',
    'enableGroupList', 'enablePersistence', 'fieldSettings', 'headerBackButtonText', 'headerTitle',
    'height', 'persistSelection', 'preventSelection', 'query', 'renderTemplate',
    'selectedItemIndex', 'showHeader', 'templateId', 'width'], ['dataSource']);
export let ListViewComponent = CreateComponent('ListView', {
    selector: 'ej-listview',
    inputs: Inputs,
    outputs: Outputs,
    template: '',
    queries: {
    }
}, {
        tags: [],
        twoways: ['dataSource'],
        complexes: ComplexProperties,
    });

export const EJ_LISTVIEW_COMPONENTS: Type<any>[] = [ListViewComponent  ];

