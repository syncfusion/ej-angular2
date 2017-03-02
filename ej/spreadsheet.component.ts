import { CreateComponent, Utils, Type, CreateArrayTagDirective, CreateComplexDirective, ContentChild, forwardRef } from './core';
let SpreadsheetRangeSettingInputs = Utils.AngularizeInputs(['dataSource', 'headerStyles', 'primaryKey', 'query', 'showHeader',
        'startCell'], []);

export let SpreadsheetRangeSettingDirective = CreateComplexDirective({
    selector: 'e-rangesettings>e-rangesetting',
    inputs: SpreadsheetRangeSettingInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => SpreadsheetComponent)
    });


export let SpreadsheetRangeSettingsDirective = CreateArrayTagDirective('rangeSettings', 'e-sheets>e-rangesettings', SpreadsheetRangeSettingDirective);

let SpreadsheetSheetInputs = Utils.AngularizeInputs(['border', 'cellTypes', 'cFormatRule', 'colCount', 'columnWidth',
        'dataSource', 'fieldAsColumnHeader', 'headerStyles', 'hideColumns', 'hideRows',
        'mergeCells', 'primaryKey', 'query', 'rangeSettings', 'rowCount',
        'rows', 'showGridlines', 'showHeader', 'showHeadings', 'startCell'], []);

export let SpreadsheetSheetDirective = CreateComplexDirective({
    selector: 'e-sheets>e-sheet',
    inputs: SpreadsheetSheetInputs,
    queries: {
        _rangeSettings : new ContentChild(SpreadsheetRangeSettingsDirective),
    }
}, {
         tags: ['rangeSettings' ],
         complexes: [],
         type: forwardRef(() => SpreadsheetComponent)
    });


export let SpreadsheetSheetsDirective = CreateArrayTagDirective('sheets', 'ej-spreadsheet>e-sheets', SpreadsheetSheetDirective);


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
        _sheets : new ContentChild(SpreadsheetSheetsDirective),
    }
}, {
        tags: ['sheets'],
        twoways: [],
        complexes: ComplexProperties,
    });

export const EJ_SPREADSHEET_COMPONENTS: Type<any>[] = [SpreadsheetComponent , SpreadsheetRangeSettingsDirective, SpreadsheetSheetsDirective, SpreadsheetRangeSettingDirective, SpreadsheetSheetDirective];

