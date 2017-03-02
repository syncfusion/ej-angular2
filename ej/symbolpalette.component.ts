import { CreateComponent, Utils, Type } from './core';

let Outputs = ['selectionChange'
    ];
let ComplexProperties = ['defaultSettings'];
let Inputs = Utils.AngularizeInputs(['allowDrag', 'cssClass', 'defaultSettings', 'diagramId', 'headerHeight',
    'height', 'paletteItemHeight', 'paletteItemWidth', 'previewHeight', 'previewOffset',
    'previewWidth', 'showPaletteItemText', 'width', 'defaultSettings.node', 'defaultSettings.connector',
    'palettes'], []);
export let SymbolPaletteComponent = CreateComponent('SymbolPalette', {
    selector: 'ej-symbolpalette',
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

export const EJ_SYMBOLPALETTE_COMPONENTS: Type<any>[] = [SymbolPaletteComponent ];

