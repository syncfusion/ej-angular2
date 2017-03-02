import { CreateComponent, Utils, Type, CreateArrayTagDirective, CreateComplexDirective, ContentChild, forwardRef } from './core';
let GridCommandInputs = Utils.AngularizeInputs(['buttonOptions', 'type'], []);

export let GridCommandDirective = CreateComplexDirective({
    selector: 'e-commands>e-command',
    inputs: GridCommandInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => GridComponent)
    });


export let GridCommandsDirective = CreateArrayTagDirective('commands', 'e-columns>e-commands', GridCommandDirective);

let GridColumnInputs = Utils.AngularizeInputs(['clipMode', 'allowEditing', 'allowFiltering', 'allowGrouping', 'allowSorting',
        'allowResizing', 'commands', 'cssClass', 'customAttributes', 'dataSource',
        'defaultValue', 'disableHtmlEncode', 'displayAsCheckBox', 'editParams', 'editTemplate',
        'editType', 'enableGroupByFormat', 'field', 'filterBarTemplate', 'filterType',
        'foreignKeyField', 'foreignKeyValue', 'format', 'headerTemplateID', 'headerText',
        'headerTextAlign', 'headerTooltip', 'isFrozen', 'isIdentity', 'isPrimaryKey',
        'priority', 'showInColumnChooser', 'template', 'textAlign', 'tooltip',
        'type', 'validationRules', 'visible', 'width'], []);

export let GridColumnDirective = CreateComplexDirective({
    selector: 'e-columns>e-column',
    inputs: GridColumnInputs,
    queries: {
        _commands : new ContentChild(GridCommandsDirective),
    }
}, {
         tags: ['commands' ],
         complexes: [],
         type: forwardRef(() => GridComponent)
    });


export let GridColumnsDirective = CreateArrayTagDirective('columns', 'ej-grid>e-columns', GridColumnDirective);

let GridSummaryColumnInputs = Utils.AngularizeInputs(['customSummaryValue', 'dataMember', 'displayColumn', 'format', 'prefix',
        'suffix', 'summaryType', 'template'], []);

export let GridSummaryColumnDirective = CreateComplexDirective({
    selector: 'e-summarycolumns>e-summarycolumn',
    inputs: GridSummaryColumnInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => GridComponent)
    });


export let GridSummaryColumnsDirective = CreateArrayTagDirective('summaryColumns', 'e-summaryrows>e-summarycolumns', GridSummaryColumnDirective);

let GridSummaryRowInputs = Utils.AngularizeInputs(['showCaptionSummary', 'showGroupSummary', 'showTotalSummary', 'summaryColumns', 'title',
        'titleColumn'], []);

export let GridSummaryRowDirective = CreateComplexDirective({
    selector: 'e-summaryrows>e-summaryrow',
    inputs: GridSummaryRowInputs,
    queries: {
        _summaryColumns : new ContentChild(GridSummaryColumnsDirective),
    }
}, {
         tags: ['summaryColumns' ],
         complexes: [],
         type: forwardRef(() => GridComponent)
    });


export let GridSummaryRowsDirective = CreateArrayTagDirective('summaryRows', 'ej-grid>e-summaryrows', GridSummaryRowDirective);

let GridStackedHeaderColumnInputs = Utils.AngularizeInputs(['column', 'cssClass', 'headerText', 'textAlign', 'tooltip'], []);

export let GridStackedHeaderColumnDirective = CreateComplexDirective({
    selector: 'e-stackedheadercolumns>e-stackedheadercolumn',
    inputs: GridStackedHeaderColumnInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => GridComponent)
    });


export let GridStackedHeaderColumnsDirective = CreateArrayTagDirective('stackedHeaderColumns', 'e-stackedheaderrows>e-stackedheadercolumns', GridStackedHeaderColumnDirective);

let GridStackedHeaderRowInputs = Utils.AngularizeInputs(['stackedHeaderColumns'], []);

export let GridStackedHeaderRowDirective = CreateComplexDirective({
    selector: 'e-stackedheaderrows>e-stackedheaderrow',
    inputs: GridStackedHeaderRowInputs,
    queries: {
        _stackedHeaderColumns : new ContentChild(GridStackedHeaderColumnsDirective),
    }
}, {
         tags: ['stackedHeaderColumns' ],
         complexes: [],
         type: forwardRef(() => GridComponent)
    });


export let GridStackedHeaderRowsDirective = CreateArrayTagDirective('stackedHeaderRows', 'ej-grid>e-stackedheaderrows', GridStackedHeaderRowDirective);


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
        _columns : new ContentChild(GridColumnsDirective),
        _summaryRows : new ContentChild(GridSummaryRowsDirective),
        _stackedHeaderRows : new ContentChild(GridStackedHeaderRowsDirective),
    }
}, {
        tags: ['columns', 'summaryRows', 'stackedHeaderRows'],
        twoways: ['dataSource', 'pageSettings.currentPage'],
        complexes: ComplexProperties,
    });

export const EJ_GRID_COMPONENTS: Type<any>[] = [GridComponent , GridCommandsDirective, GridColumnsDirective, GridSummaryColumnsDirective, GridSummaryRowsDirective, GridStackedHeaderColumnsDirective, GridStackedHeaderRowsDirective, GridCommandDirective, GridColumnDirective, GridSummaryColumnDirective, GridSummaryRowDirective, GridStackedHeaderColumnDirective, GridStackedHeaderRowDirective];

