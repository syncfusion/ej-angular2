import { CreateComponent, Utils, Type } from './core';

let Outputs = ['afterServiceInvoke', 'beforeServiceInvoke', 'load', 'beforePivotEnginePopulate', 'drillSuccess',
    'renderComplete', 'renderFailure', 'renderSuccess'
    ];
let ComplexProperties = ['dataSource', 'serviceMethodSettings'];
let Inputs = Utils.AngularizeInputs(['cssClass', 'dataSource', 'customObject', 'isResponsive', 'locale',
    'operationalMode', 'serviceMethodSettings', 'url', 'dataSource.data', 'dataSource.cube',
    'dataSource.catalog', 'serviceMethodSettings.initialize', 'serviceMethodSettings.drillDown', 'dataSource.columns', 'dataSource.rows',
    'dataSource.values', 'dataSource.filters'], []);
export let PivotTreeMapComponent = CreateComponent('PivotTreeMap', {
    selector: 'ej-pivottreemap',
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

export const EJ_PIVOTTREEMAP_COMPONENTS: Type<any>[] = [PivotTreeMapComponent  ];

