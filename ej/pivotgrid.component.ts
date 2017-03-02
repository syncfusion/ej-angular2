import { CreateComponent, Utils, Type } from './core';

let Outputs = ['afterServiceInvoke', 'beforeServiceInvoke', 'beforePivotEnginePopulate', 'cellDoubleClick', 'cellContext',
    'cellSelection', 'columnHeaderHyperlinkClick', 'drillSuccess', 'drillThrough', 'load',
    'renderComplete', 'renderFailure', 'renderSuccess', 'rowHeaderHyperlinkClick', 'summaryCellHyperlinkClick',
    'valueCellHyperlinkClick', 'saveReport', 'loadReport', 'beforeExport', 'cellEdit'
    ];
let ComplexProperties = ['dataSource', 'valueSortSettings', 'frozenHeaderSettings', 'hyperlinkSettings', 'serviceMethodSettings',
    'dataSource.pagerOptions'];
let Inputs = Utils.AngularizeInputs(['analysisMode', 'cssClass', 'pivotTableFieldListID', 'dataSource', 'valueSortSettings',
    'frozenHeaderSettings', 'customObject', 'collapsedMembers', 'enableCellContext', 'enableCellSelection',
    'enableDrillThrough', 'enableCellDoubleClick', 'enableCellEditing', 'enableCollapseByDefault', 'enableColumnGrandTotal',
    'enableConditionalFormatting', 'enableAdvancedFilter', 'enableDeferUpdate', 'enableGroupingBar', 'enableGrandTotal',
    'enableJSONRendering', 'enablePivotFieldList', 'enableRowGrandTotal', 'enableRTL', 'enableToolTip',
    'enableToolTipAnimation', 'enableColumnResizing', 'enableVirtualScrolling', 'enablePaging', 'hyperlinkSettings',
    'isResponsive', 'jsonRecords', 'layout', 'locale', 'operationalMode',
    'serviceMethodSettings', 'url', 'dataSource.cube', 'dataSource.data', 'dataSource.catalog',
    'dataSource.enableAdvancedFilter', 'dataSource.reportName', 'dataSource.pagerOptions', 'dataSource.pagerOptions.categoricalPageSize', 'dataSource.pagerOptions.seriesPageSize',
    'dataSource.pagerOptions.categoricalCurrentPage', 'dataSource.pagerOptions.seriesCurrentPage', 'valueSortSettings.headerText', 'valueSortSettings.headerDelimiters', 'valueSortSettings.sortOrder',
    'frozenHeaderSettings.enableFrozenRowHeaders', 'frozenHeaderSettings.enableFrozenColumnHeaders', 'frozenHeaderSettings.enableFrozenHeaders', 'hyperlinkSettings.enableColumnHeaderHyperlink', 'hyperlinkSettings.enableRowHeaderHyperlink',
    'hyperlinkSettings.enableSummaryCellHyperlink', 'hyperlinkSettings.enableValueCellHyperlink', 'serviceMethodSettings.drillDown', 'serviceMethodSettings.exportPivotGrid', 'serviceMethodSettings.deferUpdate',
    'serviceMethodSettings.fetchMembers', 'serviceMethodSettings.filtering', 'serviceMethodSettings.initialize', 'serviceMethodSettings.nodeDropped', 'serviceMethodSettings.nodeStateModified',
    'serviceMethodSettings.paging', 'serviceMethodSettings.sorting', 'serviceMethodSettings.memberExpand', 'serviceMethodSettings.cellEditing', 'serviceMethodSettings.saveReport',
    'serviceMethodSettings.loadReport', 'serviceMethodSettings.calculatedField', 'serviceMethodSettings.drillThroughHierarchies', 'serviceMethodSettings.drillThroughDataTable', 'serviceMethodSettings.writeBack',
    'dataSource.columns', 'dataSource.rows', 'dataSource.values', 'dataSource.filters'], []);
export let PivotGridComponent = CreateComponent('PivotGrid', {
    selector: 'ej-pivotgrid',
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

export const EJ_PIVOTGRID_COMPONENTS: Type<any>[] = [PivotGridComponent ];

