import { CreateComponent, Utils, Type } from './core';

let Outputs = ['change', 'create', 'destroy', 'pagerClick', 'start',
    'stop', 'thumbItemClick'
    ];
let ComplexProperties = ['fields'];
let Inputs = Utils.AngularizeInputs(['allowKeyboardNavigation', 'animationSpeed', 'animationType', 'circularMode', 'cssClass',
    'dataSource', 'delay', 'displayItemsCount', 'enableAutoPlay', 'enabled',
    'enableRTL', 'fields', 'frameSpace', 'isResponsive', 'navigateSteps',
    'orientation', 'pagerPosition', 'query', 'showCaption', 'showNavigateButton',
    'showPager', 'showPlayButton', 'showThumbnail', 'slideHeight', 'slideWidth',
    'startIndex', 'stopOnHover', 'template', 'templateId', 'thumbnailSourceID',
    'fields.linkAttribute', 'fields.targetAttribute', 'fields.text', 'fields.thumbnailText', 'fields.thumbnailUrl',
    'fields.url'], []);
export let RotatorComponent = CreateComponent('Rotator', {
    selector: '[ej-rotator]',
    inputs: Inputs,
    outputs: Outputs,
    template: '',
    queries: {
    }
}, {
        tags: [],
        twoways: [],
        complexes: ComplexProperties,
    });

export const EJ_ROTATOR_COMPONENTS: Type<any>[] = [RotatorComponent  ];

