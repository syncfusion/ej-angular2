import { CreateComponent, Utils, Type } from './core';

let Outputs = ['documentLoad', 'pageChange', 'zoomChange', 'hyperlinkClick', 'beforePrint',
    'afterPrint', 'pageClick', 'bufferStart', 'bufferEnd', 'destroy'
    ];
let ComplexProperties = ['toolbarSettings', 'serverActionSettings'];
let Inputs = Utils.AngularizeInputs(['locale', 'toolbarSettings', 'serverActionSettings', 'serviceUrl', 'documentPath',
    'pageCount', 'currentPageNumber', 'zoomPercentage', 'pdfService', 'hyperlinkOpenState',
    'enableHyperlink', 'enableTextSelection', 'isResponsive', 'isDocumentEdited', 'allowClientBuffering',
    'fileName', 'toolbarSettings.showToolTip', 'toolbarSettings.toolbarItem', 'serverActionSettings.load', 'serverActionSettings.fileUpload',
    'serverActionSettings.print', 'serverActionSettings.download'], []);
export let PdfViewerComponent = CreateComponent('PdfViewer', {
    selector: 'ej-pdfviewer',
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

export const EJ_PDFVIEWER_COMPONENTS: Type<any>[] = [PdfViewerComponent ];

