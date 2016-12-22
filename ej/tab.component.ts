import { CreateComponent, Utils, Type } from './core';

let Outputs = ['itemActive', 'ajaxBeforeLoad', 'ajaxError', 'ajaxLoad', 'ajaxSuccess',
    'beforeActive', 'beforeItemRemove', 'create', 'destroy', 'itemAdd',
    'itemRemove'
    , 'model.selectedItemIndexChange: selectedItemIndexChange'];
let ComplexProperties = ['ajaxSettings'];
let Inputs = Utils.AngularizeInputs(['ajaxSettings', 'allowKeyboardNavigation', 'collapsible', 'cssClass', 'disabledItemIndex',
    'enableAnimation', 'enabled', 'enabledItemIndex', 'enablePersistence', 'enableRTL',
    'enableTabScroll', 'events', 'headerPosition', 'headerSize', 'height',
    'heightAdjustMode', 'hiddenItemIndex', 'htmlAttributes', 'idPrefix', 'showCloseButton',
    'showReloadIcon', 'showRoundedCorner', 'width', 'ajaxSettings.async', 'ajaxSettings.cache',
    'ajaxSettings.contentType', 'ajaxSettings.data', 'ajaxSettings.dataType', 'ajaxSettings.type'], ['selectedItemIndex']);
export let TabComponent = CreateComponent('Tab', {
    selector: 'ej-tab',
    inputs: Inputs,
    outputs: Outputs,
    template: '<ng-content></ng-content>',
    queries: {
    }
}, {
        tags: [],
        twoways: ['selectedItemIndex'],
        complexes: ComplexProperties,
    });

export const EJ_TAB_COMPONENTS: Type<any>[] = [TabComponent  ];

