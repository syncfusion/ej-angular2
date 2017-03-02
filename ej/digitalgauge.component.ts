import { CreateComponent, Utils, Type, CreateArrayTagDirective, CreateComplexDirective, ContentChild, forwardRef } from './core';
let DigitalGaugeItemInputs = Utils.AngularizeInputs(['characterSettings', 'characterSettings.count', 'characterSettings.opacity', 'characterSettings.spacing', 'characterSettings.type',
        'enableCustomFont', 'font', 'font.fontFamily', 'font.fontStyle', 'font.size',
        'position', 'position.x', 'position.y', 'segmentSettings', 'segmentSettings.color',
        'segmentSettings.gradient', 'segmentSettings.length', 'segmentSettings.opacity', 'segmentSettings.spacing', 'segmentSettings.width',
        'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'textAlign',
        'textColor', 'value'], []);

export let DigitalGaugeItemDirective = CreateComplexDirective({
    selector: 'e-digitalgauge-items>e-digitalgauge-item',
    inputs: DigitalGaugeItemInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['characterSettings', 'font', 'position', 'segmentSettings'],
         type: forwardRef(() => DigitalGaugeComponent)
    });


export let DigitalGaugeItemsDirective = CreateArrayTagDirective('items', 'ej-digitalgauge>e-digitalgauge-items', DigitalGaugeItemDirective);


let Outputs = ['init', 'itemRendering', 'load', 'renderComplete'
    , 'model.valueChange: valueChange'];
let ComplexProperties = ['frame'];
let Inputs = Utils.AngularizeInputs(['frame', 'height', 'isResponsive', 'matrixSegmentData', 'segmentData',
    'themes', 'width', 'frame.backgroundImageUrl', 'frame.innerWidth', 'frame.outerWidth',
    'items'], ['value']);
export let DigitalGaugeComponent = CreateComponent('DigitalGauge', {
    selector: 'ej-digitalgauge',
    inputs: Inputs,
    outputs: Outputs,
    template: '',
    queries: {
        _items : new ContentChild(DigitalGaugeItemsDirective),
    }
}, {
        tags: ['items'],
        twoways: ['value'],
        complexes: ComplexProperties,
    });

export const EJ_DIGITALGAUGE_COMPONENTS: Type<any>[] = [DigitalGaugeComponent , DigitalGaugeItemsDirective, DigitalGaugeItemDirective];

