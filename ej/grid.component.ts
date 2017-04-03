import { CreateComponent, Utils, Type, CreateArrayTagDirective, CreateComplexDirective, ContentChild, forwardRef } from './core';
export let Grid_CommandDirective = CreateComplexDirective({
    selector: 'e-commands>e-command',
    inputs: ['buttonOptions', 'type'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => GridComponent)
    });


export let Grid_CommandsDirective = CreateArrayTagDirective('commands', 'e-columns>e-commands', Grid_CommandDirective);

export let Grid_ColumnDirective = CreateComplexDirective({
    selector: 'e-columns>e-column',
    inputs: ['clipMode', 'allowEditing', 'allowFiltering', 'allowGrouping', 'allowSorting',
        'allowResizing', 'commands', 'cssClass', 'customAttributes', 'dataSource',
        'defaultValue', 'disableHtmlEncode', 'displayAsCheckBox', 'editParams', 'editTemplate',
        'editType', 'enableGroupByFormat', 'field', 'filterBarTemplate', 'filterType',
        'foreignKeyField', 'foreignKeyValue', 'format', 'headerTemplateID', 'headerText',
        'headerTextAlign', 'headerTooltip', 'isFrozen', 'isIdentity', 'isPrimaryKey',
        'priority', 'showInColumnChooser', 'template', 'textAlign', 'tooltip',
        'type', 'validationRules', 'visible', 'width'],
    queries: {
        _commands : new ContentChild(Grid_CommandsDirective),
    }
}, {
         tags: ['commands' ],
         complexes: [],
         type: forwardRef(() => GridComponent)
    });


export let Grid_ColumnsDirective = CreateArrayTagDirective('columns', 'ej-grid>e-columns', Grid_ColumnDirective);

export let Grid_SummaryColumnDirective = CreateComplexDirective({
    selector: 'e-summarycolumns>e-summarycolumn',
    inputs: ['customSummaryValue', 'dataMember', 'displayColumn', 'format', 'prefix',
        'suffix', 'summaryType', 'template'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => GridComponent)
    });


export let Grid_SummaryColumnsDirective = CreateArrayTagDirective('summaryColumns', 'e-summaryrows>e-summarycolumns', Grid_SummaryColumnDirective);

export let Grid_SummaryRowDirective = CreateComplexDirective({
    selector: 'e-summaryrows>e-summaryrow',
    inputs: ['showCaptionSummary', 'showGroupSummary', 'showTotalSummary', 'summaryColumns', 'title',
        'titleColumn'],
    queries: {
        _summaryColumns : new ContentChild(Grid_SummaryColumnsDirective),
    }
}, {
         tags: ['summaryColumns' ],
         complexes: [],
         type: forwardRef(() => GridComponent)
    });


export let Grid_SummaryRowsDirective = CreateArrayTagDirective('summaryRows', 'ej-grid>e-summaryrows', Grid_SummaryRowDirective);

export let Grid_StackedHeaderColumnDirective = CreateComplexDirective({
    selector: 'e-stackedheadercolumns>e-stackedheadercolumn',
    inputs: ['column', 'cssClass', 'headerText', 'textAlign', 'tooltip'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => GridComponent)
    });


export let Grid_StackedHeaderColumnsDirective = CreateArrayTagDirective('stackedHeaderColumns', 'e-stackedheaderrows>e-stackedheadercolumns', Grid_StackedHeaderColumnDirective);

export let Grid_StackedHeaderRowDirective = CreateComplexDirective({
    selector: 'e-stackedheaderrows>e-stackedheaderrow',
    inputs: ['stackedHeaderColumns'],
    queries: {
        _stackedHeaderColumns : new ContentChild(Grid_StackedHeaderColumnsDirective),
    }
}, {
         tags: ['stackedHeaderColumns' ],
         complexes: [],
         type: forwardRef(() => GridComponent)
    });


export let Grid_StackedHeaderRowsDirective = CreateArrayTagDirective('stackedHeaderRows', 'ej-grid>e-stackedheaderrows', Grid_StackedHeaderRowDirective);


let Outputs = ['actionBegin', 'actionComplete', 'actionFailure', 'batchAdd', 'batchDelete',
    'beforeBatchAdd', 'beforeBatchDelete', 'beforeBatchSave', 'beforePrint', 'beforeRowDrop',
    'beginEdit', 'cellEdit', 'cellSave', 'cellSelected', 'cellSelecting',
    'cellDeselected', 'cellDeselecting', 'columnDrag', 'columnDragStart', 'columnDrop',
    'rowDrag', 'rowDragStart', 'rowDrop', 'columnSelected', 'columnSelecting',
    'columnDeselected', 'columnDeselecting', 'contextClick', 'contextOpen', 'create',
    'dataBound', 'destroy', 'detailsCollapse', 'detailsDataBound', 'detailsExpand',
    'endAdd', 'endDelete', 'endEdit', 'load', 'mergeCellInfo',
    'queryCellInfo', 'recordClick', 'recordDoubleClick', 'resized', 'resizeEnd',
    'resizeStart', 'rightClick', 'rowDataBound', 'rowSelected', 'rowSelecting',
    'rowDeselected', 'rowDeselecting', 'templateRefresh', 'toolbarClick'
    , 'model.dataSourceChange: dataSourceChange', 'model.pageSettings.currentPageChange: pageSettings.currentPageChange'];
let ComplexProperties = ['contextMenuSettings', 'editSettings', 'filterSettings', 'groupSettings', 'pageSettings',
    'resizeSettings', 'rowDropSettings', 'searchSettings', 'selectionSettings', 'scrollSettings',
    'sortSettings', 'textWrapSettings', 'toolbarSettings'];
