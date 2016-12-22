import { CreateComponent, Utils, Type } from './core';

let Outputs = ['load'
    ];
let ComplexProperties = ['quietZone'];
let Inputs = Utils.AngularizeInputs(['barcodeToTextGapHeight', 'barHeight', 'darkBarColor', 'displayText', 'enabled',
    'encodeStartStopSymbol', 'lightBarColor', 'narrowBarWidth', 'quietZone', 'symbologyType',
    'text', 'textColor', 'wideBarWidth', 'xDimension', 'quietZone.all',
    'quietZone.bottom', 'quietZone.left', 'quietZone.right', 'quietZone.top'], []);
export let BarcodeComponent = CreateComponent('Barcode', {
    selector: 'ej-barcode',
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

export const EJ_BARCODE_COMPONENTS: Type<any>[] = [BarcodeComponent  ];

