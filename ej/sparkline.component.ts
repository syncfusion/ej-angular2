import { CreateComponent, Utils, Type } from './core';

let Outputs = ['load', 'loaded', 'tooltipInitialize', 'seriesRendering', 'pointRegionMouseMove',
    'pointRegionMouseClick', 'sparklineMouseMove', 'sparklineMouseLeave'
    ];
let ComplexProperties = ['border', 'rangeBandSettings', 'tooltip', 'markerSettings', 'size',
    'axisLineSettings', 'tooltip.border', 'tooltip.font', 'markerSettings.border'];
let Inputs = Utils.AngularizeInputs(['background', 'fill', 'stroke', 'border', 'width',
    'opacity', 'highPointColor', 'lowPointColor', 'startPointColor', 'endPointColor',
    'negativePointColor', 'rangeBandSettings', 'palette', 'isResponsive', 'enableCanvasRendering',
    'dataSource', 'xName', 'yName', 'padding', 'type',
    'theme', 'tooltip', 'markerSettings', 'size', 'axisLineSettings',
    'border.color', 'border.width', 'rangeBandSettings.startRange', 'rangeBandSettings.endRange', 'rangeBandSettings.opacity',
    'rangeBandSettings.color', 'tooltip.visible', 'tooltip.fill', 'tooltip.template', 'tooltip.border',
    'tooltip.border.color', 'tooltip.border.width', 'tooltip.font', 'tooltip.font.color', 'tooltip.font.fontFamily',
    'tooltip.font.fontStyle', 'tooltip.font.fontWeight', 'tooltip.font.opacity', 'tooltip.font.size', 'markerSettings.opacity',
    'markerSettings.visible', 'markerSettings.width', 'markerSettings.fill', 'markerSettings.border', 'markerSettings.border.color',
    'markerSettings.border.opacity', 'markerSettings.border.width', 'size.height', 'size.width', 'axisLineSettings.visible',
    'axisLineSettings.color', 'axisLineSettings.width', 'axisLineSettings.dashArray'], []);
export let SparklineComponent = CreateComponent('Sparkline', {
    selector: 'ej-sparkline',
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

export const EJ_SPARKLINE_COMPONENTS: Type<any>[] = [SparklineComponent  ];