let Inputs = Utils.AngularizeInputs(['allowCellMerging', 'allowGrouping', 'allowKeyboardNavigation', 'allowFiltering', 'allowSorting',
    'allowMultiSorting', 'allowPaging', 'allowReordering', 'allowResizeToFit', 'allowResizing',
    'allowRowDragAndDrop', 'allowScrolling', 'allowSearching', 'allowSelection', 'allowTextWrap',
    'allowMultipleExporting', 'commonWidth', 'gridLines', 'childGrid', 'columnLayout',
    'contextMenuSettings', 'cssClass', 'detailsTemplate', 'editSettings', 'enableAltRow',
    'enableAutoSaveOnSelectionChange', 'enableHeaderHover', 'enablePersistence', 'enableResponsiveRow', 'enableRowHover',
    'enableRTL', 'enableTouch', 'enableToolbarItems', 'exportToExcelAction', 'exportToPdfAction',
    'exportToWordAction', 'filterSettings', 'groupSettings', 'isResponsive', 'keySettings',
    'locale', 'minWidth', 'pageSettings', 'query', 'resizeSettings',
    'rowTemplate', 'rowDropSettings', 'searchSettings', 'selectedRecords', 'selectedRowIndex',
    'selectedRowIndices', 'selectionSettings', 'selectionType', 'scrollSettings', 'showColumnChooser',
    'showStackedHeader', 'showSummary', 'sortSettings', 'textWrapSettings', 'toolbarSettings',
    'contextMenuSettings.contextMenuItems', 'contextMenuSettings.customContextMenuItems', 'contextMenuSettings.enableContextMenu', 'contextMenuSettings.disableDefaultItems', 'editSettings.allowAdding',
    'editSettings.allowDeleting', 'editSettings.allowEditing', 'editSettings.allowEditOnDblClick', 'editSettings.dialogEditorTemplateID', 'editSettings.editMode',
    'editSettings.externalFormTemplateID', 'editSettings.formPosition', 'editSettings.inlineFormTemplateID', 'editSettings.rowPosition', 'editSettings.showConfirmDialog',
    'editSettings.showDeleteConfirmDialog', 'editSettings.titleColumn', 'editSettings.showAddNewRow', 'filterSettings.enableCaseSensitivity', 'filterSettings.enableInterDeterminateState',
    'filterSettings.filterBarMode', 'filterSettings.filterType', 'filterSettings.immediateModeDelay', 'filterSettings.maxFilterChoices', 'filterSettings.showFilterBarStatus',
    'filterSettings.showPredicate', 'groupSettings.captionFormat', 'groupSettings.enableDropAreaAutoSizing', 'groupSettings.groupedColumns', 'groupSettings.showDropArea',
    'groupSettings.showGroupedColumn', 'groupSettings.showToggleButton', 'groupSettings.showUngroupButton', 'pageSettings.enableQueryString', 'pageSettings.enableTemplates',
    'pageSettings.pageCount', 'pageSettings.pageSize', 'pageSettings.showDefaults', 'pageSettings.template', 'pageSettings.totalPages',
    'pageSettings.totalRecordsCount', 'pageSettings.printMode', 'resizeSettings.resizeMode', 'rowDropSettings.dropTargetID', 'rowDropSettings.dragMapper',
    'rowDropSettings.dropMapper', 'searchSettings.fields', 'searchSettings.key', 'searchSettings.operator', 'searchSettings.ignoreCase',
    'selectionSettings.cellSelectionMode', 'selectionSettings.enableToggle', 'selectionSettings.selectionMode', 'scrollSettings.allowVirtualScrolling', 'scrollSettings.autoHide',
    'scrollSettings.buttonSize', 'scrollSettings.enableTouchScroll', 'scrollSettings.frozenColumns', 'scrollSettings.frozenRows', 'scrollSettings.height',
    'scrollSettings.scrollerSize', 'scrollSettings.virtualScrollMode', 'scrollSettings.enableVirtualization', 'scrollSettings.width', 'scrollSettings.scrollOneStepBy',
    'textWrapSettings.wrapMode', 'toolbarSettings.customToolbarItems', 'toolbarSettings.showToolbar', 'toolbarSettings.toolbarItems', 'columns',
    'stackedHeaderRows', 'summaryRows', 'contextMenuSettings.subContextMenu', 'filterSettings.filteredColumns', 'sortSettings.sortedColumns'], ['dataSource', 'pageSettings.currentPage']);
export let GridComponent = CreateComponent('Grid', {
    selector: 'ej-grid',
    inputs: Inputs,
    outputs: Outputs,
    template: '',
    queries: {
        _columns : new ContentChild(Grid_ColumnsDirective),
        _summaryRows : new ContentChild(Grid_SummaryRowsDirective),
        _stackedHeaderRows : new ContentChild(Grid_StackedHeaderRowsDirective),
    }
}, {
        tags: ['columns', 'summaryRows', 'stackedHeaderRows'],
        twoways: ['dataSource', 'pageSettings.currentPage'],
        complexes: ComplexProperties,
    });

export const EJ_GRID_COMPONENTS: Type<any>[] = [GridComponent , Grid_CommandsDirective, Grid_ColumnsDirective, Grid_SummaryColumnsDirective, Grid_SummaryRowsDirective, Grid_StackedHeaderColumnsDirective, Grid_StackedHeaderRowsDirective, Grid_CommandDirective, Grid_ColumnDirective, Grid_SummaryColumnDirective, Grid_SummaryRowDirective, Grid_StackedHeaderColumnDirective, Grid_StackedHeaderRowDirective];

