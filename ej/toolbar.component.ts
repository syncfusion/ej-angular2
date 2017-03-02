import { CreateComponent, Utils, Type } from './core';

let Outputs = ['click', 'create', 'focusOut', 'destroy', 'itemHover',
    'itemLeave', 'overflowOpen', 'overflowClose'
    ];
let ComplexProperties = ['Items'];
let Inputs = Utils.AngularizeInputs(['cssClass', 'dataSource', 'disabledItemIndices', 'enabled', 'enabledItemIndices',
    'enableRTL', 'enableSeparator', 'fields', 'height', 'htmlAttributes',
    'hide', 'isResponsive', 'Items', 'orientation', 'query',
    'responsiveType', 'showRoundedCorner', 'width', 'fields.group', 'fields.htmlAttributes',
    'fields.id', 'fields.imageAttributes', 'fields.imageUrl', 'fields.spriteCssClass', 'fields.text',
    'fields.tooltipText', 'fields.template', 'Items.group', 'Items.htmlAttributes', 'Items.id',
    'Items.imageAttributes', 'Items.imageUrl', 'Items.spriteCssClass', 'Items.text', 'Items.tooltipText',
    'Items.template'], []);
export let ToolbarComponent = CreateComponent('Toolbar', {
    selector: 'ej-toolbar',
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

export const EJ_TOOLBAR_COMPONENTS: Type<any>[] = [ToolbarComponent ];

