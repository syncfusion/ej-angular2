import { CreateComponent, Utils, Type, CreateArrayTagDirective, CreateComplexDirective, ContentChild, forwardRef } from './core';
let ChartTrendlineInputs = Utils.AngularizeInputs(['visibility', 'type', 'name', 'fill', 'width',
        'opacity', 'dashArray', 'forwardForecast', 'backwardForecast', 'polynomialOrder',
        'period'], []);

export let ChartTrendlineDirective = CreateComplexDirective({
    selector: 'e-trendlines>e-trendline',
    inputs: ChartTrendlineInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => ChartComponent)
    });


export let ChartTrendlinesDirective = CreateArrayTagDirective('trendlines', 'e-series>e-trendlines', ChartTrendlineDirective);

let ChartPointInputs = Utils.AngularizeInputs(['border', 'border.color', 'border.width', 'visibleOnLegend', 'showIntermediateSum',
        'showTotalSum', 'close', 'size', 'fill', 'high',
        'low', 'marker', 'marker.border', 'marker.border.color', 'marker.border.width',
        'marker.dataLabel', 'marker.dataLabel.angle', 'marker.dataLabel.border', 'marker.dataLabel.border.color', 'marker.dataLabel.border.width',
        'marker.dataLabel.connectorLine', 'marker.dataLabel.connectorLine.type', 'marker.dataLabel.connectorLine.width', 'marker.dataLabel.fill', 'marker.dataLabel.font',
        'marker.dataLabel.font.fontFamily', 'marker.dataLabel.font.fontStyle', 'marker.dataLabel.font.fontWeight', 'marker.dataLabel.font.opacity', 'marker.dataLabel.font.size',
        'marker.dataLabel.horizontalTextAlignment', 'marker.dataLabel.margin', 'marker.dataLabel.margin.bottom', 'marker.dataLabel.margin.left', 'marker.dataLabel.margin.right',
        'marker.dataLabel.margin.top', 'marker.dataLabel.opacity', 'marker.dataLabel.shape', 'marker.dataLabel.textPosition', 'marker.dataLabel.verticalTextAlignment',
        'marker.dataLabel.visible', 'marker.dataLabel.template', 'marker.dataLabel.offset', 'marker.fill', 'marker.imageUrl',
        'marker.opacity', 'marker.shape', 'marker.size', 'marker.size.height', 'marker.size.width',
        'marker.visible', 'open', 'text', 'x', 'y'], []);

export let ChartPointDirective = CreateComplexDirective({
    selector: 'e-points>e-point',
    inputs: ChartPointInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['border', 'marker', 'marker.border', 'marker.dataLabel', 'marker.dataLabel.border', 'marker.dataLabel.connectorLine', 'marker.dataLabel.font', 'marker.dataLabel.margin', 'marker.size'],
         type: forwardRef(() => ChartComponent)
    });


export let ChartPointsDirective = CreateArrayTagDirective('points', 'e-series>e-points', ChartPointDirective);

