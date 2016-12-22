import { CreateComponent, Utils, Type, CreateArrayTagDirective, CreateComplexDirective, ContentChild, forwardRef } from './core';
export let LevelDirective = CreateComplexDirective({
    selector: 'e-levels>e-level',
    inputs: ['groupBackground', 'groupBorderColor', 'groupBorderThickness', 'groupGap', 'groupPadding',
        'groupPath', 'headerHeight', 'headerTemplate', 'headerVisibilityMode', 'labelPosition',
        'labelTemplate', 'labelVisibilityMode', 'showHeader', 'showLabels'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => TreeMapComponent)
    });


export let LevelsDirective = CreateArrayTagDirective('levels', 'ej-treemap>e-levels', LevelDirective);

export let RangeColorDirective = CreateComplexDirective({
    selector: 'e-rangecolormapping>e-rangecolor',
    inputs: ['color', 'gradientColors', 'from', 'legendLabel', 'to'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => TreeMapComponent)
    });


export let RangeColorMappingDirective = CreateArrayTagDirective('rangeColorMapping', 'ej-treemap>e-rangecolormapping', RangeColorDirective);


let Outputs = ['treeMapItemSelected'
    , 'model.dataSourceChange: dataSourceChange', 'model.weightValuePathChange: weightValuePathChange'];
let ComplexProperties = ['uniColorMapping', 'desaturationColorMapping', 'paletteColorMapping', 'legendSettings', 'leafItemSettings'];
let Inputs = Utils.AngularizeInputs(['borderBrush', 'borderThickness', 'uniColorMapping', 'desaturationColorMapping', 'paletteColorMapping',
    'colorValuePath', 'dockPosition', 'drillDownHeaderColor', 'drillDownSelectionColor', 'enableDrillDown',
    'isResponsive', 'enableResize', 'draggingOnSelection', 'draggingGroupOnSelection', 'legendSettings',
    'highlightBorderBrush', 'highlightBorderThickness', 'highlightGroupBorderBrush', 'highlightGroupBorderThickness', 'highlightGroupOnSelection',
    'highlightOnSelection', 'itemsLayoutMode', 'leafItemSettings', 'selectionMode', 'groupSelectionMode',
    'showLegend', 'enableGradient', 'showTooltip', 'tooltipTemplate', 'treeMapItems',
    'uniColorMapping.color', 'desaturationColorMapping.to', 'desaturationColorMapping.color', 'desaturationColorMapping.from', 'desaturationColorMapping.rangeMaximum',
    'desaturationColorMapping.rangeMinimum', 'paletteColorMapping.colors', 'legendSettings.height', 'legendSettings.width', 'legendSettings.iconHeight',
    'legendSettings.iconWidth', 'legendSettings.template', 'legendSettings.mode', 'legendSettings.title', 'legendSettings.leftLabel',
    'legendSettings.rightLabel', 'legendSettings.dockPosition', 'legendSettings.alignment', 'legendSettings.columnCount', 'leafItemSettings.borderBrush',
    'leafItemSettings.borderThickness', 'leafItemSettings.itemTemplate', 'leafItemSettings.labelPath', 'leafItemSettings.labelPosition', 'leafItemSettings.labelVisibilityMode',
    'leafItemSettings.showLabels', 'groupColorMapping', 'rangeColorMapping', 'levels'], ['dataSource', 'weightValuePath']);
export let TreeMapComponent = CreateComponent('TreeMap', {
    selector: 'ej-treemap',
    inputs: Inputs,
    outputs: Outputs,
    template: '',
    queries: {
        _levels : new ContentChild(LevelsDirective),
        _rangeColorMapping : new ContentChild(RangeColorMappingDirective),
    }
}, {
        tags: ['levels', 'rangeColorMapping'],
        twoways: ['dataSource', 'weightValuePath'],
        complexes: ComplexProperties,
    });

export const EJ_TREEMAP_COMPONENTS: Type<any>[] = [TreeMapComponent , LevelsDirective, RangeColorMappingDirective, LevelDirective, RangeColorDirective ];

