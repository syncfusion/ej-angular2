import { CreateComponent, Utils, Type, CreateArrayTagDirective, CreateComplexDirective, ContentChild, forwardRef } from './core';
let CircularGaugePointerInputs = Utils.AngularizeInputs(['backgroundColor', 'backNeedleLength', 'border', 'border.color', 'border.width',
        'distanceFromScale', 'gradients', 'imageUrl', 'length', 'markerType',
        'needleType', 'opacity', 'radius', 'placement', 'pointerValueText',
        'pointerValueText.angle', 'pointerValueText.autoAngle', 'pointerValueText.color', 'pointerValueText.distance', 'pointerValueText.font',
        'pointerValueText.font.fontFamily', 'pointerValueText.font.fontStyle', 'pointerValueText.font.size', 'pointerValueText.opacity', 'pointerValueText.showValue',
        'showBackNeedle', 'type', 'value', 'width'], []);

export let CircularGaugePointerDirective = CreateComplexDirective({
    selector: 'e-pointers>e-pointer',
    inputs: CircularGaugePointerInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['border', 'pointerValueText', 'pointerValueText.font'],
         type: forwardRef(() => CircularGaugeComponent)
    });


export let CircularGaugePointersDirective = CreateArrayTagDirective('pointers', 'e-scales>e-pointers', CircularGaugePointerDirective);

let CircularGaugeLabelInputs = Utils.AngularizeInputs(['angle', 'autoAngle', 'color', 'distanceFromScale', 'font',
        'font.fontFamily', 'font.fontStyle', 'font.size', 'includeFirstValue', 'opacity',
        'placement', 'type', 'unitText', 'unitTextPosition'], []);

export let CircularGaugeLabelDirective = CreateComplexDirective({
    selector: 'e-labels>e-label',
    inputs: CircularGaugeLabelInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['font'],
         type: forwardRef(() => CircularGaugeComponent)
    });


export let CircularGaugeLabelsDirective = CreateArrayTagDirective('labels', 'e-scales>e-labels', CircularGaugeLabelDirective);

let CircularGaugeTickInputs = Utils.AngularizeInputs(['angle', 'color', 'distanceFromScale', 'height', 'placement',
        'type', 'width'], []);

export let CircularGaugeTickDirective = CreateComplexDirective({
    selector: 'e-ticks>e-tick',
    inputs: CircularGaugeTickInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => CircularGaugeComponent)
    });


export let CircularGaugeTicksDirective = CreateArrayTagDirective('ticks', 'e-scales>e-ticks', CircularGaugeTickDirective);

let CircularGaugeRangeInputs = Utils.AngularizeInputs(['backgroundColor', 'border', 'border.color', 'border.width', 'distanceFromScale',
        'endValue', 'endWidth', 'gradients', 'opacity', 'placement',
        'size', 'startValue', 'startWidth'], []);

export let CircularGaugeRangeDirective = CreateComplexDirective({
    selector: 'e-ranges>e-range',
    inputs: CircularGaugeRangeInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['border'],
         type: forwardRef(() => CircularGaugeComponent)
    });


export let CircularGaugeRangesDirective = CreateArrayTagDirective('ranges', 'e-scales>e-ranges', CircularGaugeRangeDirective);

let CircularGaugeStateRangeInputs = Utils.AngularizeInputs(['backgroundColor', 'borderColor', 'endValue', 'font', 'startValue',
        'text', 'textColor'], []);

export let CircularGaugeStateRangeDirective = CreateComplexDirective({
    selector: 'e-stateranges>e-staterange',
    inputs: CircularGaugeStateRangeInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => CircularGaugeComponent)
    });


export let CircularGaugeStateRangesDirective = CreateArrayTagDirective('stateRanges', 'e-indicators>e-stateranges', CircularGaugeStateRangeDirective);

let CircularGaugeIndicatorInputs = Utils.AngularizeInputs(['height', 'imageUrl', 'position', 'position.x', 'position.y',
        'stateRanges', 'type', 'width'], []);

export let CircularGaugeIndicatorDirective = CreateComplexDirective({
    selector: 'e-indicators>e-indicator',
    inputs: CircularGaugeIndicatorInputs,
    queries: {
        _stateRanges : new ContentChild(CircularGaugeStateRangesDirective),
    }
}, {
         tags: ['stateRanges' ],
         complexes: ['position'],
         type: forwardRef(() => CircularGaugeComponent)
    });


export let CircularGaugeIndicatorsDirective = CreateArrayTagDirective('indicators', 'e-scales>e-indicators', CircularGaugeIndicatorDirective);

