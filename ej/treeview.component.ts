import { CreateComponent, Utils, Type } from './core';

let Outputs = ['beforeAdd', 'beforeCollapse', 'beforeCut', 'beforeDelete', 'beforeEdit',
    'beforeExpand', 'beforeLoad', 'beforePaste', 'beforeSelect', 'create',
    'destroy', 'inlineEditValidation', 'keyPress', 'loadError', 'loadSuccess',
    'nodeAdd', 'nodeCheck', 'nodeClick', 'nodeCollapse', 'nodeCut',
    'nodeDelete', 'nodeDrag', 'nodeDragStart', 'nodeDragStop', 'nodeDropped',
    'nodeEdit', 'nodeExpand', 'nodePaste', 'nodeSelect', 'nodeUncheck',
    'nodeUnselect', 'ready'
    ];
let ComplexProperties = ['fields', 'sortSettings'];
let Inputs = Utils.AngularizeInputs(['allowDragAndDrop', 'allowDragAndDropAcrossControl', 'allowDropSibling', 'allowDropChild', 'allowEditing',
    'allowKeyboardNavigation', 'allowMultiSelection', 'autoCheck', 'autoCheckParentNode', 'checkedNodes',
    'cssClass', 'enableAnimation', 'enabled', 'enableMultipleExpand', 'enablePersistence',
    'enableRTL', 'expandedNodes', 'expandOn', 'fields', 'fullRowSelect',
    'height', 'htmlAttributes', 'loadOnDemand', 'selectedNode', 'selectedNodes',
    'showCheckbox', 'sortSettings', 'template', 'width', 'fields.child',
    'fields.dataSource', 'fields.expanded', 'fields.hasChild', 'fields.htmlAttribute', 'fields.id',
    'fields.imageAttribute', 'fields.imageUrl', 'fields.isChecked', 'fields.linkAttribute', 'fields.parentId',
    'fields.query', 'fields.selected', 'fields.spriteCssClass', 'fields.tableName', 'fields.text',
    'sortSettings.allowSorting', 'sortSettings.sortOrder'], []);
export let TreeViewComponent = CreateComponent('TreeView', {
    selector: 'ej-treeview',
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

export const EJ_TREEVIEW_COMPONENTS: Type<any>[] = [TreeViewComponent  ];

