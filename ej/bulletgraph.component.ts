import { CreateComponent, Utils, Type, CreateArrayTagDirective, CreateComplexDirective, ContentChild, forwardRef } from './core';
export let QualitativeRangeDirective = CreateComplexDirective({
    selector: 'e-qualitativeranges>e-qualitativerange',
    inputs: ['rangeEnd', 'rangeOpacity', 'rangeStroke'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => BulletGraphComponent)
    });


export let QualitativeRangesDirective = CreateArrayTagDirective('qualitativeRanges', 'ej-bulletgraph>e-qualitativeranges', QualitativeRangeDirective);

export let QuantitativeScaleSettingsFeatureMeasureDirective = CreateComplexDirective({
    selector: 'e-quantitativescalesettings-featuremeasures>e-quantitativescalesettings-featuremeasure',
    inputs: ['category', 'comparativeMeasureValue', 'value'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => BulletGraphComponent)
    });


export let QuantitativeScaleSettingsFeatureMeasuresDirective = CreateArrayTagDirective('quantitativeScaleSettings.featureMeasures', 'ej-bulletgraph>e-quantitativescalesettings-featuremeasures', QuantitativeScaleSettingsFeatureMeasureDirective);


let Outputs = ['drawCaption', 'drawCategory', 'drawComparativeMeasureSymbol', 'drawFeatureMeasureBar', 'drawIndicator',
    'drawLabels', 'drawQualitativeRanges', 'load'
    ];
let ComplexProperties = ['captionSettings', 'quantitativeScaleSettings', 'tooltipSettings', 'captionSettings.font', 'captionSettings.indicator',
    'captionSettings.indicator.font', 'captionSettings.indicator.location', 'captionSettings.indicator.symbol', 'captionSettings.indicator.symbol.border', 'captionSettings.indicator.symbol.size',
    'captionSettings.location', 'captionSettings.subTitle', 'captionSettings.subTitle.font', 'captionSettings.subTitle.location', 'quantitativeScaleSettings.comparativeMeasureSettings',
    'quantitativeScaleSettings.featuredMeasureSettings', 'quantitativeScaleSettings.fields', 'quantitativeScaleSettings.labelSettings', 'quantitativeScaleSettings.labelSettings.font', 'quantitativeScaleSettings.location',
    'quantitativeScaleSettings.majorTickSettings', 'quantitativeScaleSettings.minorTickSettings'];
let Inputs = Utils.AngularizeInputs(['applyRangeStrokeToLabels', 'applyRangeStrokeToTicks', 'captionSettings', 'comparativeMeasureValue', 'enableAnimation',
    'flowDirection', 'height', 'isResponsive', 'orientation', 'qualitativeRangeSize',
    'quantitativeScaleLength', 'quantitativeScaleSettings', 'fields', 'theme', 'tooltipSettings',
    'value', 'width', 'captionSettings.enableTrim', 'captionSettings.font', 'captionSettings.font.color',
    'captionSettings.font.fontFamily', 'captionSettings.font.fontStyle', 'captionSettings.font.fontWeight', 'captionSettings.font.opacity', 'captionSettings.font.size',
    'captionSettings.indicator', 'captionSettings.indicator.font', 'captionSettings.indicator.location', 'captionSettings.indicator.padding', 'captionSettings.indicator.symbol',
    'captionSettings.indicator.text', 'captionSettings.indicator.textAlignment', 'captionSettings.indicator.textAnchor', 'captionSettings.indicator.textAngle', 'captionSettings.indicator.textPosition',
    'captionSettings.indicator.textSpacing', 'captionSettings.indicator.visible', 'captionSettings.location', 'captionSettings.location.x', 'captionSettings.location.y',
    'captionSettings.padding', 'captionSettings.subTitle', 'captionSettings.subTitle.font', 'captionSettings.subTitle.location', 'captionSettings.subTitle.padding',
    'captionSettings.subTitle.text', 'captionSettings.subTitle.textAlignment', 'captionSettings.subTitle.textAnchor', 'captionSettings.subTitle.textAngle', 'captionSettings.subTitle.textPosition',
    'captionSettings.text', 'captionSettings.textAlignment', 'captionSettings.textAnchor', 'captionSettings.textAngle', 'captionSettings.textPosition',
    'quantitativeScaleSettings.comparativeMeasureSettings', 'quantitativeScaleSettings.comparativeMeasureSettings.stroke', 'quantitativeScaleSettings.comparativeMeasureSettings.width', 'quantitativeScaleSettings.featuredMeasureSettings', 'quantitativeScaleSettings.featuredMeasureSettings.stroke',
    'quantitativeScaleSettings.featuredMeasureSettings.width', 'quantitativeScaleSettings.fields', 'quantitativeScaleSettings.fields.category', 'quantitativeScaleSettings.fields.comparativeMeasure', 'quantitativeScaleSettings.fields.dataSource',
    'quantitativeScaleSettings.fields.featureMeasures', 'quantitativeScaleSettings.fields.query', 'quantitativeScaleSettings.fields.tableName', 'quantitativeScaleSettings.interval', 'quantitativeScaleSettings.labelSettings',
    'quantitativeScaleSettings.labelSettings.font', 'quantitativeScaleSettings.labelSettings.labelPlacement', 'quantitativeScaleSettings.labelSettings.labelPrefix', 'quantitativeScaleSettings.labelSettings.labelSuffix', 'quantitativeScaleSettings.labelSettings.offset',
    'quantitativeScaleSettings.labelSettings.position', 'quantitativeScaleSettings.labelSettings.size', 'quantitativeScaleSettings.labelSettings.stroke', 'quantitativeScaleSettings.location', 'quantitativeScaleSettings.location.x',
    'quantitativeScaleSettings.location.y', 'quantitativeScaleSettings.majorTickSettings', 'quantitativeScaleSettings.majorTickSettings.size', 'quantitativeScaleSettings.majorTickSettings.stroke', 'quantitativeScaleSettings.majorTickSettings.width',
    'quantitativeScaleSettings.maximum', 'quantitativeScaleSettings.minimum', 'quantitativeScaleSettings.minorTickSettings', 'quantitativeScaleSettings.minorTickSettings.size', 'quantitativeScaleSettings.minorTickSettings.stroke',
    'quantitativeScaleSettings.minorTickSettings.width', 'quantitativeScaleSettings.minorTicksPerInterval', 'quantitativeScaleSettings.tickPlacement', 'quantitativeScaleSettings.tickPosition', 'tooltipSettings.captionTemplate',
    'tooltipSettings.enableCaptionTooltip', 'tooltipSettings.template', 'tooltipSettings.visible', 'qualitativeRanges', 'quantitativeScaleSettings.featureMeasures'], []);
export let BulletGraphComponent = CreateComponent('BulletGraph', {
    selector: 'ej-bulletgraph',
    inputs: Inputs,
    outputs: Outputs,
    template: '',
    queries: {
        _qualitativeRanges : new ContentChild(QualitativeRangesDirective),
        _quantitativeScaleSettings_featureMeasures : new ContentChild(QuantitativeScaleSettingsFeatureMeasuresDirective),
    }
}, {
        tags: ['qualitativeRanges', 'quantitativeScaleSettings.featureMeasures'],
        twoways: [],
        complexes: ComplexProperties,
    });

export const EJ_BULLETGRAPH_COMPONENTS: Type<any>[] = [BulletGraphComponent , QualitativeRangesDirective, QuantitativeScaleSettingsFeatureMeasuresDirective, QualitativeRangeDirective, QuantitativeScaleSettingsFeatureMeasureDirective ];

