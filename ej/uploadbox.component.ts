import { CreateComponent, Utils, Type } from './core';

let Outputs = ['beforeSend', 'begin', 'cancel', 'complete', 'success',
    'create', 'destroy', 'error', 'fileSelect', 'inProgress',
    'remove'
    ];
let ComplexProperties = ['buttonText', 'customFileDetails', 'dialogAction', 'dialogText'];
let Inputs = Utils.AngularizeInputs(['allowDragAndDrop', 'asyncUpload', 'autoUpload', 'buttonText', 'cssClass',
    'customFileDetails', 'dialogAction', 'dialogPosition', 'dialogText', 'dropAreaText',
    'dropAreaHeight', 'dropAreaWidth', 'enabled', 'enableRTL', 'extensionsAllow',
    'extensionsDeny', 'fileSize', 'height', 'htmlAttributes', 'locale',
    'multipleFilesSelection', 'pushFile', 'removeUrl', 'saveUrl', 'showBrowseButton',
    'showFileDetails', 'showRoundedCorner', 'uploadName', 'width', 'buttonText.browse',
    'buttonText.cancel', 'buttonText.Close', 'buttonText.upload', 'customFileDetails.action', 'customFileDetails.name',
    'customFileDetails.size', 'customFileDetails.status', 'customFileDetails.title', 'dialogAction.closeOnComplete', 'dialogAction.content',
    'dialogAction.drag', 'dialogAction.modal', 'dialogText.name', 'dialogText.size', 'dialogText.status',
    'dialogText.title'], []);
export let UploadboxComponent = CreateComponent('Uploadbox', {
    selector: 'ej-uploadbox',
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

export const EJ_UPLOADBOX_COMPONENTS: Type<any>[] = [UploadboxComponent  ];

