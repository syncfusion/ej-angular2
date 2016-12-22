import { CreateComponent, Utils, Type } from './core';

let Outputs = ['actionBegin', 'actionSuccess', 'actionComplete', 'actionFailure', 'actionBeforeSuccess',
    'change', 'checkChange', 'create', 'destroy', 'focusIn',
    'focusOut', 'itemDrag', 'itemDragStart', 'itemDragStop', 'itemDrop',
    'select', 'unselect'
    , 'model.valueChange: valueChange'];
let ComplexProperties = ['fields'];
let Inputs = Utils.AngularizeInputs(['allowDrag', 'allowDrop', 'allowMultiSelection', 'allowVirtualScrolling', 'caseSensitiveSearch',
    'cascadeTo', 'checkedIndices', 'cssClass', 'dataSource', 'enabled',
    'enableIncrementalSearch', 'enablePersistence', 'enableRTL', 'enableWordWrap', 'fields',
    'height', 'itemsCount', 'totalItemsCount', 'itemRequestCount', 'loadDataOnInit',
    'query', 'selectedIndex', 'selectedIndices', 'showCheckbox', 'showRoundedCorner',
    'template', 'virtualScrollMode', 'width', 'targetID', 'fields.checkBy',
    'fields.groupBy', 'fields.htmlAttributes', 'fields.id', 'fields.imageUrl', 'fields.imageAttributes',
    'fields.selectBy', 'fields.spriteCssClass', 'fields.tableName', 'fields.text', 'fields.value'], ['value']);
export let ListBoxComponent = CreateComponent('ListBox', {
    selector: 'ej-listbox',
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

export const EJ_LISTBOX_COMPONENTS: Type<any>[] = [ListBoxComponent  ];

