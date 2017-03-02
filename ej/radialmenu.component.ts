import { CreateComponent, Utils, Type, CreateArrayTagDirective, CreateComplexDirective, ContentChild, forwardRef } from './core';
let RadialMenuItemInputs = Utils.AngularizeInputs(['imageUrl', 'text', 'enabled', 'click', 'badge',
        'badge.enabled', 'badge.value', 'type', 'sliderSettings', 'sliderSettings.ticks',
        'sliderSettings.strokeWidth', 'sliderSettings.labelSpace', 'items'], []);

export let RadialMenuItemDirective = CreateComplexDirective({
    selector: 'e-items>e-item',
    inputs: RadialMenuItemInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['badge', 'sliderSettings'],
         type: forwardRef(() => RadialMenuComponent)
    });


export let RadialMenuItemsDirective = CreateArrayTagDirective('items', 'ej-radialmenu>e-items', RadialMenuItemDirective);


let Outputs = ['click', 'open', 'close'
    ];
let ComplexProperties = [];
let Inputs = Utils.AngularizeInputs(['autoOpen', 'backImageClass', 'cssClass', 'enableAnimation', 'imageClass',
    'radius', 'targetElementId', 'position', 'items'], []);
export let RadialMenuComponent = CreateComponent('RadialMenu', {
    selector: 'ej-radialmenu',
    inputs: Inputs,
    outputs: Outputs,
    template: '',
    queries: {
        _items : new ContentChild(RadialMenuItemsDirective),
    }
}, {
        tags: ['items'],
        twoways: [],
        complexes: ComplexProperties,
    });

export const EJ_RADIALMENU_COMPONENTS: Type<any>[] = [RadialMenuComponent , RadialMenuItemsDirective, RadialMenuItemDirective];

