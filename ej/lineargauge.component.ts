import { CreateComponent, Utils, Type, CreateArrayTagDirective, CreateComplexDirective, ContentChild, forwardRef } from './core';
let LinearGaugeMarkerPointerInputs = Utils.AngularizeInputs(['backgroundColor', 'border', 'border.color', 'border.width', 'distanceFromScale',
        'gradients', 'length', 'opacity', 'placement', 'type',
        'value', 'width'], []);

export let LinearGaugeMarkerPointerDirective = CreateComplexDirective({
    selector: 'e-markerpointers>e-markerpointer',
    inputs: LinearGaugeMarkerPointerInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['border'],
         type: forwardRef(() => LinearGaugeComponent)
    });


export let LinearGaugeMarkerPointersDirective = CreateArrayTagDirective('markerPointers', 'e-scales>e-markerpointers', LinearGaugeMarkerPointerDirective);

let LinearGaugeBarPointerInputs = Utils.AngularizeInputs(['backgroundColor', 'border', 'border.color', 'border.width', 'distanceFromScale',
        'gradients', 'opacity', 'value', 'width'], []);

export let LinearGaugeBarPointerDirective = CreateComplexDirective({
    selector: 'e-barpointers>e-barpointer',
    inputs: LinearGaugeBarPointerInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['border'],
         type: forwardRef(() => LinearGaugeComponent)
    });


export let LinearGaugeBarPointersDirective = CreateArrayTagDirective('barPointers', 'e-scales>e-barpointers', LinearGaugeBarPointerDirective);

let LinearGaugeRangeInputs = Utils.AngularizeInputs(['backgroundColor', 'border', 'border.color', 'border.width', 'distanceFromScale',
        'endValue', 'endWidth', 'gradients', 'opacity', 'placement',
        'startValue', 'startWidth'], []);

export let LinearGaugeRangeDirective = CreateComplexDirective({
    selector: 'e-ranges>e-range',
    inputs: LinearGaugeRangeInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['border'],
         type: forwardRef(() => LinearGaugeComponent)
    });


export let LinearGaugeRangesDirective = CreateArrayTagDirective('ranges', 'e-scales>e-ranges', LinearGaugeRangeDirective);

let LinearGaugeTickInputs = Utils.AngularizeInputs(['angle', 'color', 'distanceFromScale', 'distanceFromScale.x', 'distanceFromScale.y',
        'height', 'opacity', 'placement', 'type', 'width'], []);

export let LinearGaugeTickDirective = CreateComplexDirective({
    selector: 'e-ticks>e-tick',
    inputs: LinearGaugeTickInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['distanceFromScale'],
         type: forwardRef(() => LinearGaugeComponent)
    });


export let LinearGaugeTicksDirective = CreateArrayTagDirective('ticks', 'e-scales>e-ticks', LinearGaugeTickDirective);

let LinearGaugeStateRangeInputs = Utils.AngularizeInputs(['backgroundColor', 'borderColor', 'endValue', 'startValue', 'text',
        'textColor'], []);

export let LinearGaugeStateRangeDirective = CreateComplexDirective({
    selector: 'e-stateranges>e-staterange',
    inputs: LinearGaugeStateRangeInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => LinearGaugeComponent)
    });


export let LinearGaugeStateRangesDirective = CreateArrayTagDirective('stateRanges', 'e-indicators>e-stateranges', LinearGaugeStateRangeDirective);

let LinearGaugeIndicatorInputs = Utils.AngularizeInputs(['backgroundColor', 'border', 'border.color', 'border.width', 'font',
        'font.fontFamily', 'font.fontStyle', 'font.size', 'height', 'opacity',
        'position', 'position.x', 'position.y', 'stateRanges', 'textLocation',
        'textLocation.x', 'textLocation.y', 'type', 'width'], []);

