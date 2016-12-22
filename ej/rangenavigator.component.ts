import { CreateComponent, Utils, Type } from './core';

let Outputs = ['load', 'loaded', 'rangeChanged', 'scrollChanged', 'scrollStart',
    'scrollEnd'
    ];
let ComplexProperties = ['border', 'labelSettings', 'navigatorStyleSettings', 'rangeSettings', 'selectedRangeSettings',
    'scrollRangeSettings', 'sizeSettings', 'tooltipSettings', 'valueAxisSettings', 'labelSettings.higherLevel',
    'labelSettings.higherLevel.border', 'labelSettings.higherLevel.gridLineStyle', 'labelSettings.higherLevel.style', 'labelSettings.higherLevel.style.font', 'labelSettings.lowerLevel',
    'labelSettings.lowerLevel.border', 'labelSettings.lowerLevel.gridLineStyle', 'labelSettings.lowerLevel.style', 'labelSettings.lowerLevel.style.font', 'labelSettings.style',
    'labelSettings.style.font', 'navigatorStyleSettings.border', 'navigatorStyleSettings.majorGridLineStyle', 'navigatorStyleSettings.minorGridLineStyle', 'navigatorStyleSettings.highlightSettings',
    'navigatorStyleSettings.highlightSettings.border', 'navigatorStyleSettings.selectionSettings', 'navigatorStyleSettings.selectionSettings.border', 'tooltipSettings.font', 'valueAxisSettings.axisLine',
    'valueAxisSettings.font', 'valueAxisSettings.majorGridLines', 'valueAxisSettings.majorTickLines'];
let Inputs = Utils.AngularizeInputs(['allowSnapping', 'border', 'dataSource', 'enableDeferredUpdate', 'enableScrollbar',
    'enableRTL', 'isResponsive', 'labelSettings', 'locale', 'navigatorStyleSettings',
    'padding', 'rangePadding', 'rangeSettings', 'selectedData', 'selectedRangeSettings',
    'scrollRangeSettings', 'sizeSettings', 'theme', 'tooltipSettings', 'valueAxisSettings',
    'valueType', 'xName', 'yName', 'border.color', 'border.opacity',
    'border.width', 'labelSettings.higherLevel', 'labelSettings.higherLevel.border', 'labelSettings.higherLevel.fill', 'labelSettings.higherLevel.gridLineStyle',
    'labelSettings.higherLevel.intervalType', 'labelSettings.higherLevel.labelPlacement', 'labelSettings.higherLevel.position', 'labelSettings.higherLevel.style', 'labelSettings.higherLevel.visible',
    'labelSettings.lowerLevel', 'labelSettings.lowerLevel.border', 'labelSettings.lowerLevel.fill', 'labelSettings.lowerLevel.gridLineStyle', 'labelSettings.lowerLevel.intervalType',
    'labelSettings.lowerLevel.labelPlacement', 'labelSettings.lowerLevel.position', 'labelSettings.lowerLevel.style', 'labelSettings.lowerLevel.visible', 'labelSettings.style',
    'labelSettings.style.font', 'labelSettings.style.horizontalAlignment', 'navigatorStyleSettings.background', 'navigatorStyleSettings.border', 'navigatorStyleSettings.border.color',
    'navigatorStyleSettings.border.dashArray', 'navigatorStyleSettings.border.width', 'navigatorStyleSettings.leftThumbTemplate', 'navigatorStyleSettings.majorGridLineStyle', 'navigatorStyleSettings.majorGridLineStyle.color',
    'navigatorStyleSettings.majorGridLineStyle.visible', 'navigatorStyleSettings.minorGridLineStyle', 'navigatorStyleSettings.minorGridLineStyle.color', 'navigatorStyleSettings.minorGridLineStyle.visible', 'navigatorStyleSettings.opacity',
    'navigatorStyleSettings.rightThumbTemplate', 'navigatorStyleSettings.selectedRegionColor', 'navigatorStyleSettings.selectedRegionOpacity', 'navigatorStyleSettings.thumbColor', 'navigatorStyleSettings.thumbRadius',
    'navigatorStyleSettings.thumbStroke', 'navigatorStyleSettings.unselectedRegionColor', 'navigatorStyleSettings.unselectedRegionOpacity', 'navigatorStyleSettings.highlightSettings', 'navigatorStyleSettings.highlightSettings.enable',
    'navigatorStyleSettings.highlightSettings.color', 'navigatorStyleSettings.highlightSettings.opacity', 'navigatorStyleSettings.highlightSettings.border', 'navigatorStyleSettings.selectionSettings', 'navigatorStyleSettings.selectionSettings.enable',
    'navigatorStyleSettings.selectionSettings.color', 'navigatorStyleSettings.selectionSettings.opacity', 'navigatorStyleSettings.selectionSettings.border', 'rangeSettings.end', 'rangeSettings.start',
    'selectedRangeSettings.end', 'selectedRangeSettings.start', 'scrollRangeSettings.end', 'scrollRangeSettings.start', 'sizeSettings.height',
    'sizeSettings.width', 'tooltipSettings.backgroundColor', 'tooltipSettings.font', 'tooltipSettings.font.color', 'tooltipSettings.font.family',
    'tooltipSettings.font.fontStyle', 'tooltipSettings.font.opacity', 'tooltipSettings.font.size', 'tooltipSettings.font.weight', 'tooltipSettings.labelFormat',
    'tooltipSettings.tooltipDisplayMode', 'tooltipSettings.visible', 'valueAxisSettings.axisLine', 'valueAxisSettings.axisLine.visible', 'valueAxisSettings.font',
    'valueAxisSettings.font.size', 'valueAxisSettings.majorGridLines', 'valueAxisSettings.majorGridLines.visible', 'valueAxisSettings.majorTickLines', 'valueAxisSettings.majorTickLines.size',
    'valueAxisSettings.majorTickLines.visible', 'valueAxisSettings.majorTickLines.width', 'valueAxisSettings.rangePadding', 'valueAxisSettings.visible', 'series'], []);
export let RangeNavigatorComponent = CreateComponent('RangeNavigator', {
    selector: 'ej-rangenavigator',
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

export const EJ_RANGENAVIGATOR_COMPONENTS: Type<any>[] = [RangeNavigatorComponent  ];

