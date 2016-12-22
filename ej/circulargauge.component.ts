import { CreateComponent, Utils, Type, CreateArrayTagDirective, CreateComplexDirective, ContentChild, forwardRef } from './core';
export let PointerDirective = CreateComplexDirective({
    selector: 'e-pointers>e-pointer',
    inputs: ['backgroundColor', 'backNeedleLength', 'border', 'border.color', 'border.width',
        'distanceFromScale', 'gradients', 'imageUrl', 'length', 'markerType',
        'needleType', 'opacity', 'placement', 'pointerValueText', 'pointerValueText.angle',
        'pointerValueText.autoAngle', 'pointerValueText.color', 'pointerValueText.distance', 'pointerValueText.font', 'pointerValueText.font.fontFamily',
        'pointerValueText.font.fontStyle', 'pointerValueText.font.size', 'pointerValueText.opacity', 'pointerValueText.showValue', 'showBackNeedle',
        'type', 'value', 'width'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['border', 'pointerValueText', 'pointerValueText.font'],
         type: forwardRef(() => CircularGaugeComponent)
    });


export let PointersDirective = CreateArrayTagDirective('pointers', 'e-scales>e-pointers', PointerDirective);

export let LabelDirective = CreateComplexDirective({
    selector: 'e-labels>e-label',
    inputs: ['angle', 'autoAngle', 'color', 'distanceFromScale', 'font',
        'font.fontFamily', 'font.fontStyle', 'font.size', 'includeFirstValue', 'opacity',
        'placement', 'type', 'unitText', 'unitTextPosition'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['font'],
         type: forwardRef(() => CircularGaugeComponent)
    });


export let LabelsDirective = CreateArrayTagDirective('labels', 'e-scales>e-labels', LabelDirective);

export let TickDirective = CreateComplexDirective({
    selector: 'e-ticks>e-tick',
    inputs: ['angle', 'color', 'distanceFromScale', 'height', 'placement',
        'type', 'width'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => CircularGaugeComponent)
    });


export let TicksDirective = CreateArrayTagDirective('ticks', 'e-scales>e-ticks', TickDirective);

export let RangeDirective = CreateComplexDirective({
    selector: 'e-ranges>e-range',
    inputs: ['backgroundColor', 'border', 'border.color', 'border.width', 'distanceFromScale',
        'endValue', 'endWidth', 'gradients', 'opacity', 'placement',
        'size', 'startValue', 'startWidth'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['border'],
         type: forwardRef(() => CircularGaugeComponent)
    });


export let RangesDirective = CreateArrayTagDirective('ranges', 'e-scales>e-ranges', RangeDirective);

export let StateRangeDirective = CreateComplexDirective({
    selector: 'e-stateranges>e-staterange',
    inputs: ['backgroundColor', 'borderColor', 'endValue', 'font', 'startValue',
        'text', 'textColor'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => CircularGaugeComponent)
    });


export let StateRangesDirective = CreateArrayTagDirective('stateRanges', 'e-indicators>e-stateranges', StateRangeDirective);

export let CircularGauge_IndicatorDirective = CreateComplexDirective({
    selector: 'e-indicators>e-indicator',
    inputs: ['height', 'imageUrl', 'position', 'position.x', 'position.y',
        'stateRanges', 'type', 'width'],
    queries: {
        _stateRanges : new ContentChild(StateRangesDirective),
    }
}, {
         tags: ['stateRanges' ],
         complexes: ['position'],
         type: forwardRef(() => CircularGaugeComponent)
    });


export let CircularGauge_IndicatorsDirective = CreateArrayTagDirective('indicators', 'e-scales>e-indicators', CircularGauge_IndicatorDirective);

export let SubGaugeDirective = CreateComplexDirective({
    selector: 'e-subgauges>e-subgauge',
    inputs: ['height', 'position', 'position.x', 'position.y', 'width'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['position'],
         type: forwardRef(() => CircularGaugeComponent)
    });


export let SubGaugesDirective = CreateArrayTagDirective('subGauges', 'e-scales>e-subgauges', SubGaugeDirective);

export let ScaleDirective = CreateComplexDirective({
    selector: 'e-scales>e-scale',
    inputs: ['backgroundColor', 'border', 'border.color', 'border.width', 'direction',
        'customLabels', 'indicators', 'labels', 'majorIntervalValue', 'maximum',
        'minimum', 'minorIntervalValue', 'opacity', 'pointerCap', 'pointerCap.backgroundColor',
        'pointerCap.borderColor', 'pointerCap.borderWidth', 'pointerCap.interiorGradient', 'pointerCap.radius', 'pointers',
        'radius', 'ranges', 'shadowOffset', 'showIndicators', 'showLabels',
        'showPointers', 'showRanges', 'showScaleBar', 'showTicks', 'size',
        'startAngle', 'subGauges', 'sweepAngle', 'ticks'],
    queries: {
        _pointers : new ContentChild(PointersDirective),
        _labels : new ContentChild(LabelsDirective),
        _ticks : new ContentChild(TicksDirective),
        _ranges : new ContentChild(RangesDirective),
        _indicators : new ContentChild(CircularGauge_IndicatorsDirective),
        _subGauges : new ContentChild(SubGaugesDirective),
    }
}, {
         tags: ['pointers', 'labels', 'ticks', 'ranges', 'indicators', 'subGauges' ],
         complexes: ['border', 'pointerCap'],
         type: forwardRef(() => CircularGaugeComponent)
    });


export let ScalesDirective = CreateArrayTagDirective('scales', 'ej-circulargauge>e-scales', ScaleDirective);


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
        _scales : new ContentChild(ScalesDirective),
    }
}, {
        tags: ['scales'],
        twoways: ['value', 'minimum', 'maximum'],
        complexes: ComplexProperties,
    });

export const EJ_CIRCULARGAUGE_COMPONENTS: Type<any>[] = [CircularGaugeComponent , PointersDirective, LabelsDirective, TicksDirective, RangesDirective, StateRangesDirective, CircularGauge_IndicatorsDirective, SubGaugesDirective, ScalesDirective, PointerDirective, LabelDirective, TickDirective, RangeDirective, StateRangeDirective, CircularGauge_IndicatorDirective, SubGaugeDirective, ScaleDirective ];

