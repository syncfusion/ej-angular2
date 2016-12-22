import { CreateComponent, Utils, Type } from './core';

let Outputs = ['load', 'afterServiceInvoke', 'beforeServiceInvoke', 'drillSuccess', 'renderComplete',
    'renderFailure', 'renderSuccess'
    ];
let ComplexProperties = ['commonSeriesOptions', 'dataSource', 'serviceMethodSettings'];
let Inputs = Utils.AngularizeInputs(['analysisMode', 'cssClass', 'commonSeriesOptions', 'dataSource', 'customObject',
    'enable3D', 'enableRTL', 'isResponsive', 'legend', 'locale',
    'operationalMode', 'primaryXAxis', 'primaryYAxis', 'rotation', 'serviceMethodSettings',
    'size', 'url', 'commonSeriesOptions.type', 'dataSource.cube', 'dataSource.data',
    'dataSource.catalog', 'serviceMethodSettings.drillDown', 'serviceMethodSettings.exportPivotChart', 'serviceMethodSettings.initialize', 'serviceMethodSettings.paging',
    'dataSource.columns', 'dataSource.rows', 'dataSource.values', 'dataSource.filters'], []);
export let PivotChartComponent = CreateComponent('PivotChart', {
    selector: 'ej-pivotchart',
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

export const EJ_PIVOTCHART_COMPONENTS: Type<any>[] = [PivotChartComponent  ];

