import { CreateComponent, Utils, Type } from './core';

let Outputs = ['beforeOpen', 'click', 'close', 'open', 'create',
    'destroy', 'keydown', 'mouseout', 'mouseover'
    ];
let ComplexProperties = ['fields'];
let Inputs = Utils.AngularizeInputs(['animationType', 'contextMenuTarget', 'cssClass', 'enableAnimation', 'enableCenterAlign',
    'enabled', 'enableRTL', 'enableSeparator', 'excludeTarget', 'fields',
    'height', 'htmlAttributes', 'isResponsive', 'menuType', 'openOnClick',
    'orientation', 'showRootLevelArrows', 'showSubLevelArrows', 'subMenuDirection', 'titleText',
    'width', 'fields.child', 'fields.dataSource', 'fields.htmlAttribute', 'fields.id',
    'fields.imageAttribute', 'fields.imageUrl', 'fields.linkAttribute', 'fields.parentId', 'fields.query',
    'fields.spriteCssClass', 'fields.tableName', 'fields.text', 'fields.url'], []);
export let MenuComponent = CreateComponent('Menu', {
    selector: 'ej-menu',
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

export const EJ_MENU_COMPONENTS: Type<any>[] = [MenuComponent  ];

