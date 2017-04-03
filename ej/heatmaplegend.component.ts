import { CreateComponent, Utils, Type, CreateArrayTagDirective, CreateComplexDirective, ContentChild, forwardRef } from './core';
export let HeatMapLegend_LegendcolorMappingDirective = CreateComplexDirective({
    selector: 'e-legendcolormappings>e-legendcolormapping',
    inputs: ['color', 'value', 'label', 'label.bold', 'label.italic',
        'label.text', 'label.textDecoration', 'label.fontSize', 'label.fontFamily', 'label.fontColor'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['label'],
         type: forwardRef(() => HeatMapLegendComponent)
    });


export let HeatMapLegend_LegendcolorMappingsDirective = CreateArrayTagDirective('colorMappingCollection', 'ej-heatmaplegend>e-legendcolormappings', HeatMapLegend_LegendcolorMappingDirective);


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
        _colorMappingCollection : new ContentChild(HeatMapLegend_LegendcolorMappingsDirective),
    }
}, {
        tags: ['colorMappingCollection'],
        twoways: [],
        complexes: ComplexProperties,
    });

export const EJ_HEATMAPLEGEND_COMPONENTS: Type<any>[] = [HeatMapLegendComponent , HeatMapLegend_LegendcolorMappingsDirective, HeatMapLegend_LegendcolorMappingDirective];

