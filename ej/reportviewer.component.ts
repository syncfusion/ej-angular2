import { CreateComponent, Utils, Type } from './core';

let Outputs = ['destroy', 'drillThrough', 'renderingBegin', 'renderingComplete', 'reportError',
    'reportExport', 'reportLoaded', 'viewReportClick'
    ];
let ComplexProperties = ['exportSettings', 'pageSettings', 'toolbarSettings'];
let Inputs = Utils.AngularizeInputs(['enablePageCache', 'exportSettings', 'isResponsive', 'locale', 'pageSettings',
    'printMode', 'printOptions', 'processingMode', 'renderMode', 'reportPath',
    'reportServerUrl', 'reportServiceUrl', 'toolbarSettings', 'zoomFactor', 'exportSettings.exportOptions',
    'exportSettings.excelFormat', 'exportSettings.wordFormat', 'pageSettings.orientation', 'pageSettings.paperSize', 'toolbarSettings.click',
    'toolbarSettings.items', 'toolbarSettings.showToolbar', 'toolbarSettings.showTooltip', 'toolbarSettings.templateId', 'dataSources',
    'parameters'], []);
export let ReportViewerComponent = CreateComponent('ReportViewer', {
    selector: 'ej-reportviewer',
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

export const EJ_REPORTVIEWER_COMPONENTS: Type<any>[] = [ReportViewerComponent  ];