let ChartSeriesInputs = Utils.AngularizeInputs(['bearFillColor', 'border', 'border.color', 'border.width', 'border.dashArray',
        'bullFillColor', 'columnFacet', 'columnWidth', 'columnSpacing', 'stackingGroup',
        'dashArray', 'dataSource', 'doughnutCoefficient', 'doughnutSize', 'drawType',
        'enableAnimation', 'enableSmartLabels', 'endAngle', 'explode', 'explodeAll',
        'explodeIndex', 'explodeOffset', 'fill', 'font', 'font.color',
        'font.fontFamily', 'font.fontStyle', 'font.fontWeight', 'font.opacity', 'font.size',
        'funnelHeight', 'funnelWidth', 'gapRatio', 'isClosed', 'isStacking',
        'isTransposed', 'showMedian', 'labelPosition', 'boxPlotMode', 'lineCap',
        'lineJoin', 'marker', 'marker.border', 'marker.border.color', 'marker.border.width',
        'marker.dataLabel', 'marker.dataLabel.angle', 'marker.dataLabel.maximumLabelWidth', 'marker.dataLabel.enableWrap', 'marker.dataLabel.border',
        'marker.dataLabel.border.color', 'marker.dataLabel.border.width', 'marker.dataLabel.connectorLine', 'marker.dataLabel.connectorLine.type', 'marker.dataLabel.connectorLine.width',
        'marker.dataLabel.connectorLine.color', 'marker.dataLabel.connectorLine.height', 'marker.dataLabel.fill', 'marker.dataLabel.font', 'marker.dataLabel.font.fontFamily',
        'marker.dataLabel.font.color', 'marker.dataLabel.font.fontStyle', 'marker.dataLabel.font.fontWeight', 'marker.dataLabel.font.opacity', 'marker.dataLabel.font.size',
        'marker.dataLabel.horizontalTextAlignment', 'marker.dataLabel.margin', 'marker.dataLabel.margin.bottom', 'marker.dataLabel.margin.left', 'marker.dataLabel.margin.right',
        'marker.dataLabel.margin.top', 'marker.dataLabel.opacity', 'marker.dataLabel.shape', 'marker.dataLabel.textMappingName', 'marker.dataLabel.textPosition',
        'marker.dataLabel.verticalTextAlignment', 'marker.dataLabel.visible', 'marker.dataLabel.template', 'marker.dataLabel.offset', 'marker.fill',
        'marker.imageUrl', 'marker.opacity', 'marker.shape', 'marker.size', 'marker.size.height',
        'marker.size.width', 'marker.visible', 'name', 'opacity', 'outlierSettings',
        'outlierSettings.shape', 'outlierSettings.size', 'outlierSettings.size.height', 'outlierSettings.size.width', 'palette',
        'pieCoefficient', 'emptyPointSettings', 'emptyPointSettings.visible', 'emptyPointSettings.displayMode', 'emptyPointSettings.style',
        'emptyPointSettings.style.color', 'emptyPointSettings.style.border', 'emptyPointSettings.style.border.color', 'emptyPointSettings.style.border.width', 'positiveFill',
        'connectorLine', 'connectorLine.width', 'connectorLine.color', 'connectorLine.dashArray', 'connectorLine.opacity',
        'dragSettings', 'dragSettings.enable', 'dragSettings.type', 'errorBar', 'errorBar.visibility',
        'errorBar.type', 'errorBar.mode', 'errorBar.direction', 'errorBar.verticalErrorValue', 'errorBar.horizontalErrorValue',
        'errorBar.horizontalPositiveErrorValue', 'errorBar.horizontalNegativeErrorValue', 'errorBar.verticalPositiveErrorValue', 'errorBar.verticalNegativeErrorValue', 'errorBar.fill',
        'errorBar.width', 'errorBar.cap', 'errorBar.cap.visible', 'errorBar.cap.width', 'errorBar.cap.length',
        'errorBar.cap.fill', 'points', 'pyramidMode', 'query', 'startAngle',
        'cornerRadius', 'cornerRadius.topLeft', 'cornerRadius.topRight', 'cornerRadius.bottomLeft', 'cornerRadius.bottomRight',
        'tooltip', 'tooltip.border', 'tooltip.border.color', 'tooltip.border.width', 'tooltip.rx',
        'tooltip.ry', 'tooltip.duration', 'tooltip.enableAnimation', 'tooltip.fill', 'tooltip.format',
        'tooltip.opacity', 'tooltip.template', 'tooltip.visible', 'type', 'visibility',
        'visibleOnLegend', 'xAxisName', 'xName', 'yAxisName', 'yName',
        'high', 'low', 'open', 'close', 'pointColorMappingName',
        'zOrder', 'size', 'trendlines', 'highlightSettings', 'highlightSettings.enable',
        'highlightSettings.mode', 'highlightSettings.color', 'highlightSettings.opacity', 'highlightSettings.border', 'highlightSettings.border.color',
        'highlightSettings.border.width', 'highlightSettings.pattern', 'highlightSettings.customPattern', 'selectionSettings', 'selectionSettings.enable',
        'selectionSettings.mode', 'selectionSettings.type', 'selectionSettings.rangeType', 'selectionSettings.color', 'selectionSettings.opacity',
        'selectionSettings.border', 'selectionSettings.border.color', 'selectionSettings.border.width', 'selectionSettings.pattern', 'selectionSettings.customPattern'], []);

export let ChartSeriesDirective = CreateComplexDirective({
    selector: 'e-seriescollection>e-series',
    inputs: ChartSeriesInputs,
    queries: {
        _Trendlines : new ContentChild(ChartTrendlinesDirective),
        _points : new ContentChild(ChartPointsDirective),
    }
}, {
         tags: ['Trendlines', 'points' ],
         complexes: ['border', 'font', 'marker', 'marker.border', 'marker.dataLabel', 'marker.dataLabel.border', 'marker.dataLabel.connectorLine', 'marker.dataLabel.font', 'marker.dataLabel.margin', 'marker.size', 'outlierSettings', 'outlierSettings.size', 'emptyPointSettings', 'emptyPointSettings.style', 'emptyPointSettings.style.border', 'connectorLine', 'dragSettings', 'errorBar', 'errorBar.cap', 'cornerRadius', 'tooltip', 'tooltip.border', 'highlightSettings', 'highlightSettings.border', 'selectionSettings', 'selectionSettings.border'],
         type: forwardRef(() => ChartComponent)
    });


