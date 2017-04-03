import { CreateComponent, Utils, Type, CreateArrayTagDirective, CreateComplexDirective, ContentChild, forwardRef } from './core';
export let Spreadsheet_RangeSettingDirective = CreateComplexDirective({
    selector: 'e-rangesettings>e-rangesetting',
    inputs: ['dataSource', 'headerStyles', 'primaryKey', 'query', 'showHeader',
        'startCell'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => SpreadsheetComponent)
    });


export let Spreadsheet_RangeSettingsDirective = CreateArrayTagDirective('rangeSettings', 'e-sheets>e-rangesettings', Spreadsheet_RangeSettingDirective);

export let Spreadsheet_SheetDirective = CreateComplexDirective({
    selector: 'e-sheets>e-sheet',
    inputs: ['border', 'cellTypes', 'cFormatRule', 'colCount', 'columnWidth',
        'dataSource', 'fieldAsColumnHeader', 'frozenRows', 'frozenColumns', 'headerStyles',
        'hideColumns', 'hideRows', 'mergeCells', 'primaryKey', 'query',
        'rangeSettings', 'rowCount', 'rows', 'showGridlines', 'showHeader',
        'showHeadings', 'startCell'],
    queries: {
        _rangeSettings : new ContentChild(Spreadsheet_RangeSettingsDirective),
    }
}, {
         tags: ['rangeSettings' ],
         complexes: [],
         type: forwardRef(() => SpreadsheetComponent)
    });


export let Spreadsheet_SheetsDirective = CreateArrayTagDirective('sheets', 'ej-spreadsheet>e-sheets', Spreadsheet_SheetDirective);


let Outputs = ['actionBegin', 'actionComplete', 'autoFillBegin', 'autoFillComplete', 'beforeBatchSave',
    'beforeCellFormat', 'beforeCellSelect', 'beforeDrop', 'beforeEditComment', 'beforeOpen',
    'beforePanelOpen', 'cellClick', 'cellEdit', 'cellFormatting', 'cellHover',
    'cellSave', 'cellSelected', 'contextMenuClick', 'drag', 'dragShape',
    'dragStart', 'drop', 'editRangeBegin', 'editRangeComplete', 'keyDown',
    'keyUp', 'load', 'loadComplete', 'menuClick', 'onImport',
    'openFailure', 'pagerClick', 'resizeStart', 'resizeEnd', 'ribbonClick',
    'seriesRendering', 'tabClick', 'tabSelect'
    ];
let ComplexProperties = ['autoFillSettings', 'chartSettings', 'exportSettings', 'formatSettings', 'importSettings',
    'pictureSettings', 'printSettings', 'ribbonSettings', 'scrollSettings', 'selectionSettings',
    'ribbonSettings.applicationTab', 'ribbonSettings.applicationTab.menuSettings'];
let Inputs = Utils.AngularizeInputs(['activeSheetIndex', 'allowAutoCellType', 'allowAutoFill', 'allowAutoSum', 'allowCellFormatting',
    'allowCellType', 'allowCharts', 'allowClear', 'allowClipboard', 'allowComments',
    'allowConditionalFormats', 'allowDataValidation', 'allowDelete', 'allowDragAndDrop', 'allowEditing',
    'allowFiltering', 'allowFormatAsTable', 'allowFormatPainter', 'allowFormulaBar', 'allowFreezing',
    'allowHyperlink', 'allowImport', 'allowInsert', 'allowKeyboardNavigation', 'allowLockCell',
    'allowMerging', 'allowOverflow', 'allowResizing', 'allowSearching', 'allowSelection',
    'allowSorting', 'allowUndoRedo', 'allowWrap', 'apWidth', 'autoFillSettings',
    'chartSettings', 'columnCount', 'columnWidth', 'cssClass', 'customFormulas',
    'enableContextMenu', 'enablePivotTable', 'enableTouch', 'exportSettings', 'formatSettings',
    'importSettings', 'isReadOnly', 'locale', 'pictureSettings', 'printSettings',
    'ribbonSettings', 'rowCount', 'rowHeight', 'scrollSettings', 'selectionSettings',
    'sheetCount', 'showPager', 'showRibbon', 'undoRedoStep', 'userName',
    'autoFillSettings.fillType', 'autoFillSettings.showFillOptions', 'chartSettings.height', 'chartSettings.width', 'exportSettings.allowExporting',
    'exportSettings.csvUrl', 'exportSettings.excelUrl', 'exportSettings.password', 'exportSettings.pdfUrl', 'formatSettings.allowCellBorder',
    'formatSettings.allowDecimalPlaces', 'formatSettings.allowFontFamily', 'importSettings.importMapper', 'importSettings.importOnLoad', 'importSettings.importUrl',
    'importSettings.password', 'pictureSettings.allowPictures', 'pictureSettings.height', 'pictureSettings.width', 'printSettings.allowPageSetup',
    'printSettings.allowPageSize', 'printSettings.allowPrinting', 'ribbonSettings.applicationTab', 'ribbonSettings.applicationTab.type', 'ribbonSettings.applicationTab.menuSettings',
    'scrollSettings.allowScrolling', 'scrollSettings.allowSheetOnDemand', 'scrollSettings.allowVirtualScrolling', 'scrollSettings.height', 'scrollSettings.isResponsive',
    'scrollSettings.scrollMode', 'scrollSettings.width', 'selectionSettings.activeCell', 'selectionSettings.animationTime', 'selectionSettings.enableAnimation',
    'selectionSettings.selectionType', 'selectionSettings.selectionUnit', 'sheets', 'sheets.rows.cells'], []);
export let SpreadsheetComponent = CreateComponent('Spreadsheet', {
    selector: 'ej-spreadsheet',
    inputs: Inputs,
    outputs: Outputs,
    template: '',
    queries: {
        _sheets : new ContentChild(Spreadsheet_SheetsDirective),
    }
}, {
        tags: ['sheets'],
        twoways: [],
        complexes: ComplexProperties,
    });

export const EJ_SPREADSHEET_COMPONENTS: Type<any>[] = [SpreadsheetComponent , Spreadsheet_RangeSettingsDirective, Spreadsheet_SheetsDirective, Spreadsheet_RangeSettingDirective, Spreadsheet_SheetDirective];

