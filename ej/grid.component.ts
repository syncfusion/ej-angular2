import { CreateComponent, Utils, Type, CreateArrayTagDirective, CreateComplexDirective, ContentChild, forwardRef, CreateTemplateDirective } from './core';
export let CommandDirective = CreateComplexDirective({
    selector: 'e-commands>e-command',
    inputs: ['buttonOptions', 'type'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => GridComponent)
    });


export let CommandsDirective = CreateArrayTagDirective('commands', 'e-columns>e-commands', CommandDirective);

export var GridTemplateDirective = CreateTemplateDirective({
    selector: "[e-template]"
}, {
        type: forwardRef(() => ColumnDirective)
    });

export let ColumnDirective = CreateComplexDirective({
    selector: 'e-columns>e-column',
    inputs: ['clipMode', 'allowEditing', 'allowFiltering', 'allowGrouping', 'allowSorting',
        'allowResizing', 'commands', 'cssClass', 'customAttributes', 'dataSource',
        'defaultValue', 'disableHtmlEncode', 'displayAsCheckBox', 'editParams', 'editTemplate',
        'editType', 'enableGroupByFormat', 'field', 'foreignKeyField', 'foreignKeyValue',
        'format', 'headerTemplateID', 'headerText', 'headerTextAlign', 'isFrozen',
        'isIdentity', 'isPrimaryKey', 'priority', 'showInColumnChooser', 'template',
        'textAlign', 'tooltip', 'type', 'validationRules', 'visible',
        'width'],
    queries: {
        _commands : new ContentChild(CommandsDirective),
        _template: new ContentChild(GridTemplateDirective) 
    }
}, {
         tags: ['commands' ],
         complexes: [],
         type: forwardRef(() => GridComponent)
    });


export let ColumnsDirective = CreateArrayTagDirective('columns', 'ej-grid>e-columns', ColumnDirective);