export let ChartSeriesCollectionDirective = CreateArrayTagDirective('series', 'ej-chart>e-seriescollection', ChartSeriesDirective);

let ChartIndicatorInputs = Utils.AngularizeInputs(['dPeriod', 'enableAnimation', 'fill', 'histogram', 'histogram.border',
        'histogram.border.color', 'histogram.border.width', 'histogram.fill', 'histogram.opacity', 'kPeriod',
        'longPeriod', 'lowerLine', 'lowerLine.fill', 'lowerLine.width', 'macdLine',
        'macdLine.fill', 'macdLine.width', 'macdType', 'period', 'periodLine',
        'periodLine.fill', 'periodLine.width', 'seriesName', 'shortPeriod', 'standardDeviations',
        'tooltip', 'tooltip.border', 'tooltip.border.color', 'tooltip.border.width', 'tooltip.duration',
        'tooltip.enableAnimation', 'tooltip.format', 'tooltip.fill', 'tooltip.opacity', 'tooltip.visible',
        'trigger', 'visibility', 'type', 'upperLine', 'upperLine.fill',
        'upperLine.width', 'width', 'xAxisName', 'yAxisName'], []);

export let ChartIndicatorDirective = CreateComplexDirective({
    selector: 'e-indicators>e-indicator',
    inputs: ChartIndicatorInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['histogram', 'histogram.border', 'lowerLine', 'macdLine', 'periodLine', 'tooltip', 'tooltip.border', 'upperLine'],
         type: forwardRef(() => ChartComponent)
    });


export let ChartIndicatorsDirective = CreateArrayTagDirective('indicators', 'ej-chart>e-indicators', ChartIndicatorDirective);

let ChartAnnotationInputs = Utils.AngularizeInputs(['angle', 'content', 'coordinateUnit', 'horizontalAlignment', 'margin',
        'margin.bottom', 'margin.left', 'margin.right', 'margin.top', 'opacity',
        'region', 'verticalAlignment', 'visible', 'x', 'xAxisName',
        'y', 'yAxisName'], []);

export let ChartAnnotationDirective = CreateComplexDirective({
    selector: 'e-annotations>e-annotation',
    inputs: ChartAnnotationInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['margin'],
         type: forwardRef(() => ChartComponent)
    });


export let ChartAnnotationsDirective = CreateArrayTagDirective('annotations', 'ej-chart>e-annotations', ChartAnnotationDirective);

let ChartPrimaryXAxisStripLineInputs = Utils.AngularizeInputs(['borderColor', 'color', 'end', 'font', 'font.color',
        'font.fontFamily', 'font.fontStyle', 'font.fontWeight', 'font.opacity', 'font.size',
        'start', 'startFromAxis', 'text', 'textAlignment', 'visible',
        'width', 'zIndex'], []);

export let ChartPrimaryXAxisStripLineDirective = CreateComplexDirective({
    selector: 'e-primaryxaxis-striplinecollection>e-primaryxaxis-stripline',
    inputs: ChartPrimaryXAxisStripLineInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['font'],
         type: forwardRef(() => ChartComponent)
    });


export let ChartPrimaryXAxisStripLineCollectionDirective = CreateArrayTagDirective('primaryXAxis.stripLine', 'ej-chart>e-primaryxaxis-striplinecollection', ChartPrimaryXAxisStripLineDirective);

let ChartPrimaryYAxisStripLineInputs = Utils.AngularizeInputs(['borderColor', 'color', 'end', 'font', 'font.color',
        'font.fontFamily', 'font.fontStyle', 'font.fontWeight', 'font.opacity', 'font.size',
        'start', 'startFromAxis', 'text', 'textAlignment', 'visible',
        'width', 'zIndex'], []);

export let ChartPrimaryYAxisStripLineDirective = CreateComplexDirective({
    selector: 'e-primaryyaxis-striplinecollection>e-primaryyaxis-stripline',
    inputs: ChartPrimaryYAxisStripLineInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['font'],
         type: forwardRef(() => ChartComponent)
    });


export let ChartPrimaryYAxisStripLineCollectionDirective = CreateArrayTagDirective('primaryYAxis.stripLine', 'ej-chart>e-primaryyaxis-striplinecollection', ChartPrimaryYAxisStripLineDirective);

let ChartRowDefinitionInputs = Utils.AngularizeInputs(['unit', 'rowHeight', 'lineColor', 'lineWidth'], []);

export let ChartRowDefinitionDirective = CreateComplexDirective({
    selector: 'e-rowdefinitions>e-rowdefinition',
    inputs: ChartRowDefinitionInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => ChartComponent)
    });


