import { CreateComponent, Utils, Type, CreateArrayTagDirective, CreateComplexDirective, ContentChild, forwardRef } from './core';
export let Map_LayerDirective = CreateComplexDirective({
    selector: 'e-layers>e-layer',
    inputs: ['bingMapType', 'bubbleSettings', 'bubbleSettings.bubbleOpacity', 'bubbleSettings.color', 'bubbleSettings.colorMappings',
        'bubbleSettings.colorMappings.rangeColorMapping', 'bubbleSettings.colorValuePath', 'bubbleSettings.maxValue', 'bubbleSettings.minValue', 'bubbleSettings.showBubble',
        'bubbleSettings.showTooltip', 'bubbleSettings.tooltipTemplate', 'bubbleSettings.valuePath', 'dataSource', 'shapeDataPath',
        'shapePropertyPath', 'enableMouseHover', 'enableSelection', 'key', 'labelSettings',
        'labelSettings.enableSmartLabel', 'labelSettings.labelLength', 'labelSettings.labelPath', 'labelSettings.showLabels', 'labelSettings.smartLabelSize',
        'geometryType', 'layerType', 'legendSettings', 'legendSettings.dockOnMap', 'legendSettings.dockPosition',
        'legendSettings.height', 'legendSettings.icon', 'legendSettings.iconHeight', 'legendSettings.iconWidth', 'legendSettings.labelOrientation',
        'legendSettings.leftLabel', 'legendSettings.mode', 'legendSettings.position', 'legendSettings.positionX', 'legendSettings.positionY',
        'legendSettings.rightLabel', 'legendSettings.showLabels', 'legendSettings.showLegend', 'legendSettings.title', 'legendSettings.type',
        'legendSettings.width', 'mapItemsTemplate', 'markers', 'markerTemplate', 'selectedMapShapes',
        'selectionMode', 'shapeData', 'shapeSettings', 'shapeSettings.autoFill', 'shapeSettings.colorMappings',
        'shapeSettings.colorMappings.rangeColorMapping', 'shapeSettings.colorMappings.equalColorMapping', 'shapeSettings.colorPalette', 'shapeSettings.colorValuePath', 'shapeSettings.enableGradient',
        'shapeSettings.fill', 'shapeSettings.highlightBorderWidth', 'shapeSettings.highlightColor', 'shapeSettings.highlightStroke', 'shapeSettings.selectionColor',
        'shapeSettings.selectionStroke', 'shapeSettings.selectionStrokeWidth', 'shapeSettings.stroke', 'shapeSettings.strokeThickness', 'shapeSettings.valuePath',
        'showMapItems', 'showTooltip', 'tooltipTemplate', 'urlTemplate'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['bubbleSettings', 'bubbleSettings.colorMappings', 'labelSettings', 'legendSettings', 'shapeSettings', 'shapeSettings.colorMappings'],
         type: forwardRef(() => MapComponent)
    });


export let Map_LayersDirective = CreateArrayTagDirective('layers', 'ej-map>e-layers', Map_LayerDirective);


let Outputs = ['markerSelected', 'mouseleave', 'mouseover', 'onRenderComplete', 'panned',
    'shapeSelected', 'zoomedIn', 'zoomedOut'
    , 'model.baseMapIndexChange: baseMapIndexChange', 'model.enablePanChange: enablePanChange', 'model.enableResizeChange: enableResizeChange', 'model.enableAnimationChange: enableAnimationChange', 'model.zoomSettings.levelChange: zoomSettings.levelChange'
    , 'model.zoomSettings.minValueChange: zoomSettings.minValueChange', 'model.zoomSettings.maxValueChange: zoomSettings.maxValueChange', 'model.zoomSettings.factorChange: zoomSettings.factorChange', 'model.zoomSettings.enableZoomChange: zoomSettings.enableZoomChange', 'model.zoomSettings.enableZoomOnSelectionChange: zoomSettings.enableZoomOnSelectionChange'
    , 'model.navigationControl.enableNavigationChange: navigationControl.enableNavigationChange', 'model.navigationControl.orientationChange: navigationControl.orientationChange', 'model.navigationControl.absolutePositionChange: navigationControl.absolutePositionChange', 'model.navigationControl.dockPositionChange: navigationControl.dockPositionChange'];
let ComplexProperties = ['zoomSettings', 'navigationControl'];
let Inputs = Utils.AngularizeInputs(['background', 'centerPosition', 'enableLayerChangeAnimation', 'zoomSettings', 'navigationControl',
    'navigationControl.content', 'layers', 'layers.bubbleSettings.colorMappings.rangeColorMapping', 'layers.shapeSettings.colorMappings.rangeColorMapping', 'layers.shapeSettings.colorMappings.equalColorMapping'], ['baseMapIndex', 'enablePan', 'enableResize', 'enableAnimation', 'zoomSettings.level',
    'zoomSettings.minValue', 'zoomSettings.maxValue', 'zoomSettings.factor', 'zoomSettings.enableZoom', 'zoomSettings.enableZoomOnSelection',
    'navigationControl.enableNavigation', 'navigationControl.orientation', 'navigationControl.absolutePosition', 'navigationControl.dockPosition']);
export let MapComponent = CreateComponent('Map', {
    selector: 'ej-map',
    inputs: Inputs,
    outputs: Outputs,
    template: '',
    queries: {
        _layers : new ContentChild(Map_LayersDirective),
    }
}, {
        tags: ['layers'],
        twoways: ['baseMapIndex', 'enablePan', 'enableResize', 'enableAnimation', 'zoomSettings.level', 'zoomSettings.minValue', 'zoomSettings.maxValue', 'zoomSettings.factor', 'zoomSettings.enableZoom', 'zoomSettings.enableZoomOnSelection', 'navigationControl.enableNavigation', 'navigationControl.orientation', 'navigationControl.absolutePosition', 'navigationControl.dockPosition'],
        complexes: ComplexProperties,
    });

export const EJ_MAP_COMPONENTS: Type<any>[] = [MapComponent , Map_LayersDirective, Map_LayerDirective];

