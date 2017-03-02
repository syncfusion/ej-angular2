import { CreateComponent, Utils, Type, CreateArrayTagDirective, CreateComplexDirective, ContentChild, forwardRef } from './core';
let HeatMapLegendLegendcolorMappingInputs = Utils.AngularizeInputs(['color', 'value', 'label', 'label.bold', 'label.italic',
        'label.text', 'label.textDecoration', 'label.fontSize', 'label.fontFamily', 'label.fontColor'], []);

export let HeatMapLegendLegendcolorMappingDirective = CreateComplexDirective({
    selector: 'e-legendcolormappings>e-legendcolormapping',
    inputs: HeatMapLegendLegendcolorMappingInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['label'],
         type: forwardRef(() => HeatMapLegendComponent)
    });


export let HeatMapLegendLegendcolorMappingsDirective = CreateArrayTagDirective('colorMappingCollection', 'ej-heatmaplegend>e-legendcolormappings', HeatMapLegendLegendcolorMappingDirective);


let Outputs = [];
let ComplexProperties = [];
let Inputs = Utils.AngularizeInputs(['width', 'height', 'isResponsive', 'showLabel', 'orientation',
    'legendMode', 'colorMappingCollection'], []);
export let HeatMapLegendComponent = CreateComponent('HeatMapLegend', {
    selector: 'ej-heatmaplegend',
    inputs: Inputs,
    outputs: Outputs,
    template: '',
    queries: {
        _colorMappingCollection : new ContentChild(HeatMapLegendLegendcolorMappingsDirective),
    }
}, {
        tags: ['colorMappingCollection'],
        twoways: [],
        complexes: ComplexProperties,
    });

export const EJ_HEATMAPLEGEND_COMPONENTS: Type<any>[] = [HeatMapLegendComponent , HeatMapLegendLegendcolorMappingsDirective, HeatMapLegendLegendcolorMappingDirective];

