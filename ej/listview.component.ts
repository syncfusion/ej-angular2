import { CreateComponent, Utils, Type } from './core';

let Outputs = ['ajaxBeforeLoad', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'load',
    'loadComplete', 'mouseDown', 'mouseUp'
    , 'model.dataSourceChange: dataSourceChange'];
let ComplexProperties = ['ajaxSettings'];
let Inputs = Utils.AngularizeInputs(['ajaxSettings', 'checkedIndices', 'cssClass', 'enableAjax', 'enableCache',
    'enableCheckMark', 'enableFiltering', 'enableGroupList', 'enablePersistence', 'fieldSettings',
    'items', 'headerBackButtonText', 'headerTitle', 'height', 'locale',
    'persistSelection', 'preventSelection', 'query', 'renderTemplate', 'selectedItemIndex',
    'showHeader', 'showHeaderBackButton', 'templateId', 'width', 'ajaxSettings.async',
    'ajaxSettings.cache', 'ajaxSettings.contentType', 'ajaxSettings.data', 'ajaxSettings.dataType', 'ajaxSettings.type'], ['dataSource']);
export let ListViewComponent = CreateComponent('ListView', {
    selector: 'ej-listview',
    inputs: Inputs,
    outputs: Outputs,
    template: '<ng-content></ng-content>',
    queries: {
    }
}, {
        tags: [],
        twoways: ['dataSource'],
        complexes: ComplexProperties,
    });

export const EJ_LISTVIEW_COMPONENTS: Type<any>[] = [ListViewComponent ];