export let ChartRowDefinitionsDirective = CreateArrayTagDirective('rowDefinitions', 'ej-chart>e-rowdefinitions', ChartRowDefinitionDirective);

let ChartColumnDefinitionInputs = Utils.AngularizeInputs(['unit', 'columnWidth', 'lineColor', 'lineWidth'], []);

export let ChartColumnDefinitionDirective = CreateComplexDirective({
    selector: 'e-columndefinitions>e-columndefinition',
    inputs: ChartColumnDefinitionInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => ChartComponent)
    });


export let ChartColumnDefinitionsDirective = CreateArrayTagDirective('columnDefinitions', 'ej-chart>e-columndefinitions', ChartColumnDefinitionDirective);


let Outputs = ['animationComplete', 'axesLabelRendering', 'axesLabelsInitialize', 'axesRangeCalculate', 'axesTitleRendering',
    'chartAreaBoundsCalculate', 'create', 'destroy', 'displayTextRendering', 'legendBoundsCalculate',
    'legendItemClick', 'legendItemMouseMove', 'legendItemRendering', 'load', 'rangeSelected',
    'pointRegionClick', 'pointRegionMouseMove', 'preRender', 'seriesRegionClick', 'seriesRendering',
    'symbolRendering', 'titleRendering', 'toolTipInitialize', 'trackAxisToolTip', 'trackToolTip',
    'axisLabelClick', 'axisLabelMouseMove', 'chartClick', 'chartMouseMove', 'chartDoubleClick',
    'annotationClick', 'afterResize', 'beforeResize', 'errorBarRendering', 'scrollChanged',
    'scrollStart', 'scrollEnd'
    ];
let ComplexProperties = ['border', 'exportSettings', 'chartArea', 'commonSeriesOptions', 'crosshair',
    'legend', 'primaryXAxis', 'primaryYAxis', 'size', 'title',
    'zooming', 'chartArea.border', 'commonSeriesOptions.border', 'commonSeriesOptions.font', 'commonSeriesOptions.marker',
    'commonSeriesOptions.marker.border', 'commonSeriesOptions.marker.dataLabel', 'commonSeriesOptions.marker.dataLabel.border', 'commonSeriesOptions.marker.dataLabel.connectorLine', 'commonSeriesOptions.marker.dataLabel.font',
    'commonSeriesOptions.marker.dataLabel.margin', 'commonSeriesOptions.marker.size', 'commonSeriesOptions.outlierSettings', 'commonSeriesOptions.outlierSettings.size', 'commonSeriesOptions.cornerRadius',
    'commonSeriesOptions.tooltip', 'commonSeriesOptions.tooltip.border', 'commonSeriesOptions.emptyPointSettings', 'commonSeriesOptions.emptyPointSettings.style', 'commonSeriesOptions.emptyPointSettings.style.border',
    'commonSeriesOptions.connectorLine', 'commonSeriesOptions.dragSettings', 'commonSeriesOptions.errorBar', 'commonSeriesOptions.errorBar.cap', 'commonSeriesOptions.highlightSettings',
    'commonSeriesOptions.highlightSettings.border', 'commonSeriesOptions.selectionSettings', 'commonSeriesOptions.selectionSettings.border', 'crosshair.trackballTooltipSettings', 'crosshair.trackballTooltipSettings.border',
    'crosshair.marker', 'crosshair.marker.border', 'crosshair.marker.size', 'crosshair.line', 'legend.border',
    'legend.font', 'legend.itemStyle', 'legend.itemStyle.border', 'legend.location', 'legend.size',
    'legend.title', 'legend.title.font', 'primaryXAxis.alternateGridBand', 'primaryXAxis.alternateGridBand.even', 'primaryXAxis.alternateGridBand.odd',
    'primaryXAxis.axisLine', 'primaryXAxis.crosshairLabel', 'primaryXAxis.font', 'primaryXAxis.majorGridLines', 'primaryXAxis.majorTickLines',
    'primaryXAxis.minorGridLines', 'primaryXAxis.minorTickLines', 'primaryXAxis.range', 'primaryXAxis.labelBorder', 'primaryXAxis.title',
    'primaryXAxis.title.font', 'primaryYAxis.alternateGridBand', 'primaryYAxis.alternateGridBand.even', 'primaryYAxis.alternateGridBand.odd', 'primaryYAxis.axisLine',
    'primaryYAxis.crosshairLabel', 'primaryYAxis.font', 'primaryYAxis.majorGridLines', 'primaryYAxis.majorTickLines', 'primaryYAxis.minorGridLines',
    'primaryYAxis.minorTickLines', 'primaryYAxis.range', 'primaryYAxis.labelBorder', 'primaryYAxis.title', 'primaryYAxis.title.font',
    'title.border', 'title.font', 'title.subTitle', 'title.subTitle.font', 'title.subTitle.border'];
