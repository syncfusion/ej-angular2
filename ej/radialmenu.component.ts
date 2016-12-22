import { CreateComponent, Utils, Type, CreateArrayTagDirective, CreateComplexDirective, ContentChild, forwardRef, CreateTemplateDirective } from './core';
export var RadialMenuTemplateDirective = CreateTemplateDirective({
    selector: "[e-template]"
}, {
        type: forwardRef(() => RadialMenu_ItemDirective)
    });

export let RadialMenu_ItemDirective = CreateComplexDirective({
    selector: 'e-items>e-item',
    inputs: ['imageUrl', 'text', 'enabled', 'click', 'badge',
        'badge.enabled', 'badge.value', 'type', 'sliderSettings', 'sliderSettings.ticks',
        'sliderSettings.strokeWidth', 'sliderSettings.labelSpace', 'items'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['badge', 'sliderSettings'],
         type: forwardRef(() => RadialMenuComponent)
    });


export let RadialMenu_ItemsDirective = CreateArrayTagDirective('items', 'ej-radialmenu>e-items', RadialMenu_ItemDirective);


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
        _items : new ContentChild(RadialMenu_ItemsDirective),
    }
}, {
        tags: ['items'],
        twoways: [],
        complexes: ComplexProperties,
    });

export const EJ_RADIALMENU_COMPONENTS: Type<any>[] = [RadialMenuComponent , RadialMenu_ItemsDirective, RadialMenu_ItemDirective ,RadialMenuTemplateDirective];

