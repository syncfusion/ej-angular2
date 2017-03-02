import { CreateComponent, Utils, Type } from './core';

let Outputs = ['load', 'preRender', 'loaded', 'dataLabelRendering', 'segmentRendering',
    'titleRendering', 'tooltipInitialize', 'pointRegionClick', 'pointRegionMouseMove', 'drillDownClick',
    'drillDownBack', 'drillDownReset'
    ];
let ComplexProperties = ['border', 'segmentBorder', 'size', 'tooltip', 'points',
    'dataLabelSettings', 'title', 'highlightSettings', 'selectionSettings', 'legend',
    'margin', 'zoomSettings', 'tooltip.border', 'tooltip.font', 'dataLabelSettings.font',
    'title.font', 'title.subtitle', 'title.subtitle.font', 'legend.border', 'legend.font',
    'legend.itemStyle', 'legend.location', 'legend.size', 'legend.title', 'legend.title.font'];
let Inputs = Utils.AngularizeInputs(['background', 'valueMemberPath', 'border', 'segmentBorder', 'dataSource',
    'palette', 'parentNode', 'xName', 'yName', 'isResponsive',
    'size', 'visible', 'tooltip', 'points', 'startAngle',
    'endAngle', 'radius', 'innerRadius', 'dataLabelSettings', 'title',
    'highlightSettings', 'selectionSettings', 'legend', 'theme', 'margin',
    'enableAnimation', 'opacity', 'zoomSettings', 'animationType', 'border.color',
    'border.width', 'segmentBorder.color', 'segmentBorder.width', 'size.height', 'size.width',
    'tooltip.visible', 'tooltip.border', 'tooltip.border.color', 'tooltip.border.width', 'tooltip.fill',
    'tooltip.font', 'tooltip.font.color', 'tooltip.font.fontFamily', 'tooltip.font.fontStyle', 'tooltip.font.fontWeight',
    'tooltip.font.opacity', 'tooltip.font.size', 'tooltip.template', 'points.x', 'points.y',
    'points.text', 'points.fill', 'dataLabelSettings.visible', 'dataLabelSettings.labelRotationMode', 'dataLabelSettings.font',
    'dataLabelSettings.font.fontFamily', 'dataLabelSettings.font.fontStyle', 'dataLabelSettings.font.fontWeight', 'dataLabelSettings.font.opacity', 'dataLabelSettings.font.color',
    'dataLabelSettings.font.size', 'dataLabelSettings.template', 'dataLabelSettings.fill', 'dataLabelSettings.labelOverflowMode', 'title.text',
    'title.visible', 'title.textAlignment', 'title.font', 'title.font.fontFamily', 'title.font.fontStyle',
    'title.font.fontWeight', 'title.font.opacity', 'title.font.size', 'title.subtitle', 'title.subtitle.text',
    'title.subtitle.visible', 'title.subtitle.textAlignment', 'title.subtitle.font', 'highlightSettings.enable', 'highlightSettings.mode',
    'highlightSettings.color', 'highlightSettings.opacity', 'highlightSettings.type', 'selectionSettings.enable', 'selectionSettings.mode',
    'selectionSettings.color', 'selectionSettings.opacity', 'selectionSettings.type', 'legend.visible', 'legend.clickAction',
    'legend.alignment', 'legend.border', 'legend.border.color', 'legend.border.width', 'legend.columnCount',
    'legend.rowCount', 'legend.font', 'legend.font.fontFamily', 'legend.font.fontStyle', 'legend.font.fontWeight',
    'legend.font.size', 'legend.itemPadding', 'legend.itemStyle', 'legend.itemStyle.height', 'legend.itemStyle.width',
    'legend.location', 'legend.location.x', 'legend.location.y', 'legend.position', 'legend.shape',
    'legend.size', 'legend.size.height', 'legend.size.width', 'legend.title', 'legend.title.font',
    'legend.title.visible', 'legend.title.text', 'legend.title.textAlignment', 'margin.left', 'margin.right',
    'margin.top', 'margin.bottom', 'zoomSettings.enable', 'zoomSettings.toolbarHorizontalAlignment', 'zoomSettings.toolbarVerticalAlignment',
    'levels'], []);
export let SunburstChartComponent = CreateComponent('SunburstChart', {
    selector: 'ej-sunburstchart',
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

export const EJ_SUNBURSTCHART_COMPONENTS: Type<any>[] = [SunburstChartComponent ];