let Inputs = Utils.AngularizeInputs(['backGroundImageUrl', 'border', 'exportSettings', 'chartArea', 'commonSeriesOptions',
    'crosshair', 'depth', 'enable3D', 'enableCanvasRendering', 'initSeriesRender',
    'enableRotation', 'isResponsive', 'legend', 'locale', 'palette',
    'Margin', 'perspectiveAngle', 'primaryXAxis', 'primaryYAxis', 'rotation',
    'sideBySideSeriesPlacement', 'size', 'theme', 'tilt', 'title',
    'wallSize', 'zooming', 'border.color', 'border.opacity', 'border.width',
    'exportSettings.filename', 'exportSettings.action', 'exportSettings.angle', 'exportSettings.type', 'exportSettings.orientation',
    'exportSettings.mode', 'exportSettings.multipleExport', 'chartArea.background', 'chartArea.border', 'chartArea.border.color',
    'chartArea.border.opacity', 'chartArea.border.width', 'commonSeriesOptions.border', 'commonSeriesOptions.border.color', 'commonSeriesOptions.border.dashArray',
    'commonSeriesOptions.border.width', 'commonSeriesOptions.columnFacet', 'commonSeriesOptions.columnWidth', 'commonSeriesOptions.columnSpacing', 'commonSeriesOptions.visibleOnLegend',
    'commonSeriesOptions.stackingGroup', 'commonSeriesOptions.dashArray', 'commonSeriesOptions.dataSource', 'commonSeriesOptions.doughnutCoefficient', 'commonSeriesOptions.doughnutSize',
    'commonSeriesOptions.drawType', 'commonSeriesOptions.enableAnimation', 'commonSeriesOptions.enableSmartLabels', 'commonSeriesOptions.endAngle', 'commonSeriesOptions.explode',
    'commonSeriesOptions.explodeAll', 'commonSeriesOptions.explodeIndex', 'commonSeriesOptions.explodeOffset', 'commonSeriesOptions.fill', 'commonSeriesOptions.font',
    'commonSeriesOptions.font.color', 'commonSeriesOptions.font.fontFamily', 'commonSeriesOptions.font.fontStyle', 'commonSeriesOptions.font.fontWeight', 'commonSeriesOptions.font.opacity',
    'commonSeriesOptions.font.size', 'commonSeriesOptions.funnelHeight', 'commonSeriesOptions.funnelWidth', 'commonSeriesOptions.gapRatio', 'commonSeriesOptions.isClosed',
    'commonSeriesOptions.isStacking', 'commonSeriesOptions.isTransposed', 'commonSeriesOptions.showMedian', 'commonSeriesOptions.labelPosition', 'commonSeriesOptions.boxPlotMode',
    'commonSeriesOptions.lineCap', 'commonSeriesOptions.lineJoin', 'commonSeriesOptions.marker', 'commonSeriesOptions.marker.border', 'commonSeriesOptions.marker.dataLabel',
    'commonSeriesOptions.marker.fill', 'commonSeriesOptions.marker.imageUrl', 'commonSeriesOptions.marker.opacity', 'commonSeriesOptions.marker.shape', 'commonSeriesOptions.marker.size',
    'commonSeriesOptions.marker.visible', 'commonSeriesOptions.opacity', 'commonSeriesOptions.outlierSettings', 'commonSeriesOptions.outlierSettings.shape', 'commonSeriesOptions.outlierSettings.size',
    'commonSeriesOptions.palette', 'commonSeriesOptions.pieCoefficient', 'commonSeriesOptions.pointColorMappingName', 'commonSeriesOptions.pyramidMode', 'commonSeriesOptions.startAngle',
    'commonSeriesOptions.cornerRadius', 'commonSeriesOptions.cornerRadius.topLeft', 'commonSeriesOptions.cornerRadius.topRight', 'commonSeriesOptions.cornerRadius.bottomLeft', 'commonSeriesOptions.cornerRadius.bottomRight',
    'commonSeriesOptions.tooltip', 'commonSeriesOptions.tooltip.border', 'commonSeriesOptions.tooltip.rx', 'commonSeriesOptions.tooltip.ry', 'commonSeriesOptions.tooltip.duration',
    'commonSeriesOptions.tooltip.enableAnimation', 'commonSeriesOptions.tooltip.fill', 'commonSeriesOptions.tooltip.format', 'commonSeriesOptions.tooltip.opacity', 'commonSeriesOptions.tooltip.template',
    'commonSeriesOptions.tooltip.visible', 'commonSeriesOptions.type', 'commonSeriesOptions.xAxisName', 'commonSeriesOptions.xName', 'commonSeriesOptions.yAxisName',
    'commonSeriesOptions.yName', 'commonSeriesOptions.high', 'commonSeriesOptions.low', 'commonSeriesOptions.open', 'commonSeriesOptions.close',
    'commonSeriesOptions.zOrder', 'commonSeriesOptions.size', 'commonSeriesOptions.emptyPointSettings', 'commonSeriesOptions.emptyPointSettings.visible', 'commonSeriesOptions.emptyPointSettings.displayMode',
    'commonSeriesOptions.emptyPointSettings.style', 'commonSeriesOptions.positiveFill', 'commonSeriesOptions.connectorLine', 'commonSeriesOptions.connectorLine.width', 'commonSeriesOptions.connectorLine.color',
    'commonSeriesOptions.connectorLine.dashArray', 'commonSeriesOptions.connectorLine.opacity', 'commonSeriesOptions.dragSettings', 'commonSeriesOptions.dragSettings.enable', 'commonSeriesOptions.dragSettings.type',
    'commonSeriesOptions.errorBar', 'commonSeriesOptions.errorBar.visibility', 'commonSeriesOptions.errorBar.type', 'commonSeriesOptions.errorBar.mode', 'commonSeriesOptions.errorBar.direction',
    'commonSeriesOptions.errorBar.verticalErrorValue', 'commonSeriesOptions.errorBar.horizontalErrorValue', 'commonSeriesOptions.errorBar.horizontalPositiveErrorValue', 'commonSeriesOptions.errorBar.horizontalNegativeErrorValue', 'commonSeriesOptions.errorBar.verticalPositiveErrorValue',
    'commonSeriesOptions.errorBar.verticalNegativeErrorValue', 'commonSeriesOptions.errorBar.fill', 'commonSeriesOptions.errorBar.width', 'commonSeriesOptions.errorBar.cap', 'commonSeriesOptions.highlightSettings',
    'commonSeriesOptions.highlightSettings.enable', 'commonSeriesOptions.highlightSettings.mode', 'commonSeriesOptions.highlightSettings.color', 'commonSeriesOptions.highlightSettings.opacity', 'commonSeriesOptions.highlightSettings.border',
    'commonSeriesOptions.highlightSettings.pattern', 'commonSeriesOptions.highlightSettings.customPattern', 'commonSeriesOptions.selectionSettings', 'commonSeriesOptions.selectionSettings.enable', 'commonSeriesOptions.selectionSettings.type',
    'commonSeriesOptions.selectionSettings.mode', 'commonSeriesOptions.selectionSettings.rangeType', 'commonSeriesOptions.selectionSettings.color', 'commonSeriesOptions.selectionSettings.opacity', 'commonSeriesOptions.selectionSettings.border',
    'commonSeriesOptions.selectionSettings.pattern', 'commonSeriesOptions.selectionSettings.customPattern', 'crosshair.trackballTooltipSettings', 'crosshair.trackballTooltipSettings.border', 'crosshair.trackballTooltipSettings.fill',
    'crosshair.trackballTooltipSettings.rx', 'crosshair.trackballTooltipSettings.ry', 'crosshair.trackballTooltipSettings.opacity', 'crosshair.trackballTooltipSettings.mode', 'crosshair.marker',
    'crosshair.marker.border', 'crosshair.marker.opacity', 'crosshair.marker.size', 'crosshair.marker.visible', 'crosshair.line',
    'crosshair.line.color', 'crosshair.line.width', 'crosshair.type', 'crosshair.visible', 'legend.alignment',
    'legend.background', 'legend.border', 'legend.border.color', 'legend.border.width', 'legend.columnCount',
    'legend.enableScrollbar', 'legend.fill', 'legend.font', 'legend.font.fontFamily', 'legend.font.fontStyle',
    'legend.font.fontWeight', 'legend.font.size', 'legend.itemPadding', 'legend.itemStyle', 'legend.itemStyle.border',
    'legend.itemStyle.height', 'legend.itemStyle.width', 'legend.location', 'legend.location.x', 'legend.location.y',
    'legend.opacity', 'legend.position', 'legend.rowCount', 'legend.shape', 'legend.size',
    'legend.size.height', 'legend.size.width', 'legend.title', 'legend.title.font', 'legend.title.text',
    'legend.title.textAlignment', 'legend.textOverflow', 'legend.textWidth', 'legend.visible', 'primaryXAxis.alternateGridBand',
    'primaryXAxis.alternateGridBand.even', 'primaryXAxis.alternateGridBand.odd', 'primaryXAxis.crossesAt', 'primaryXAxis.crossesInAxis', 'primaryXAxis.isIndexed',
    'primaryXAxis.axisLine', 'primaryXAxis.axisLine.dashArray', 'primaryXAxis.axisLine.offset', 'primaryXAxis.axisLine.visible', 'primaryXAxis.axisLine.color',
    'primaryXAxis.axisLine.width', 'primaryXAxis.columnIndex', 'primaryXAxis.columnSpan', 'primaryXAxis.crosshairLabel', 'primaryXAxis.crosshairLabel.visible',
    'primaryXAxis.desiredIntervals', 'primaryXAxis.labelPlacement', 'primaryXAxis.edgeLabelPlacement', 'primaryXAxis.enableTrim', 'primaryXAxis.font',
    'primaryXAxis.font.fontFamily', 'primaryXAxis.font.fontStyle', 'primaryXAxis.font.fontWeight', 'primaryXAxis.font.opacity', 'primaryXAxis.font.size',
    'primaryXAxis.intervalType', 'primaryXAxis.isInversed', 'primaryXAxis.labelFormat', 'primaryXAxis.labelIntersectAction', 'primaryXAxis.labelPosition',
    'primaryXAxis.alignment', 'primaryXAxis.labelRotation', 'primaryXAxis.logBase', 'primaryXAxis.majorGridLines', 'primaryXAxis.majorGridLines.dashArray',
    'primaryXAxis.majorGridLines.color', 'primaryXAxis.majorGridLines.opacity', 'primaryXAxis.majorGridLines.visible', 'primaryXAxis.majorGridLines.width', 'primaryXAxis.majorTickLines',
    'primaryXAxis.majorTickLines.size', 'primaryXAxis.majorTickLines.visible', 'primaryXAxis.majorTickLines.width', 'primaryXAxis.maximumLabels', 'primaryXAxis.maximumLabelWidth',
    'primaryXAxis.minorGridLines', 'primaryXAxis.minorGridLines.dashArray', 'primaryXAxis.minorGridLines.visible', 'primaryXAxis.minorGridLines.width', 'primaryXAxis.minorTickLines',
    'primaryXAxis.minorTickLines.size', 'primaryXAxis.minorTickLines.visible', 'primaryXAxis.minorTickLines.width', 'primaryXAxis.minorTicksPerInterval', 'primaryXAxis.name',
    'primaryXAxis.opposedPosition', 'primaryXAxis.plotOffset', 'primaryXAxis.range', 'primaryXAxis.range.min', 'primaryXAxis.range.max',
    'primaryXAxis.range.interval', 'primaryXAxis.rangePadding', 'primaryXAxis.roundingPlaces', 'primaryXAxis.tickLinesPosition', 'primaryXAxis.labelBorder',
    'primaryXAxis.labelBorder.color', 'primaryXAxis.labelBorder.width', 'primaryXAxis.title', 'primaryXAxis.title.enableTrim', 'primaryXAxis.title.font',
    'primaryXAxis.title.maximumTitleWidth', 'primaryXAxis.title.text', 'primaryXAxis.title.visible', 'primaryXAxis.title.offset', 'primaryXAxis.title.position',
    'primaryXAxis.title.alignment', 'primaryXAxis.valueType', 'primaryXAxis.visible', 'primaryXAxis.zoomFactor', 'primaryXAxis.zoomPosition',
    'primaryYAxis.alternateGridBand', 'primaryYAxis.alternateGridBand.even', 'primaryYAxis.alternateGridBand.odd', 'primaryYAxis.axisLine', 'primaryYAxis.axisLine.dashArray',
    'primaryYAxis.axisLine.offset', 'primaryYAxis.axisLine.visible', 'primaryYAxis.axisLine.color', 'primaryYAxis.axisLine.width', 'primaryYAxis.crossesAt',
    'primaryYAxis.crossesInAxis', 'primaryYAxis.crosshairLabel', 'primaryYAxis.crosshairLabel.visible', 'primaryYAxis.desiredIntervals', 'primaryYAxis.labelPlacement',
    'primaryYAxis.edgeLabelPlacement', 'primaryYAxis.enableTrim', 'primaryYAxis.font', 'primaryYAxis.font.fontFamily', 'primaryYAxis.font.fontStyle',
    'primaryYAxis.font.fontWeight', 'primaryYAxis.font.opacity', 'primaryYAxis.font.size', 'primaryYAxis.intervalType', 'primaryYAxis.isInversed',
    'primaryYAxis.labelFormat', 'primaryYAxis.labelIntersectAction', 'primaryYAxis.labelPosition', 'primaryYAxis.alignment', 'primaryYAxis.logBase',
    'primaryYAxis.majorGridLines', 'primaryYAxis.majorGridLines.dashArray', 'primaryYAxis.majorGridLines.color', 'primaryYAxis.majorGridLines.opacity', 'primaryYAxis.majorGridLines.visible',
    'primaryYAxis.majorGridLines.width', 'primaryYAxis.majorTickLines', 'primaryYAxis.majorTickLines.size', 'primaryYAxis.majorTickLines.visible', 'primaryYAxis.majorTickLines.width',
    'primaryYAxis.maximumLabels', 'primaryYAxis.maximumLabelWidth', 'primaryYAxis.minorGridLines', 'primaryYAxis.minorGridLines.dashArray', 'primaryYAxis.minorGridLines.visible',
    'primaryYAxis.minorGridLines.width', 'primaryYAxis.minorTickLines', 'primaryYAxis.minorTickLines.size', 'primaryYAxis.minorTickLines.visible', 'primaryYAxis.minorTickLines.width',
    'primaryYAxis.minorTicksPerInterval', 'primaryYAxis.name', 'primaryYAxis.opposedPosition', 'primaryYAxis.plotOffset', 'primaryYAxis.range',
    'primaryYAxis.range.min', 'primaryYAxis.range.max', 'primaryYAxis.range.interval', 'primaryYAxis.rangePadding', 'primaryYAxis.roundingPlaces',
    'primaryYAxis.rowIndex', 'primaryYAxis.rowSpan', 'primaryYAxis.tickLinesPosition', 'primaryYAxis.labelBorder', 'primaryYAxis.labelBorder.color',
    'primaryYAxis.labelBorder.width', 'primaryYAxis.title', 'primaryYAxis.title.enableTrim', 'primaryYAxis.title.font', 'primaryYAxis.title.maximumTitleWidth',
    'primaryYAxis.title.text', 'primaryYAxis.title.visible', 'primaryYAxis.title.offset', 'primaryYAxis.title.position', 'primaryYAxis.title.alignment',
    'primaryYAxis.valueType', 'primaryYAxis.visible', 'primaryYAxis.zoomFactor', 'primaryYAxis.zoomPosition', 'size.height',
    'size.width', 'title.background', 'title.border', 'title.border.width', 'title.border.color',
    'title.border.opacity', 'title.border.cornerRadius', 'title.font', 'title.font.fontFamily', 'title.font.fontStyle',
    'title.font.fontWeight', 'title.font.opacity', 'title.font.size', 'title.subTitle', 'title.subTitle.font',
    'title.subTitle.background', 'title.subTitle.border', 'title.subTitle.text', 'title.subTitle.textAlignment', 'title.text',
    'title.textAlignment', 'zooming.enable', 'zooming.enablePinching', 'zooming.enableDeferredZoom', 'zooming.enableMouseWheel',
    'zooming.type', 'zooming.enableScrollbar', 'zooming.toolbarItems', 'annotations', 'columnDefinitions',
    'indicators', 'axes', 'rowDefinitions', 'series', 'commonSeriesOptions.trendlines',
    'primaryXAxis.multiLevelLabels', 'primaryXAxis.stripLine', 'primaryYAxis.multiLevelLabels', 'primaryYAxis.stripLine'], []);
