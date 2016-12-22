import { CreateComponent, Utils, Type } from './core';

let Outputs = ['afterServiceInvoke', 'beforeServiceInvoke', 'beforePivotEnginePopulate', 'load', 'renderComplete',
    'renderFailure', 'renderSuccess'
    ];
let ComplexProperties = ['dataSource', 'labelFormatSettings', 'serviceMethodSettings'];
let Inputs = Utils.AngularizeInputs(['columnsCount', 'cssClass', 'customObject', 'dataSource', 'enableAnimation',
    'enableTooltip', 'enableRTL', 'isResponsive', 'labelFormatSettings', 'locale',
    'rowsCount', 'scales', 'serviceMethodSettings', 'showHeaderLabel', 'url',
    'analysisMode', 'operationalMode', 'dataSource.cube', 'dataSource.data', 'dataSource.catalog',
    'labelFormatSettings.numberFormat', 'labelFormatSettings.decimalPlaces', 'labelFormatSettings.prefixText', 'labelFormatSettings.suffixText', 'serviceMethodSettings.initialize',
    'dataSource.columns', 'dataSource.rows', 'dataSource.values', 'dataSource.filters'], []);
export let PivotGaugeComponent = CreateComponent('PivotGauge', {
    selector: 'ej-pivotgauge',
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

export const EJ_PIVOTGAUGE_COMPONENTS: Type<any>[] = [PivotGaugeComponent  ];

