import { CreateComponent, Utils, Type, CreateArrayTagDirective, CreateComplexDirective, ContentChild, forwardRef } from './core';
export let Kanban_ColumnDirective = CreateComplexDirective({
    selector: 'e-kanban-columns>e-kanban-column',
    inputs: ['headerText', 'totalCount', 'totalCount.text', 'key', 'allowDrop',
        'allowDrag', 'isCollapsed', 'constraints', 'constraints.type', 'constraints.min',
        'constraints.max', 'headerTemplate', 'width', 'visible', 'showAddButton'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['totalCount', 'constraints'],
         type: forwardRef(() => KanbanComponent)
    });


export let Kanban_ColumnsDirective = CreateArrayTagDirective('columns', 'ej-kanban>e-kanban-columns', Kanban_ColumnDirective);


let Outputs = ['actionBegin', 'actionComplete', 'actionFailure', 'beginEdit', 'beginAdd',
    'beforeCardSelect', 'cardClick', 'cardDrag', 'cardDragStart', 'cardDragStop',
    'cardDrop', 'cardSelect', 'cardDoubleClick', 'cardSelecting', 'create',
    'cellClick', 'contextOpen', 'contextClick', 'dataBound', 'destroy',
    'endDelete', 'endEdit', 'headerClick', 'load', 'queryCellInfo',
    'toolbarClick'
    , 'model.dataSourceChange: dataSourceChange'];
let ComplexProperties = ['swimlaneSettings', 'contextMenuSettings', 'cardSettings', 'editSettings', 'fields',
    'scrollSettings', 'searchSettings', 'tooltipSettings', 'swimlaneSettings.unassignedGroup'];
let Inputs = Utils.AngularizeInputs(['allowDragAndDrop', 'allowTitle', 'swimlaneSettings', 'allowToggleColumn', 'allowSearching',
    'allowFiltering', 'allowSelection', 'allowHover', 'allowKeyboardNavigation', 'allowScrolling',
    'allowPrinting', 'contextMenuSettings', 'cardSettings', 'cssClass', 'enableTouch',
    'enableRTL', 'enableTotalCount', 'editSettings', 'fields', 'keyField',
    'isResponsive', 'minWidth', 'query', 'keySettings', 'scrollSettings',
    'searchSettings', 'selectionType', 'tooltipSettings', 'locale', 'swimlaneSettings.showCount',
    'swimlaneSettings.allowDragAndDrop', 'swimlaneSettings.unassignedGroup', 'swimlaneSettings.unassignedGroup.enable', 'swimlaneSettings.unassignedGroup.keys', 'contextMenuSettings.enable',
    'contextMenuSettings.disableDefaultItems', 'contextMenuSettings.menuItems', 'cardSettings.template', 'cardSettings.colorMapping', 'editSettings.allowEditing',
    'editSettings.allowAdding', 'editSettings.dialogTemplate', 'editSettings.editMode', 'editSettings.externalFormTemplate', 'editSettings.formPosition',
    'fields.primaryKey', 'fields.swimlaneKey', 'fields.priority', 'fields.content', 'fields.tag',
    'fields.title', 'fields.color', 'fields.imageUrl', 'scrollSettings.height', 'scrollSettings.width',
    'scrollSettings.allowFreezeSwimlane', 'searchSettings.fields', 'searchSettings.key', 'searchSettings.operator', 'searchSettings.ignoreCase',
    'tooltipSettings.enable', 'tooltipSettings.template', 'columns', 'customToolbarItems', 'filterSettings',
    'stackedHeaderRows', 'workflows', 'contextMenuSettings.customMenuItems', 'editSettings.editItems'], ['dataSource']);
export let KanbanComponent = CreateComponent('Kanban', {
    selector: 'ej-kanban',
    inputs: Inputs,
    outputs: Outputs,
    template: '',
    queries: {
        _columns : new ContentChild(Kanban_ColumnsDirective),
    }
}, {
        tags: ['columns'],
        twoways: ['dataSource'],
        complexes: ComplexProperties,
    });

export const EJ_KANBAN_COMPONENTS: Type<any>[] = [KanbanComponent , Kanban_ColumnsDirective, Kanban_ColumnDirective];

