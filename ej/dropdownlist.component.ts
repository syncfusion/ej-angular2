import { CreateComponent, Utils, Type, CreateControlValueAccessor } from './core';

let Outputs = ['actionBegin', 'actionComplete', 'actionFailure', 'actionSuccess', 'beforePopupHide',
    'beforePopupShown', 'cascade', 'change', 'checkChange', 'create',
    'dataBound', 'destroy', 'focusIn', 'focusOut', 'popupHide',
    'popupResize', 'popupShown', 'popupResizeStart', 'popupResizeStop', 'search',
    'select'
    , 'model.valueChange: valueChange'];
let ComplexProperties = ['fields'];
let Inputs = Utils.AngularizeInputs(['allowVirtualScrolling', 'cascadeTo', 'caseSensitiveSearch', 'cssClass', 'dataSource',
    'delimiterChar', 'enableAnimation', 'enabled', 'enableIncrementalSearch', 'enableFilterSearch',
    'enablePersistence', 'enablePopupResize', 'enableRTL', 'enableSorting', 'fields',
    'filterType', 'headerTemplate', 'height', 'htmlAttributes', 'itemsCount',
    'locale', 'maxPopupHeight', 'minPopupHeight', 'maxPopupWidth', 'minPopupWidth',
    'multiSelectMode', 'popupHeight', 'popupWidth', 'query', 'readOnly',
    'selectedIndex', 'selectedIndices', 'showCheckbox', 'showPopupOnLoad', 'showRoundedCorner',
    'sortOrder', 'targetID', 'template', 'text', 'validationMessage',
    'validationRules', 'watermarkText', 'width', 'virtualScrollMode', 'fields.groupBy',
    'fields.htmlAttributes', 'fields.id', 'fields.imageAttributes', 'fields.imageUrl', 'fields.selected',
    'fields.spriteCssClass', 'fields.tableName', 'fields.text', 'fields.value'], ['value']);
export let DropDownListComponent = CreateComponent('DropDownList', {
    selector: '[ej-dropdownlist]',
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

export let DropDownListValueAccessor = CreateControlValueAccessor('[ej-dropdownlist]', DropDownListComponent);
export const EJ_DROPDOWNLIST_COMPONENTS: Type<any>[] = [DropDownListComponent , DropDownListValueAccessor ];

