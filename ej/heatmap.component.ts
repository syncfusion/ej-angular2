import { CreateComponent, Utils, Type, CreateArrayTagDirective, CreateComplexDirective, ContentChild, forwardRef } from './core';
export let ColorMappingDirective = CreateComplexDirective({
    selector: 'e-colormappingcollection>e-colormapping',
    inputs: ['color', 'value', 'label', 'label.bold', 'label.italic',
        'label.text', 'label.textDecoration', 'label.fontSize', 'label.fontFamily', 'label.fontColor'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['label'],
         type: forwardRef(() => HeatMapComponent)
    });


export let ColorMappingCollectionDirective = CreateArrayTagDirective('colorMappingCollection', 'ej-heatmap>e-colormappingcollection', ColorMappingDirective);


let Outputs = ['cellMouseOver', 'cellMouseEnter', 'cellMouseLeave', 'cellSelected'
    ];
let ComplexProperties = ['heatMapCell', 'defaultColumnStyle', 'itemsMapping', 'itemsMapping.columnStyle', 'itemsMapping.column',
    'itemsMapping.row', 'itemsMapping.value', 'itemsMapping.headerMapping'];
let Inputs = Utils.AngularizeInputs(['width', 'height', 'id', 'itemsSource', 'heatMapCell',
    'isResponsive', 'enableVirtualization', 'defaultColumnStyle', 'legendCollection', 'itemsMapping',
    'heatMapCell.showContent', 'heatMapCell.showColor', 'defaultColumnStyle.textAlign', 'defaultColumnStyle.headerTemplateID', 'defaultColumnStyle.templateID',
    'itemsMapping.columnStyle', 'itemsMapping.columnStyle.width', 'itemsMapping.columnStyle.textAlign', 'itemsMapping.columnStyle.headerTemplateID', 'itemsMapping.columnStyle.templateID',
    'itemsMapping.column', 'itemsMapping.column.propertyName', 'itemsMapping.column.displayName', 'itemsMapping.row', 'itemsMapping.row.propertyName',
    'itemsMapping.row.displayName', 'itemsMapping.value', 'itemsMapping.value.propertyName', 'itemsMapping.value.displayName', 'itemsMapping.headerMapping',
    'itemsMapping.headerMapping.propertyName', 'itemsMapping.headerMapping.displayName', 'itemsMapping.headerMapping.columnStyle', 'itemsMapping.columnMapping', 'colorMappingCollection'], []);
export let HeatMapComponent = CreateComponent('HeatMap', {
    selector: 'ej-heatmap',
    inputs: Inputs,
    outputs: Outputs,
    template: '',
    queries: {
        _colorMappingCollection : new ContentChild(ColorMappingCollectionDirective),
    }
}, {
        tags: ['colorMappingCollection'],
        twoways: [],
        complexes: ComplexProperties,
    });

export const EJ_HEATMAP_COMPONENTS: Type<any>[] = [HeatMapComponent , ColorMappingCollectionDirective, ColorMappingDirective ];