export let LinearGaugeIndicatorDirective = CreateComplexDirective({
    selector: 'e-indicators>e-indicator',
    inputs: LinearGaugeIndicatorInputs,
    queries: {
        _stateRanges : new ContentChild(LinearGaugeStateRangesDirective),
    }
}, {
         tags: ['stateRanges' ],
         complexes: ['border', 'font', 'position', 'textLocation'],
         type: forwardRef(() => LinearGaugeComponent)
    });


export let LinearGaugeIndicatorsDirective = CreateArrayTagDirective('indicators', 'e-scales>e-indicators', LinearGaugeIndicatorDirective);

let LinearGaugeLabelInputs = Utils.AngularizeInputs(['angle', 'distanceFromScale', 'distanceFromScale.x', 'distanceFromScale.y', 'font',
        'font.fontFamily', 'font.fontStyle', 'font.size', 'includeFirstValue', 'opacity',
        'placement', 'textColor', 'type', 'unitText', 'unitTextPlacement'], []);

export let LinearGaugeLabelDirective = CreateComplexDirective({
    selector: 'e-labels>e-label',
    inputs: LinearGaugeLabelInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['distanceFromScale', 'font'],
         type: forwardRef(() => LinearGaugeComponent)
    });


export let LinearGaugeLabelsDirective = CreateArrayTagDirective('labels', 'e-scales>e-labels', LinearGaugeLabelDirective);

let LinearGaugeScaleInputs = Utils.AngularizeInputs(['backgroundColor', 'barPointers', 'border', 'border.color', 'border.width',
        'customLabels', 'direction', 'indicators', 'labels', 'length',
        'majorIntervalValue', 'markerPointers', 'maximum', 'minimum', 'minorIntervalValue',
        'opacity', 'position', 'position.x', 'position.y', 'ranges',
        'shadowOffset', 'showBarPointers', 'showCustomLabels', 'showIndicators', 'showLabels',
        'showMarkerPointers', 'showRanges', 'showTicks', 'ticks', 'type',
        'width'], []);

export let LinearGaugeScaleDirective = CreateComplexDirective({
    selector: 'e-scales>e-scale',
    inputs: LinearGaugeScaleInputs,
    queries: {
        _markerPointers : new ContentChild(LinearGaugeMarkerPointersDirective),
        _barPointers : new ContentChild(LinearGaugeBarPointersDirective),
        _ranges : new ContentChild(LinearGaugeRangesDirective),
        _ticks : new ContentChild(LinearGaugeTicksDirective),
        _indicators : new ContentChild(LinearGaugeIndicatorsDirective),
        _labels : new ContentChild(LinearGaugeLabelsDirective),
    }
}, {
         tags: ['markerPointers', 'barPointers', 'ranges', 'ticks', 'indicators', 'labels' ],
         complexes: ['border', 'position'],
         type: forwardRef(() => LinearGaugeComponent)
    });


export let LinearGaugeScalesDirective = CreateArrayTagDirective('scales', 'ej-lineargauge>e-scales', LinearGaugeScaleDirective);


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
        _scales : new ContentChild(LinearGaugeScalesDirective),
    }
}, {
        tags: ['scales'],
        twoways: ['value', 'minimum', 'maximum'],
        complexes: ComplexProperties,
    });

export const EJ_LINEARGAUGE_COMPONENTS: Type<any>[] = [LinearGaugeComponent , LinearGaugeMarkerPointersDirective, LinearGaugeBarPointersDirective, LinearGaugeRangesDirective, LinearGaugeTicksDirective, LinearGaugeStateRangesDirective, LinearGaugeIndicatorsDirective, LinearGaugeLabelsDirective, LinearGaugeScalesDirective, LinearGaugeMarkerPointerDirective, LinearGaugeBarPointerDirective, LinearGaugeRangeDirective, LinearGaugeTickDirective, LinearGaugeStateRangeDirective, LinearGaugeIndicatorDirective, LinearGaugeLabelDirective, LinearGaugeScaleDirective];

