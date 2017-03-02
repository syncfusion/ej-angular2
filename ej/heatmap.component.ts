import { CreateComponent, Utils, Type, CreateArrayTagDirective, CreateComplexDirective, ContentChild, forwardRef } from './core';
let HeatMapColorMappingInputs = Utils.AngularizeInputs(['color', 'value', 'label', 'label.bold', 'label.italic',
        'label.text', 'label.textDecoration', 'label.fontSize', 'label.fontFamily', 'label.fontColor'], []);

export let HeatMapColorMappingDirective = CreateComplexDirective({
    selector: 'e-colormappingcollection>e-colormapping',
    inputs: HeatMapColorMappingInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['label'],
         type: forwardRef(() => HeatMapComponent)
    });


export let HeatMapColorMappingCollectionDirective = CreateArrayTagDirective('colorMappingCollection', 'ej-heatmap>e-colormappingcollection', HeatMapColorMappingDirective);


let Outputs = ['cellMouseOver', 'cellMouseEnter', 'cellMouseLeave', 'cellSelected'
    ];
let ComplexProperties = ['tooltipSettings', 'heatMapCell', 'defaultColumnStyle', 'itemsMapping', 'tooltipSettings.position',
    'tooltipSettings.position.target', 'tooltipSettings.position.stem', 'tooltipSettings.animation', 'itemsMapping.columnStyle', 'itemsMapping.column',
    'itemsMapping.row', 'itemsMapping.value', 'itemsMapping.headerMapping'];
let Inputs = Utils.AngularizeInputs(['width', 'height', 'id', 'showTooltip', 'tooltipSettings',
    'itemsSource', 'heatMapCell', 'isResponsive', 'enableVirtualization', 'defaultColumnStyle',
    'legendCollection', 'itemsMapping', 'tooltipSettings.templateId', 'tooltipSettings.associate', 'tooltipSettings.isBalloon',
    'tooltipSettings.position', 'tooltipSettings.position.target', 'tooltipSettings.position.stem', 'tooltipSettings.trigger', 'tooltipSettings.animation',
    'tooltipSettings.animation.effect', 'tooltipSettings.animation.speed', 'heatMapCell.showContent', 'heatMapCell.showColor', 'defaultColumnStyle.textAlign',
    'defaultColumnStyle.headerTemplateID', 'defaultColumnStyle.templateID', 'itemsMapping.columnStyle', 'itemsMapping.columnStyle.width', 'itemsMapping.columnStyle.textAlign',
    'itemsMapping.columnStyle.headerTemplateID', 'itemsMapping.columnStyle.templateID', 'itemsMapping.column', 'itemsMapping.column.propertyName', 'itemsMapping.column.displayName',
    'itemsMapping.row', 'itemsMapping.row.propertyName', 'itemsMapping.row.displayName', 'itemsMapping.value', 'itemsMapping.value.propertyName',
    'itemsMapping.value.displayName', 'itemsMapping.headerMapping', 'itemsMapping.headerMapping.propertyName', 'itemsMapping.headerMapping.displayName', 'itemsMapping.headerMapping.columnStyle',
    'itemsMapping.columnMapping', 'colorMappingCollection'], []);
export let HeatMapComponent = CreateComponent('HeatMap', {
    selector: 'ej-heatmap',
    inputs: Inputs,
    outputs: Outputs,
    template: '',
    queries: {
        _colorMappingCollection : new ContentChild(HeatMapColorMappingCollectionDirective),
    }
}, {
        tags: ['colorMappingCollection'],
        twoways: [],
        complexes: ComplexProperties,
    });

export const EJ_HEATMAP_COMPONENTS: Type<any>[] = [HeatMapComponent , HeatMapColorMappingCollectionDirective, HeatMapColorMappingDirective];

