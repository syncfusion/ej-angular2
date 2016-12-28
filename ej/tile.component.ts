import { CreateComponent, Utils, Type } from './core';

let Outputs = ['mouseDown', 'mouseUp'
    , 'model.badge.valueChange: badge.valueChange', 'model.badge.enabledChange: badge.enabledChange', 'model.badge.textChange: badge.textChange', 'model.badge.positionChange: badge.positionChange', 'model.caption.textChange: caption.textChange'];
let ComplexProperties = ['badge', 'caption', 'liveTile'];
let Inputs = Utils.AngularizeInputs(['badge', 'caption', 'cssClass', 'enablePersistence', 'height',
    'imageClass', 'imagePosition', 'imageTemplateId', 'imageUrl', 'locale',
    'liveTile', 'tileSize', 'width', 'showRoundedCorner', 'allowSelection',
    'backgroundColor', 'badge.maxValue', 'badge.minValue', 'caption.enabled', 'caption.alignment',
    'caption.position', 'caption.icon', 'liveTile.enabled', 'liveTile.imageClass', 'liveTile.imageTemplateId',
    'liveTile.imageUrl', 'liveTile.type', 'liveTile.updateInterval', 'liveTile.text'], ['badge.value', 'badge.enabled', 'badge.text', 'badge.position', 'caption.text']);
export let TileComponent = CreateComponent('Tile', {
    selector: 'ej-tile',
    inputs: Inputs,
    outputs: Outputs,
    template: '',
    queries: {
    }
}, {
        tags: [],
        twoways: ['badge.value', 'badge.enabled', 'badge.text', 'badge.position', 'caption.text'],
        complexes: ComplexProperties,
    });

export const EJ_TILE_COMPONENTS: Type<any>[] = [TileComponent  ];

