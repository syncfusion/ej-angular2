import { CreateComponent, Utils, Type } from './core';

let Outputs = ['activate', 'ajaxBeforeLoad', 'ajaxError', 'ajaxLoad', 'ajaxSuccess',
    'beforeActivate', 'beforeInactivate', 'create', 'destroy', 'inActivate'
    ];
let ComplexProperties = ['ajaxSettings', 'customIcon'];
let Inputs = Utils.AngularizeInputs(['ajaxSettings', 'allowKeyboardNavigation', 'collapseSpeed', 'collapsible', 'cssClass',
    'customIcon', 'disabledItems', 'enableAnimation', 'enabled', 'enabledItems',
    'enableMultipleOpen', 'enablePersistence', 'enableRTL', 'events', 'expandSpeed',
    'headerSize', 'height', 'heightAdjustMode', 'htmlAttributes', 'selectedItemIndex',
    'selectedItems', 'showCloseButton', 'showRoundedCorner', 'width', 'ajaxSettings.async',
    'ajaxSettings.cache', 'ajaxSettings.contentType', 'ajaxSettings.data', 'ajaxSettings.dataType', 'ajaxSettings.type',
    'customIcon.header', 'customIcon.selectedHeader'], []);
export let AccordionComponent = CreateComponent('Accordion', {
    selector: 'ej-accordion',
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

export const EJ_ACCORDION_COMPONENTS: Type<any>[] = [AccordionComponent  ];