export let ChartComponent = CreateComponent('Chart', {
    selector: 'ej-chart',
    inputs: Inputs,
    outputs: Outputs,
    template: '',
    queries: {
        _series : new ContentChild(ChartSeriesCollectionDirective),
        _indicators : new ContentChild(ChartIndicatorsDirective),
        _annotations : new ContentChild(ChartAnnotationsDirective),
        _primaryXAxis_stripLine : new ContentChild(ChartPrimaryXAxisStripLineCollectionDirective),
        _primaryYAxis_stripLine : new ContentChild(ChartPrimaryYAxisStripLineCollectionDirective),
        _rowDefinitions : new ContentChild(ChartRowDefinitionsDirective),
        _columnDefinitions : new ContentChild(ChartColumnDefinitionsDirective),
    }
}, {
        tags: ['series', 'indicators', 'annotations', 'primaryXAxis.stripLine', 'primaryYAxis.stripLine', 'rowDefinitions', 'columnDefinitions'],
        twoways: [],
        complexes: ComplexProperties,
    });

export const EJ_CHART_COMPONENTS: Type<any>[] = [ChartComponent , ChartTrendlinesDirective, ChartPointsDirective, ChartSeriesCollectionDirective, ChartIndicatorsDirective, ChartAnnotationsDirective, ChartPrimaryXAxisStripLineCollectionDirective, ChartPrimaryYAxisStripLineCollectionDirective, ChartRowDefinitionsDirective, ChartColumnDefinitionsDirective, ChartTrendlineDirective, ChartPointDirective, ChartSeriesDirective, ChartIndicatorDirective, ChartAnnotationDirective, ChartPrimaryXAxisStripLineDirective, ChartPrimaryYAxisStripLineDirective, ChartRowDefinitionDirective, ChartColumnDefinitionDirective];