export let SummaryColumnDirective = CreateComplexDirective({
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


export let SummaryColumnsDirective = CreateArrayTagDirective('summaryColumns', 'e-summaryrows>e-summarycolumns', SummaryColumnDirective);

export let SummaryRowDirective = CreateComplexDirective({
    selector: 'e-summaryrows>e-summaryrow',
    inputs: ['showCaptionSummary', 'showGroupSummary', 'showTotalSummary', 'summaryColumns', 'title',
        'titleColumn'],
    queries: {
        _summaryColumns : new ContentChild(SummaryColumnsDirective),
    }
}, {
         tags: ['summaryColumns' ],
         complexes: [],
         type: forwardRef(() => GridComponent)
    });


export let SummaryRowsDirective = CreateArrayTagDirective('summaryRows', 'ej-grid>e-summaryrows', SummaryRowDirective);

export let StackedHeaderColumnDirective = CreateComplexDirective({
    selector: 'e-stackedheadercolumns>e-stackedheadercolumn',
    inputs: ['column', 'cssClass', 'headerText', 'textAlign'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => GridComponent)
    });


export let StackedHeaderColumnsDirective = CreateArrayTagDirective('stackedHeaderColumns', 'e-stackedheaderrows>e-stackedheadercolumns', StackedHeaderColumnDirective);

export let StackedHeaderRowDirective = CreateComplexDirective({
    selector: 'e-stackedheaderrows>e-stackedheaderrow',
    inputs: ['stackedHeaderColumns'],
    queries: {
        _stackedHeaderColumns : new ContentChild(StackedHeaderColumnsDirective),
    }
}, {
         tags: ['stackedHeaderColumns' ],
         complexes: [],
         type: forwardRef(() => GridComponent)
    });


export let StackedHeaderRowsDirective = CreateArrayTagDirective('stackedHeaderRows', 'ej-grid>e-stackedheaderrows', StackedHeaderRowDirective);


let Outputs = ['actionBegin', 'actionComplete', 'actionFailure', 'batchAdd', 'batchDelete',
    'beforeBatchAdd', 'beforeBatchDelete', 'beforeBatchSave', 'beginEdit', 'cellEdit',
    'cellSave', 'cellSelected', 'cellSelecting', 'columnDrag', 'columnDragStart',
    'columnDrop', 'rowDrag', 'rowDragStart', 'rowDrop', 'columnSelected',
    'columnSelecting', 'contextClick', 'contextOpen', 'create', 'dataBound',
    'destroy', 'detailsCollapse', 'detailsDataBound', 'detailsExpand', 'endAdd',
    'endDelete', 'endEdit', 'load', 'mergeCellInfo', 'queryCellInfo',
    'recordClick', 'recordDoubleClick', 'resized', 'resizeEnd', 'resizeStart',
    'rightClick', 'rowDataBound', 'rowSelected', 'rowSelecting', 'templateRefresh',
    'toolbarClick'
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
    'enableRTL', 'enableTouch', 'filterSettings', 'groupSettings', 'isResponsive',
    'keySettings', 'locale', 'minWidth', 'pageSettings', 'query',
    'resizeSettings', 'rowTemplate', 'rowDropSettings', 'searchSettings', 'selectedRecords',
    'selectedRowIndex', 'selectedRowIndices', 'selectionSettings', 'selectionType', 'scrollSettings',
    'showColumnChooser', 'showStackedHeader', 'showSummary', 'sortSettings', 'textWrapSettings',
    'toolbarSettings', 'contextMenuSettings.contextMenuItems', 'contextMenuSettings.customContextMenuItems', 'contextMenuSettings.enableContextMenu', 'contextMenuSettings.disableDefaultItems',
    'editSettings.allowAdding', 'editSettings.allowDeleting', 'editSettings.allowEditing', 'editSettings.allowEditOnDblClick', 'editSettings.dialogEditorTemplateID',
    'editSettings.editMode', 'editSettings.externalFormTemplateID', 'editSettings.formPosition', 'editSettings.inlineFormTemplateID', 'editSettings.rowPosition',
    'editSettings.showConfirmDialog', 'editSettings.showDeleteConfirmDialog', 'editSettings.titleColumn', 'editSettings.showAddNewRow', 'filterSettings.enableCaseSensitivity',
    'filterSettings.filterBarMode', 'filterSettings.filterType', 'filterSettings.maxFilterChoices', 'filterSettings.showFilterBarMessage', 'filterSettings.showPredicate',
    'groupSettings.captionFormat', 'groupSettings.enableDropAreaAutoSizing', 'groupSettings.groupedColumns', 'groupSettings.showDropArea', 'groupSettings.showGroupedColumn',
    'groupSettings.showToggleButton', 'groupSettings.showUngroupButton', 'pageSettings.enableQueryString', 'pageSettings.enableTemplates', 'pageSettings.pageCount',
    'pageSettings.pageSize', 'pageSettings.showDefaults', 'pageSettings.template', 'pageSettings.totalPages', 'pageSettings.totalRecordsCount',
    'pageSettings.printMode', 'resizeSettings.resizeMode', 'rowDropSettings.dropTargetID', 'rowDropSettings.dragMapper', 'rowDropSettings.dropMapper',
    'searchSettings.fields', 'searchSettings.key', 'searchSettings.operator', 'searchSettings.ignoreCase', 'selectionSettings.enableToggle',
    'selectionSettings.selectionMode', 'scrollSettings.allowVirtualScrolling', 'scrollSettings.enableTouchScroll', 'scrollSettings.frozenColumns', 'scrollSettings.frozenRows',
    'scrollSettings.height', 'scrollSettings.virtualScrollMode', 'scrollSettings.enableVirtualization', 'scrollSettings.width', 'scrollSettings.scrollOneStepBy',
    'textWrapSettings.wrapMode', 'toolbarSettings.customToolbarItems', 'toolbarSettings.showToolbar', 'toolbarSettings.toolbarItems', 'columns',
    'stackedHeaderRows', 'summaryRows', 'contextMenuSettings.subContextMenu', 'filterSettings.filteredColumns', 'sortSettings.sortedColumns'], ['dataSource', 'pageSettings.currentPage']);
export let GridComponent = CreateComponent('Grid', {
    selector: 'ej-grid',
    inputs: Inputs,
    outputs: Outputs,
    template: '',
    queries: {
        _columns : new ContentChild(ColumnsDirective),
        _summaryRows : new ContentChild(SummaryRowsDirective),
        _stackedHeaderRows : new ContentChild(StackedHeaderRowsDirective),
    }
}, {
        tags: ['columns', 'summaryRows', 'stackedHeaderRows'],
        twoways: ['dataSource', 'pageSettings.currentPage'],
        complexes: ComplexProperties,
    });

export const EJ_GRID_COMPONENTS: Type<any>[] = [GridComponent , CommandsDirective, ColumnsDirective, SummaryColumnsDirective, SummaryRowsDirective, StackedHeaderColumnsDirective, StackedHeaderRowsDirective, CommandDirective, ColumnDirective, SummaryColumnDirective, SummaryRowDirective, StackedHeaderColumnDirective, StackedHeaderRowDirective ,GridTemplateDirective];

