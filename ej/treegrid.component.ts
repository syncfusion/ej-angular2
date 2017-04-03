import { CreateComponent, Utils, Type, CreateArrayTagDirective, CreateComplexDirective, ContentChild, forwardRef } from './core';
export let TreeGrid_ColumnDirective = CreateComplexDirective({
    selector: 'e-treegrid-columns>e-treegrid-column',
    inputs: ['allowFiltering', 'allowSorting', 'allowCellSelection', 'editType', 'field',
        'filterEditType', 'headerText', 'showCheckbox', 'visible', 'width',
        'headerTemplateID', 'format', 'isTemplateColumn', 'headerTextAlign', 'isFrozen',
        'textAlign', 'templateID', 'allowEditing', 'allowFreezing'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => TreeGridComponent)
    });


export let TreeGrid_ColumnsDirective = CreateArrayTagDirective('columns', 'ej-treegrid>e-treegrid-columns', TreeGrid_ColumnDirective);


let Outputs = ['actionBegin', 'actionComplete', 'beginEdit', 'collapsed', 'collapsing',
    'recordClick', 'columnDragStart', 'columnDrag', 'columnDrop', 'columnResized',
    'columnResizeStart', 'columnResizeEnd', 'contextMenuOpen', 'create', 'endEdit',
    'expanded', 'expanding', 'load', 'queryCellInfo', 'rowDataBound',
    'rowDrag', 'rowDragStart', 'rowDragStop', 'cellSelecting', 'cellSelected',
    'rowSelected', 'rowSelecting', 'toolbarClick'
    , 'model.dataSourceChange: dataSourceChange', 'model.selectedRowIndexChange: selectedRowIndexChange'];
let ComplexProperties = ['contextMenuSettings', 'dragTooltip', 'editSettings', 'columnResizeSettings', 'filterSettings',
    'pageSettings', 'selectionSettings', 'sizeSettings', 'sortSettings', 'toolbarSettings'];
let Inputs = Utils.AngularizeInputs(['allowColumnResize', 'allowColumnReordering', 'allowDragAndDrop', 'allowFiltering', 'allowKeyboardNavigation',
    'allowMultiSorting', 'allowSelection', 'allowSorting', 'allowPaging', 'altRowTemplateID',
    'childMapping', 'columnDialogFields', 'contextMenuSettings', 'cssClass', 'headerTextOverflow',
    'dragTooltip', 'editSettings', 'enableAltRow', 'enableCollapseAll', 'enableResize',
    'enableVirtualization', 'columnResizeSettings', 'filterSettings', 'locale', 'parseRowTemplate',
    'idMapping', 'isResponsive', 'parentIdMapping', 'pageSettings', 'cellTooltipTemplate',
    'query', 'rowHeight', 'rowTemplateID', 'selectionSettings', 'showColumnOptions',
    'showColumnChooser', 'showDetailsRow', 'showDetailsRowInfoColumn', 'detailsTemplate', 'detailsRowHeight',
    'showSummaryRow', 'showTotalSummary', 'summaryRows', 'showGridCellTooltip', 'showGridExpandCellTooltip',
    'sizeSettings', 'sortSettings', 'toolbarSettings', 'treeColumnIndex', 'contextMenuSettings.contextMenuItems',
    'contextMenuSettings.showContextMenu', 'dragTooltip.showTooltip', 'dragTooltip.tooltipItems', 'dragTooltip.tooltipTemplate', 'editSettings.allowAdding',
    'editSettings.allowDeleting', 'editSettings.allowEditing', 'editSettings.beginEditAction', 'editSettings.editMode', 'editSettings.rowPosition',
    'columnResizeSettings.columnResizeMode', 'filterSettings.filterBarMode', 'filterSettings.filterType', 'filterSettings.filteredColumns', 'pageSettings.pageCount',
    'pageSettings.pageSize', 'pageSettings.totalRecordsCount', 'pageSettings.currentPage', 'pageSettings.pageSizeMode', 'pageSettings.template',
    'selectionSettings.selectionMode', 'selectionSettings.selectionType', 'selectionSettings.enableHierarchySelection', 'selectionSettings.enableSelectAll', 'sizeSettings.height',
    'sizeSettings.width', 'sortSettings.sortedColumns', 'toolbarSettings.showToolbar', 'toolbarSettings.toolbarItems', 'columns'], ['dataSource', 'selectedRowIndex']);
export let TreeGridComponent = CreateComponent('TreeGrid', {
    selector: 'ej-treegrid',
    inputs: Inputs,
    outputs: Outputs,
    template: '',
    queries: {
        _columns : new ContentChild(TreeGrid_ColumnsDirective),
    }
}, {
        tags: ['columns'],
        twoways: ['dataSource', 'selectedRowIndex'],
        complexes: ComplexProperties,
    });

export const EJ_TREEGRID_COMPONENTS: Type<any>[] = [TreeGridComponent , TreeGrid_ColumnsDirective, TreeGrid_ColumnDirective];

