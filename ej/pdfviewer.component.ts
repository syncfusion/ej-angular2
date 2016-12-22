import { CreateComponent, Utils, Type } from './core';

let Outputs = ['documentLoad', 'pageChange', 'zoomChange', 'hyperlinkClick', 'beforePrint',
    'afterPrint', 'pageClick', 'destroy'
    ];
let ComplexProperties = ['toolbarSettings'];
let Inputs = Utils.AngularizeInputs(['locale', 'toolbarSettings', 'toolbarItems', 'serviceUrl', 'pageCount',
    'currentPageNumber', 'zoomPercentage', 'pdfService', 'hyperlinkOpenState', 'isResponsive',
    'fileName', 'toolbarSettings.showToolTip'], []);
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

export const EJ_PDFVIEWER_COMPONENTS: Type<any>[] = [PdfViewerComponent  ];

