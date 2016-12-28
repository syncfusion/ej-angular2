import { CreateComponent, Utils, Type, CreateArrayTagDirective, CreateComplexDirective, ContentChild, forwardRef } from './core';
export let MarkerPointerDirective = CreateComplexDirective({
    selector: 'e-markerpointers>e-markerpointer',
    inputs: ['backgroundColor', 'border', 'border.color', 'border.width', 'distanceFromScale',
        'gradients', 'length', 'opacity', 'placement', 'type',
        'value', 'width'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['border'],
         type: forwardRef(() => LinearGaugeComponent)
    });


export let MarkerPointersDirective = CreateArrayTagDirective('markerPointers', 'e-scales>e-markerpointers', MarkerPointerDirective);

export let BarPointerDirective = CreateComplexDirective({
    selector: 'e-barpointers>e-barpointer',
    inputs: ['backgroundColor', 'border', 'border.color', 'border.width', 'distanceFromScale',
        'gradients', 'opacity', 'value', 'width'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['border'],
         type: forwardRef(() => LinearGaugeComponent)
    });


export let BarPointersDirective = CreateArrayTagDirective('barPointers', 'e-scales>e-barpointers', BarPointerDirective);

export let LinearGauge_RangeDirective = CreateComplexDirective({
    selector: 'e-ranges>e-range',
    inputs: ['backgroundColor', 'border', 'border.color', 'border.width', 'distanceFromScale',
        'endValue', 'endWidth', 'gradients', 'opacity', 'placement',
        'startValue', 'startWidth'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['border'],
         type: forwardRef(() => LinearGaugeComponent)
    });


export let LinearGauge_RangesDirective = CreateArrayTagDirective('ranges', 'e-scales>e-ranges', LinearGauge_RangeDirective);

export let LinearGauge_TickDirective = CreateComplexDirective({
    selector: 'e-ticks>e-tick',
    inputs: ['angle', 'color', 'distanceFromScale', 'distanceFromScale.x', 'distanceFromScale.y',
        'height', 'opacity', 'placement', 'type', 'width'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['distanceFromScale'],
         type: forwardRef(() => LinearGaugeComponent)
    });


export let LinearGauge_TicksDirective = CreateArrayTagDirective('ticks', 'e-scales>e-ticks', LinearGauge_TickDirective);

export let LinearGauge_StateLinearGauge_RangeDirective = CreateComplexDirective({
    selector: 'e-stateranges>e-staterange',
    inputs: ['backgroundColor', 'borderColor', 'endValue', 'startValue', 'text',
        'textColor'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => LinearGaugeComponent)
    });


export let LinearGauge_StateLinearGauge_RangesDirective = CreateArrayTagDirective('stateRanges', 'e-indicators>e-stateranges', LinearGauge_StateLinearGauge_RangeDirective);

export let LinearGauge_IndicatorDirective = CreateComplexDirective({
    selector: 'e-indicators>e-indicator',
    inputs: ['backgroundColor', 'border', 'border.color', 'border.width', 'font',
        'font.fontFamily', 'font.fontStyle', 'font.size', 'height', 'opacity',
        'position', 'position.x', 'position.y', 'stateRanges', 'textLocation',
        'textLocation.x', 'textLocation.y', 'type', 'width'],
    queries: {
        _stateRanges : new ContentChild(LinearGauge_StateLinearGauge_RangesDirective),
    }
}, {
         tags: ['stateRanges' ],
         complexes: ['border', 'font', 'position', 'textLocation'],
         type: forwardRef(() => LinearGaugeComponent)
    });


export let LinearGauge_IndicatorsDirective = CreateArrayTagDirective('indicators', 'e-scales>e-indicators', LinearGauge_IndicatorDirective);

export let LinearGauge_LabelDirective = CreateComplexDirective({
    selector: 'e-labels>e-label',
    inputs: ['angle', 'distanceFromScale', 'distanceFromScale.x', 'distanceFromScale.y', 'font',
        'font.fontFamily', 'font.fontStyle', 'font.size', 'includeFirstValue', 'opacity',
        'placement', 'textColor', 'type', 'unitText', 'unitTextPlacement'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['distanceFromScale', 'font'],
         type: forwardRef(() => LinearGaugeComponent)
    });


export let LinearGauge_LabelsDirective = CreateArrayTagDirective('labels', 'e-scales>e-labels', LinearGauge_LabelDirective);

export let LinearGauge_ScaleDirective = CreateComplexDirective({
    selector: 'e-scales>e-scale',
    inputs: ['backgroundColor', 'barPointers', 'border', 'border.color', 'border.width',
        'customLabels', 'direction', 'indicators', 'labels', 'length',
        'majorIntervalValue', 'markerPointers', 'maximum', 'minimum', 'minorIntervalValue',
        'opacity', 'position', 'position.x', 'position.y', 'ranges',
        'shadowOffset', 'showBarPointers', 'showCustomLabels', 'showIndicators', 'showLabels',
        'showMarkerPointers', 'showRanges', 'showTicks', 'ticks', 'type',
        'width'],
    queries: {
        _markerPointers : new ContentChild(MarkerPointersDirective),
        _barPointers : new ContentChild(BarPointersDirective),
        _ranges : new ContentChild(LinearGauge_RangesDirective),
        _ticks : new ContentChild(LinearGauge_TicksDirective),
        _indicators : new ContentChild(LinearGauge_IndicatorsDirective),
        _labels : new ContentChild(LinearGauge_LabelsDirective),
    }
}, {
         tags: ['markerPointers', 'barPointers', 'ranges', 'ticks', 'indicators', 'labels' ],
         complexes: ['border', 'position'],
         type: forwardRef(() => LinearGaugeComponent)
    });


export let LinearGauge_ScalesDirective = CreateArrayTagDirective('scales', 'ej-lineargauge>e-scales', LinearGauge_ScaleDirective);


let Outputs = ['drawBarPointers', 'drawCustomLabel', 'drawIndicators', 'drawLabels', 'drawMarkerPointers',
    'drawRange', 'drawTicks', 'init', 'load', 'mouseClick',
    'mouseClickMove', 'mouseClickUp', 'renderComplete'
    , 'model.valueChange: valueChange', 'model.minimumChange: minimumChange', 'model.maximumChange: maximumChange'];
let ComplexProperties = ['frame', 'tooltip'];
let Inputs = Utils.AngularizeInputs(['animationSpeed', 'backgroundColor', 'borderColor', 'enableAnimation', 'enableMarkerPointerAnimation',
    'isResponsive', 'frame', 'height', 'labelColor', 'orientation',
    'outerCustomLabelPosition', 'pointerGradient1', 'pointerGradient2', 'readOnly', 'theme',
    'tickColor', 'tooltip', 'width', 'frame.backgroundImageUrl', 'frame.innerWidth',
    'frame.outerWidth', 'tooltip.showCustomLabelTooltip', 'tooltip.showLabelTooltip', 'tooltip.templateID', 'scales',
    'scales.indicators.stateRanges'], ['value', 'minimum', 'maximum']);
export let LinearGaugeComponent = CreateComponent('LinearGauge', {
    selector: 'ej-lineargauge',
    inputs: Inputs,
    outputs: Outputs,
    template: '',
    queries: {
        _scales : new ContentChild(LinearGauge_ScalesDirective),
    }
}, {
        tags: ['scales'],
        twoways: ['value', 'minimum', 'maximum'],
        complexes: ComplexProperties,
    });

export const EJ_LINEARGAUGE_COMPONENTS: Type<any>[] = [LinearGaugeComponent , MarkerPointersDirective, BarPointersDirective, LinearGauge_RangesDirective, LinearGauge_TicksDirective, LinearGauge_StateLinearGauge_RangesDirective, LinearGauge_IndicatorsDirective, LinearGauge_LabelsDirective, LinearGauge_ScalesDirective, MarkerPointerDirective, BarPointerDirective, LinearGauge_RangeDirective, LinearGauge_TickDirective, LinearGauge_StateLinearGauge_RangeDirective, LinearGauge_IndicatorDirective, LinearGauge_LabelDirective, LinearGauge_ScaleDirective ];

