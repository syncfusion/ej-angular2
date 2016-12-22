import { CreateComponent, Utils, Type } from './core';

let Outputs = ['beforeClose', 'beforeOpen', 'click', 'close', 'create',
    'destroy', 'hover', 'open', 'tracking'
    ];
let ComplexProperties = ['animation', 'position', 'position.target', 'position.stem'];
let Inputs = Utils.AngularizeInputs(['allowKeyboardNavigation', 'animation', 'associate', 'autoCloseTimeout', 'closeMode',
    'collision', 'containment', 'content', 'cssClass', 'enabled',
    'enableRTL', 'height', 'isBalloon', 'position', 'showRoundedCorner',
    'showShadow', 'target', 'title', 'trigger', 'width',
    'animation.effect', 'animation.speed', 'position.target', 'position.target.horizontal', 'position.target.vertical',
    'position.stem', 'position.stem.horizontal', 'position.stem.vertical'], []);
export let TooltipComponent = CreateComponent('Tooltip', {
    selector: 'ej-tooltip',
    inputs: Inputs,
    outputs: Outputs,
    template: '<ng-content></ng-content>',
    queries: {
    }
}, {
        tags: [],
        twoways: [],
        complexes: ComplexProperties,
    });

export const EJ_TOOLTIP_COMPONENTS: Type<any>[] = [TooltipComponent  ];