let CircularGaugeSubGaugeInputs = Utils.AngularizeInputs(['height', 'position', 'position.x', 'position.y', 'width'], []);

export let CircularGaugeSubGaugeDirective = CreateComplexDirective({
    selector: 'e-subgauges>e-subgauge',
    inputs: CircularGaugeSubGaugeInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['position'],
         type: forwardRef(() => CircularGaugeComponent)
    });


export let CircularGaugeSubGaugesDirective = CreateArrayTagDirective('subGauges', 'e-scales>e-subgauges', CircularGaugeSubGaugeDirective);

let CircularGaugeScaleInputs = Utils.AngularizeInputs(['backgroundColor', 'border', 'border.color', 'border.width', 'direction',
        'customLabels', 'indicators', 'labels', 'majorIntervalValue', 'maximum',
        'minimum', 'minorIntervalValue', 'opacity', 'pointerCap', 'pointerCap.backgroundColor',
        'pointerCap.borderColor', 'pointerCap.borderWidth', 'pointerCap.interiorGradient', 'pointerCap.radius', 'pointers',
        'radius', 'ranges', 'shadowOffset', 'showIndicators', 'showLabels',
        'showPointers', 'showRanges', 'showScaleBar', 'showTicks', 'size',
        'startAngle', 'subGauges', 'sweepAngle', 'ticks'], []);

export let CircularGaugeScaleDirective = CreateComplexDirective({
    selector: 'e-scales>e-scale',
    inputs: CircularGaugeScaleInputs,
    queries: {
        _pointers : new ContentChild(CircularGaugePointersDirective),
        _labels : new ContentChild(CircularGaugeLabelsDirective),
        _ticks : new ContentChild(CircularGaugeTicksDirective),
        _ranges : new ContentChild(CircularGaugeRangesDirective),
        _indicators : new ContentChild(CircularGaugeIndicatorsDirective),
        _subGauges : new ContentChild(CircularGaugeSubGaugesDirective),
    }
}, {
         tags: ['pointers', 'labels', 'ticks', 'ranges', 'indicators', 'subGauges' ],
         complexes: ['border', 'pointerCap'],
         type: forwardRef(() => CircularGaugeComponent)
    });


export let CircularGaugeScalesDirective = CreateArrayTagDirective('scales', 'ej-circulargauge>e-scales', CircularGaugeScaleDirective);


let Outputs = ['drawCustomLabel', 'drawIndicators', 'drawLabels', 'drawPointerCap', 'drawPointers',
    'drawRange', 'drawTicks', 'load', 'mouseClick', 'mouseClickMove',
    'mouseClickUp', 'renderComplete'
    , 'model.valueChange: valueChange', 'model.minimumChange: minimumChange', 'model.maximumChange: maximumChange'];
let ComplexProperties = ['frame', 'tooltip'];
let Inputs = Utils.AngularizeInputs(['animationSpeed', 'backgroundColor', 'distanceFromCorner', 'enableAnimation', 'frame',
    'gaugePosition', 'height', 'interiorGradient', 'isRadialGradient', 'isResponsive',
    'outerCustomLabelPosition', 'radius', 'readOnly', 'theme', 'tooltip',
    'width', 'frame.backgroundImageUrl', 'frame.frameType', 'frame.halfCircleFrameEndAngle', 'frame.halfCircleFrameStartAngle',
    'tooltip.showCustomLabelTooltip', 'tooltip.showLabelTooltip', 'tooltip.templateID', 'scales', 'scales.indicators.stateRanges'], ['value', 'minimum', 'maximum']);
export let CircularGaugeComponent = CreateComponent('CircularGauge', {
    selector: 'ej-circulargauge',
    inputs: Inputs,
    outputs: Outputs,
    template: '',
    queries: {
        _scales : new ContentChild(CircularGaugeScalesDirective),
    }
}, {
        tags: ['scales'],
        twoways: ['value', 'minimum', 'maximum'],
        complexes: ComplexProperties,
    });

export const EJ_CIRCULARGAUGE_COMPONENTS: Type<any>[] = [CircularGaugeComponent , CircularGaugePointersDirective, CircularGaugeLabelsDirective, CircularGaugeTicksDirective, CircularGaugeRangesDirective, CircularGaugeStateRangesDirective, CircularGaugeIndicatorsDirective, CircularGaugeSubGaugesDirective, CircularGaugeScalesDirective, CircularGaugePointerDirective, CircularGaugeLabelDirective, CircularGaugeTickDirective, CircularGaugeRangeDirective, CircularGaugeStateRangeDirective, CircularGaugeIndicatorDirective, CircularGaugeSubGaugeDirective, CircularGaugeScaleDirective];

