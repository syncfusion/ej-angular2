import { CreateComponent, Utils, Type, CreateArrayTagDirective, CreateComplexDirective, ContentChild, forwardRef } from './core';
export let Diagram_CommandManagerCommandDirective = CreateComplexDirective({
    selector: 'e-commandmanager-commands>e-commandmanager-command',
    inputs: ['canExecute', 'execute', 'gesture', 'gesture.key', 'gesture.keyModifiers',
        'parameter'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['gesture'],
         type: forwardRef(() => DiagramComponent)
    });


export let Diagram_CommandManagerCommandsDirective = CreateArrayTagDirective('commandManager.commands', 'ej-diagram>e-commandmanager-commands', Diagram_CommandManagerCommandDirective);

export let Diagram_SegmentDirective = CreateComplexDirective({
    selector: 'e-segments>e-segment',
    inputs: ['direction', 'length', 'point', 'point1', 'point2',
        'type', 'vector1', 'vector2'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => DiagramComponent)
    });


export let Diagram_SegmentsDirective = CreateArrayTagDirective('segments', 'e-connectors>e-segments', Diagram_SegmentDirective);

export let Diagram_ConnectorLabelDirective = CreateComplexDirective({
    selector: 'e-connectorlabels>e-connectorlabel',
    inputs: ['alignment', 'bold', 'borderColor', 'borderWidth', 'boundaryConstraints',
        'fillColor', 'fontColor', 'fontFamily', 'fontSize', 'horizontalAlignment',
        'hyperlink', 'italic', 'mode', 'name', 'offset',
        'margin', 'margin.right', 'margin.left', 'margin.top', 'margin.bottom',
        'opacity', 'readOnly', 'relativeMode', 'rotateAngle', 'segmentOffset',
        'text', 'textAlign', 'textDecoration', 'verticalAlignment', 'visible',
        'width', 'wrapping'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['margin'],
         type: forwardRef(() => DiagramComponent)
    });


export let Diagram_ConnectorLabelsDirective = CreateArrayTagDirective('labels', 'e-connectors>e-connectorlabels', Diagram_ConnectorLabelDirective);

export let Diagram_ConnectorDirective = CreateComplexDirective({
    selector: 'e-connectors>e-connector',
    inputs: ['addInfo', 'bridgeSpace', 'constraints', 'cornerRadius', 'cssClass',
        'horizontalAlign', 'labels', 'lineColor', 'lineDashArray', 'lineHitPadding',
        'lineWidth', 'marginBottom', 'marginLeft', 'marginRight', 'marginTop',
        'name', 'opacity', 'paletteItem', 'parent', 'segments',
        'shape', 'shape.type', 'shape.flow', 'shape.association', 'shape.message',
        'shape.sequence', 'shape.relationship', 'shape.multiplicity', 'shape.multiplicity.type', 'shape.multiplicity.source',
        'shape.multiplicity.source.optional', 'shape.multiplicity.source.lowerBounds', 'shape.multiplicity.source.upperBounds', 'shape.multiplicity.target', 'shape.ActivityFlow',
        'sourceDecorator', 'sourceDecorator.borderColor', 'sourceDecorator.borderWidth', 'sourceDecorator.fillColor', 'sourceDecorator.height',
        'sourceDecorator.pathData', 'sourceDecorator.shape', 'sourceDecorator.width', 'sourceNode', 'sourcePadding',
        'sourcePoint', 'sourcePoint.x', 'sourcePoint.y', 'sourcePort', 'targetDecorator',
        'targetDecorator.borderColor', 'targetDecorator.fillColor', 'targetDecorator.height', 'targetDecorator.pathData', 'targetDecorator.shape',
        'targetDecorator.width', 'targetNode', 'targetPadding', 'targetPoint', 'targetPort',
        'tooltip', 'verticalAlign', 'visible', 'zOrder'],
    queries: {
        _segments : new ContentChild(Diagram_SegmentsDirective),
        _labels : new ContentChild(Diagram_ConnectorLabelsDirective),
    }
}, {
         tags: ['segments', 'labels' ],
         complexes: ['shape', 'shape.multiplicity', 'shape.multiplicity.source', 'sourceDecorator', 'sourcePoint', 'targetDecorator'],
         type: forwardRef(() => DiagramComponent)
    });


export let Diagram_ConnectorsDirective = CreateArrayTagDirective('connectors', 'ej-diagram>e-connectors', Diagram_ConnectorDirective);

export let Diagram_NodeLabelDirective = CreateComplexDirective({
    selector: 'e-nodelabels>e-nodelabel',
    inputs: ['bold', 'borderColor', 'borderWidth', 'fillColor', 'fontColor',
        'fontFamily', 'fontSize', 'horizontalAlignment', 'italic', 'margin',
        'mode', 'name', 'offset', 'opacity', 'overflowType',
        'readOnly', 'rotateAngle', 'text', 'textAlign', 'textDecoration',
        'textOverflow', 'verticalAlignment', 'visible', 'width', 'wrapping'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => DiagramComponent)
    });


export let Diagram_NodeLabelsDirective = CreateArrayTagDirective('labels', 'e-nodes>e-nodelabels', Diagram_NodeLabelDirective);

export let Diagram_PhaseDirective = CreateComplexDirective({
    selector: 'e-phases>e-phase',
    inputs: ['label', 'lineColor', 'lineDashArray', 'lineWidth', 'name',
        'offset', 'orientation', 'type'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => DiagramComponent)
    });


export let Diagram_PhasesDirective = CreateArrayTagDirective('phases', 'e-nodes>e-phases', Diagram_PhaseDirective);

export let Diagram_PortDirective = CreateComplexDirective({
    selector: 'e-ports>e-port',
    inputs: ['borderColor', 'borderWidth', 'connectorPadding', 'constraints', 'fillColor',
        'name', 'offset', 'pathData', 'shape', 'size',
        'visibility'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => DiagramComponent)
    });


export let Diagram_PortsDirective = CreateArrayTagDirective('ports', 'e-nodes>e-ports', Diagram_PortDirective);

export let Diagram_NodeDirective = CreateComplexDirective({
    selector: 'e-nodes>e-node',
    inputs: ['activity', 'addInfo', 'annotation', 'annotation.angle', 'annotation.direction',
        'annotation.height', 'annotation.length', 'annotation.text', 'annotation.width', 'borderColor',
        'borderDashArray', 'borderWidth', 'canUngroup', 'children', 'classifier',
        'class', 'class.name', 'class.attributes', 'class.methods', 'collapseIcon',
        'collapseIcon.borderColor', 'collapseIcon.borderWidth', 'collapseIcon.fillColor', 'collapseIcon.height', 'collapseIcon.horizontalAlignment',
        'collapseIcon.margin', 'collapseIcon.offset', 'collapseIcon.shape', 'collapseIcon.verticalAlignment', 'connectorPadding',
        'constraints', 'container', 'container.orientation', 'container.type', 'cornerRadius',
        'cssClass', 'data', 'data.type', 'data.collection', 'enumeration',
        'enumeration.name', 'enumeration.members', 'event', 'excludeFromLayout', 'expandIcon',
        'expandIcon.borderColor', 'expandIcon.borderWidth', 'expandIcon.fillColor', 'expandIcon.height', 'expandIcon.horizontalAlignment',
        'expandIcon.margin', 'expandIcon.offset', 'expandIcon.shape', 'expandIcon.verticalAlignment', 'fillColor',
        'gateway', 'gradient', 'gradient.LinearGradient', 'gradient.LinearGradient.stops', 'gradient.LinearGradient.x1',
        'gradient.LinearGradient.x2', 'gradient.LinearGradient.y1', 'gradient.LinearGradient.y2', 'gradient.RadialGradient', 'gradient.RadialGradient.cx',
        'gradient.RadialGradient.cy', 'gradient.RadialGradient.fx', 'gradient.RadialGradient.fy', 'gradient.RadialGradient.stops', 'gradient.Stop',
        'gradient.Stop.color', 'gradient.Stop.offset', 'gradient.Stop.opacity', 'group', 'header',
        'height', 'horizontalAlign', 'inEdges', 'interface', 'interface.name',
        'interface.attributes', 'interface.methods', 'isExpanded', 'isSwimlane', 'labels',
        'lanes', 'marginBottom', 'marginLeft', 'marginRight', 'marginTop',
        'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'name',
        'offsetX', 'offsetY', 'opacity', 'orientation', 'outEdges',
        'paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop', 'paletteItem',
        'paletteItem.enableScale', 'paletteItem.height', 'paletteItem.margin', 'paletteItem.previewHeight', 'paletteItem.previewWidth',
        'paletteItem.width', 'parent', 'pathData', 'phases', 'phaseSize',
        'pivot', 'points', 'ports', 'rotateAngle', 'shadow',
        'shadow.angle', 'shadow.distance', 'shadow.opacity', 'shape', 'source',
        'subProcess', 'subProcess.adhoc', 'subProcess.boundary', 'subProcess.compensation', 'subProcess.collapsed',
        'subProcess.event', 'subProcess.events', 'subProcess.loop', 'subProcess.Processes', 'subProcess.trigger',
        'subProcess.type', 'task', 'task.call', 'task.compensation', 'task.loop',
        'task.type', 'templateId', 'textBlock', 'tooltip', 'trigger',
        'type', 'verticalAlign', 'visible', 'width', 'zOrder'],
    queries: {
        _labels : new ContentChild(Diagram_NodeLabelsDirective),
        _phases : new ContentChild(Diagram_PhasesDirective),
        _ports : new ContentChild(Diagram_PortsDirective),
    }
}, {
         tags: ['labels', 'phases', 'ports' ],
         complexes: ['annotation', 'class', 'collapseIcon', 'container', 'data', 'enumeration', 'expandIcon', 'gradient', 'gradient.LinearGradient', 'gradient.RadialGradient', 'gradient.Stop', 'interface', 'paletteItem', 'shadow', 'subProcess', 'task'],
         type: forwardRef(() => DiagramComponent)
    });


export let Diagram_NodesDirective = CreateArrayTagDirective('nodes', 'ej-diagram>e-nodes', Diagram_NodeDirective);


let Outputs = ['autoScrollChange', 'click', 'connectionChange', 'connectorCollectionChange', 'connectorSourceChange',
    'connectorTargetChange', 'contextMenuBeforeOpen', 'contextMenuClick', 'doubleClick', 'drag',
    'dragEnter', 'dragLeave', 'dragOver', 'drop', 'editorFocusChange',
    'groupChange', 'historyChange', 'itemClick', 'mouseEnter', 'mouseLeave',
    'mouseOver', 'nodeCollectionChange', 'propertyChange', 'rotationChange', 'scrollChange',
    'segmentChange', 'selectionChange', 'sizeChange', 'textChange', 'create'
    ];
let ComplexProperties = ['commandManager', 'contextMenu', 'dataSourceSettings', 'defaultSettings', 'historyManager',
    'layout', 'pageSettings', 'scrollSettings', 'selectedItems', 'snapSettings',
    'tooltip', 'commandManager.commands', 'commandManager.commands.gesture', 'snapSettings.horizontalGridLines', 'snapSettings.verticalGridLines',
    'tooltip.alignment'];
let Inputs = Utils.AngularizeInputs(['backgroundColor', 'backgroundImage', 'bridgeDirection', 'commandManager', 'connectorTemplate',
    'constraints', 'contextMenu', 'dataSourceSettings', 'defaultSettings', 'drawType',
    'enableAutoScroll', 'enableContextMenu', 'height', 'historyManager', 'labelRenderingMode',
    'layout', 'locale', 'nodeTemplate', 'pageSettings', 'scrollSettings',
    'selectedItems', 'showTooltip', 'snapSettings', 'tool', 'tooltip',
    'width', 'zoomFactor', 'backgroundImage.alignment', 'commandManager.commands', 'commandManager.commands.canExecute',
    'commandManager.commands.execute', 'commandManager.commands.gesture', 'commandManager.commands.parameter', 'contextMenu.showCustomMenuItemsOnly', 'dataSourceSettings.dataSource',
    'dataSourceSettings.id', 'dataSourceSettings.parent', 'dataSourceSettings.query', 'dataSourceSettings.root', 'dataSourceSettings.tableName',
    'defaultSettings.connector', 'defaultSettings.group', 'defaultSettings.node', 'historyManager.canPop', 'historyManager.closeGroupAction',
    'historyManager.pop', 'historyManager.push', 'historyManager.redo', 'historyManager.redoStack', 'historyManager.stackLimit',
    'historyManager.startGroupAction', 'historyManager.undo', 'historyManager.undoStack', 'layout.bounds', 'layout.fixedNode',
    'layout.getLayoutInfo', 'layout.horizontalSpacing', 'layout.margin', 'layout.horizontalAlignment', 'layout.verticalAlignment',
    'layout.orientation', 'layout.type', 'layout.verticalSpacing', 'pageSettings.autoScrollBorder', 'pageSettings.multiplePage',
    'pageSettings.pageBackgroundColor', 'pageSettings.pageBorderColor', 'pageSettings.pageBorderWidth', 'pageSettings.pageHeight', 'pageSettings.pageMargin',
    'pageSettings.pageOrientation', 'pageSettings.pageWidth', 'pageSettings.scrollableArea', 'pageSettings.scrollLimit', 'pageSettings.boundaryConstraints',
    'pageSettings.showPageBreak', 'scrollSettings.currentZoom', 'scrollSettings.horizontalOffset', 'scrollSettings.padding', 'scrollSettings.verticalOffset',
    'scrollSettings.viewPortHeight', 'scrollSettings.viewPortWidth', 'selectedItems.children', 'selectedItems.constraints', 'selectedItems.getConstraints',
    'selectedItems.height', 'selectedItems.offsetX', 'selectedItems.offsetY', 'selectedItems.rotateAngle', 'selectedItems.tooltip',
    'selectedItems.width', 'snapSettings.enableSnapToObject', 'snapSettings.horizontalGridLines', 'snapSettings.horizontalGridLines.lineColor', 'snapSettings.horizontalGridLines.lineDashArray',
    'snapSettings.horizontalGridLines.linesInterval', 'snapSettings.horizontalGridLines.snapInterval', 'snapSettings.snapAngle', 'snapSettings.snapConstraints', 'snapSettings.snapObjectDistance',
    'snapSettings.verticalGridLines', 'snapSettings.verticalGridLines.lineColor', 'snapSettings.verticalGridLines.lineDashArray', 'snapSettings.verticalGridLines.linesInterval', 'snapSettings.verticalGridLines.snapInterval',
    'tooltip.alignment', 'tooltip.alignment.horizontal', 'tooltip.alignment.vertical', 'tooltip.margin', 'tooltip.relativeMode',
    'tooltip.templateId', 'connectors', 'nodes', 'contextMenu.items', 'nodes.class.attributes',
    'nodes.class.methods', 'nodes.enumeration.members', 'nodes.interface.attributes', 'nodes.interface.methods', 'selectedItems.userHandles'], []);
export let DiagramComponent = CreateComponent('Diagram', {
    selector: 'ej-diagram',
    inputs: Inputs,
    outputs: Outputs,
    template: '',
    queries: {
        _commandManager_commands : new ContentChild(Diagram_CommandManagerCommandsDirective),
        _connectors : new ContentChild(Diagram_ConnectorsDirective),
        _nodes : new ContentChild(Diagram_NodesDirective),
    }
}, {
        tags: ['commandManager.commands', 'connectors', 'nodes'],
        twoways: [],
        complexes: ComplexProperties,
    });

export const EJ_DIAGRAM_COMPONENTS: Type<any>[] = [DiagramComponent , Diagram_CommandManagerCommandsDirective, Diagram_SegmentsDirective, Diagram_ConnectorLabelsDirective, Diagram_ConnectorsDirective, Diagram_NodeLabelsDirective, Diagram_PhasesDirective, Diagram_PortsDirective, Diagram_NodesDirective, Diagram_CommandManagerCommandDirective, Diagram_SegmentDirective, Diagram_ConnectorLabelDirective, Diagram_ConnectorDirective, Diagram_NodeLabelDirective, Diagram_PhaseDirective, Diagram_PortDirective, Diagram_NodeDirective];

