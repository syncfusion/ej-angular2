import { CreateComponent, Utils, Type, CreateArrayTagDirective, CreateComplexDirective, ContentChild, forwardRef } from './core';
export let CircularGauge_PointerDirective = CreateComplexDirective({
    selector: 'e-pointers>e-pointer',
    inputs: ['backgroundColor', 'backNeedleLength', 'border', 'border.color', 'border.width',
        'distanceFromScale', 'gradients', 'imageUrl', 'length', 'markerType',
        'needleType', 'opacity', 'radius', 'placement', 'pointerValueText',
        'pointerValueText.angle', 'pointerValueText.autoAngle', 'pointerValueText.color', 'pointerValueText.distance', 'pointerValueText.font',
        'pointerValueText.font.fontFamily', 'pointerValueText.font.fontStyle', 'pointerValueText.font.size', 'pointerValueText.opacity', 'pointerValueText.showValue',
        'showBackNeedle', 'type', 'value', 'width'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['border', 'pointerValueText', 'pointerValueText.font'],
         type: forwardRef(() => CircularGaugeComponent)
    });


export let CircularGauge_PointersDirective = CreateArrayTagDirective('pointers', 'e-scales>e-pointers', CircularGauge_PointerDirective);

export let CircularGauge_LabelDirective = CreateComplexDirective({
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


export let CircularGauge_LabelsDirective = CreateArrayTagDirective('labels', 'e-scales>e-labels', CircularGauge_LabelDirective);

export let CircularGauge_TickDirective = CreateComplexDirective({
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


export let CircularGauge_TicksDirective = CreateArrayTagDirective('ticks', 'e-scales>e-ticks', CircularGauge_TickDirective);

export let CircularGauge_RangeDirective = CreateComplexDirective({
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


export let CircularGauge_RangesDirective = CreateArrayTagDirective('ranges', 'e-scales>e-ranges', CircularGauge_RangeDirective);

export let CircularGauge_StateRangeDirective = CreateComplexDirective({
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


export let CircularGauge_StateRangesDirective = CreateArrayTagDirective('stateRanges', 'e-indicators>e-stateranges', CircularGauge_StateRangeDirective);

export let CircularGauge_IndicatorDirective = CreateComplexDirective({
    selector: 'e-indicators>e-indicator',
    inputs: ['height', 'imageUrl', 'position', 'position.x', 'position.y',
        'stateRanges', 'type', 'width'],
    queries: {
        _stateRanges : new ContentChild(CircularGauge_StateRangesDirective),
    }
}, {
         tags: ['stateRanges' ],
         complexes: ['position'],
         type: forwardRef(() => CircularGaugeComponent)
    });


export let CircularGauge_IndicatorsDirective = CreateArrayTagDirective('indicators', 'e-scales>e-indicators', CircularGauge_IndicatorDirective);

export let CircularGauge_SubGaugeDirective = CreateComplexDirective({
    selector: 'e-subgauges>e-subgauge',
    inputs: ['height', 'position', 'position.x', 'position.y', 'width'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['position'],
         type: forwardRef(() => CircularGaugeComponent)
    });


export let CircularGauge_SubGaugesDirective = CreateArrayTagDirective('subGauges', 'e-scales>e-subgauges', CircularGauge_SubGaugeDirective);

export let CircularGauge_ScaleDirective = CreateComplexDirective({
    selector: 'e-scales>e-scale',
    inputs: ['backgroundColor', 'border', 'border.color', 'border.width', 'direction',
        'customLabels', 'indicators', 'labels', 'majorIntervalValue', 'maximum',
        'minimum', 'minorIntervalValue', 'opacity', 'pointerCap', 'pointerCap.backgroundColor',
        'pointerCap.borderColor', 'pointerCap.borderWidth', 'pointerCap.interiorGradient', 'pointerCap.radius', 'pointers',
        'radius', 'ranges', 'shadowOffset', 'showIndicators', 'showLabels',
        'showPointers', 'showRanges', 'showScaleBar', 'showTicks', 'size',
        'startAngle', 'subGauges', 'sweepAngle', 'ticks'],
    queries: {
        _pointers : new ContentChild(CircularGauge_PointersDirective),
        _labels : new ContentChild(CircularGauge_LabelsDirective),
        _ticks : new ContentChild(CircularGauge_TicksDirective),
        _ranges : new ContentChild(CircularGauge_RangesDirective),
        _indicators : new ContentChild(CircularGauge_IndicatorsDirective),
        _subGauges : new ContentChild(CircularGauge_SubGaugesDirective),
    }
}, {
         tags: ['pointers', 'labels', 'ticks', 'ranges', 'indicators', 'subGauges' ],
         complexes: ['border', 'pointerCap'],
         type: forwardRef(() => CircularGaugeComponent)
    });


export let CircularGauge_ScalesDirective = CreateArrayTagDirective('scales', 'ej-circulargauge>e-scales', CircularGauge_ScaleDirective);


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
        _scales : new ContentChild(CircularGauge_ScalesDirective),
    }
}, {
        tags: ['scales'],
        twoways: ['value', 'minimum', 'maximum'],
        complexes: ComplexProperties,
    });

export const EJ_CIRCULARGAUGE_COMPONENTS: Type<any>[] = [CircularGaugeComponent , CircularGauge_PointersDirective, CircularGauge_LabelsDirective, CircularGauge_TicksDirective, CircularGauge_RangesDirective, CircularGauge_StateRangesDirective, CircularGauge_IndicatorsDirective, CircularGauge_SubGaugesDirective, CircularGauge_ScalesDirective, CircularGauge_PointerDirective, CircularGauge_LabelDirective, CircularGauge_TickDirective, CircularGauge_RangeDirective, CircularGauge_StateRangeDirective, CircularGauge_IndicatorDirective, CircularGauge_SubGaugeDirective, CircularGauge_ScaleDirective];

