import { CreateComponent, Utils, Type } from './core';

let Outputs = ['click', 'create', 'focusOut', 'destroy', 'itemHover',
    'itemLeave'
    ];
let ComplexProperties = [];
let Inputs = Utils.AngularizeInputs(['cssClass', 'dataSource', 'disabledItemIndices', 'enabled', 'enabledItemIndices',
    'enableRTL', 'enableSeparator', 'fields', 'height', 'htmlAttributes',
    'hide', 'isResponsive', 'orientation', 'query', 'showRoundedCorner',
    'width', 'fields.group', 'fields.htmlAttributes', 'fields.id', 'fields.imageAttributes',
    'fields.imageUrl', 'fields.spriteCssClass', 'fields.text', 'fields.tooltipText'], []);
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

export const EJ_TOOLBAR_COMPONENTS: Type<any>[] = [ToolbarComponent  ];

