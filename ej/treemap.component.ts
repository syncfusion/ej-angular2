import { CreateComponent, Utils, Type, CreateArrayTagDirective, CreateComplexDirective, ContentChild, forwardRef } from './core';
let TreeMapLevelInputs = Utils.AngularizeInputs(['groupBackground', 'groupBorderColor', 'groupBorderThickness', 'groupGap', 'groupPadding',
        'groupPath', 'headerHeight', 'headerTemplate', 'headerVisibilityMode', 'labelPosition',
        'labelTemplate', 'labelVisibilityMode', 'showHeader', 'showLabels'], []);

export let TreeMapLevelDirective = CreateComplexDirective({
    selector: 'e-levels>e-level',
    inputs: TreeMapLevelInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => TreeMapComponent)
    });


export let TreeMapLevelsDirective = CreateArrayTagDirective('levels', 'ej-treemap>e-levels', TreeMapLevelDirective);

let TreeMapRangeColorInputs = Utils.AngularizeInputs(['color', 'gradientColors', 'from', 'legendLabel', 'to'], []);

export let TreeMapRangeColorDirective = CreateComplexDirective({
    selector: 'e-rangecolormapping>e-rangecolor',
    inputs: TreeMapRangeColorInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => TreeMapComponent)
    });


export let TreeMapRangeColorMappingDirective = CreateArrayTagDirective('rangeColorMapping', 'ej-treemap>e-rangecolormapping', TreeMapRangeColorDirective);


let Outputs = ['treeMapItemSelected'
    , 'model.dataSourceChange: dataSourceChange', 'model.weightValuePathChange: weightValuePathChange'];
let ComplexProperties = ['uniColorMapping', 'desaturationColorMapping', 'paletteColorMapping', 'legendSettings', 'leafItemSettings'];
let Inputs = Utils.AngularizeInputs(['borderBrush', 'borderThickness', 'uniColorMapping', 'desaturationColorMapping', 'paletteColorMapping',
    'colorValuePath', 'dockPosition', 'drillDownHeaderColor', 'drillDownSelectionColor', 'isHierarchicalDatasource',
    'header', 'enableDrillDown', 'isResponsive', 'enableResize', 'draggingOnSelection',
    'draggingGroupOnSelection', 'legendSettings', 'highlightBorderBrush', 'highlightBorderThickness', 'highlightGroupBorderBrush',
    'highlightGroupBorderThickness', 'highlightGroupOnSelection', 'highlightOnSelection', 'itemsLayoutMode', 'leafItemSettings',
    'selectionMode', 'groupSelectionMode', 'showLegend', 'enableGradient', 'showTooltip',
    'tooltipTemplate', 'treeMapItems', 'uniColorMapping.color', 'desaturationColorMapping.to', 'desaturationColorMapping.color',
    'desaturationColorMapping.from', 'desaturationColorMapping.rangeMaximum', 'desaturationColorMapping.rangeMinimum', 'paletteColorMapping.colors', 'legendSettings.height',
    'legendSettings.width', 'legendSettings.iconHeight', 'legendSettings.iconWidth', 'legendSettings.template', 'legendSettings.mode',
    'legendSettings.title', 'legendSettings.leftLabel', 'legendSettings.rightLabel', 'legendSettings.dockPosition', 'legendSettings.alignment',
    'legendSettings.columnCount', 'leafItemSettings.borderBrush', 'leafItemSettings.borderThickness', 'leafItemSettings.itemTemplate', 'leafItemSettings.labelPath',
    'leafItemSettings.labelPosition', 'leafItemSettings.labelVisibilityMode', 'leafItemSettings.showLabels', 'groupColorMapping', 'rangeColorMapping',
    'levels'], ['dataSource', 'weightValuePath']);
export let TreeMapComponent = CreateComponent('TreeMap', {
    selector: 'ej-treemap',
    inputs: Inputs,
    outputs: Outputs,
    template: '',
    queries: {
        _levels : new ContentChild(TreeMapLevelsDirective),
        _rangeColorMapping : new ContentChild(TreeMapRangeColorMappingDirective),
    }
}, {
        tags: ['levels', 'rangeColorMapping'],
        twoways: ['dataSource', 'weightValuePath'],
        complexes: ComplexProperties,
    });

export const EJ_TREEMAP_COMPONENTS: Type<any>[] = [TreeMapComponent , TreeMapLevelsDirective, TreeMapRangeColorMappingDirective, TreeMapLevelDirective, TreeMapRangeColorDirective];

