import { CreateComponent, Utils, Type } from './core';

let Outputs = ['beforeAjaxRequest', 'beforeDownload', 'beforeGetImage', 'beforeOpen', 'beforeUpload',
    'create', 'copy', 'createFolder', 'cut', 'destroy',
    'dragStart', 'drag', 'dragStop', 'drop', 'getImage',
    'keydown', 'layoutChange'
    ];
let ComplexProperties = ['contextMenuSettings', 'filterSettings', 'gridSettings', 'uploadSettings'];
let Inputs = Utils.AngularizeInputs(['ajaxAction', 'ajaxDataType', 'ajaxSettings', 'allowDragAndDrop', 'allowKeyboardNavigation',
    'allowMultiSelection', 'contextMenuSettings', 'cssClass', 'enableResize', 'enableRTL',
    'enableThumbnailCompress', 'fileTypes', 'filterSettings', 'gridSettings', 'height',
    'isResponsive', 'layout', 'locale', 'maxHeight', 'maxWidth',
    'minHeight', 'minWidth', 'path', 'selectedFolder', 'selectedItems',
    'showCheckbox', 'showContextMenu', 'showFooter', 'showRoundedCorner', 'showThumbnail',
    'showToolbar', 'showNavigationPane', 'tools', 'toolsList', 'uploadSettings',
    'width', 'contextMenuSettings.items', 'contextMenuSettings.customMenuFields', 'filterSettings.allowSearchOnTyping', 'filterSettings.caseSensitiveSearch',
    'filterSettings.filterType', 'gridSettings.allowResizing', 'gridSettings.allowSorting', 'gridSettings.columns', 'uploadSettings.maxFileSize',
    'uploadSettings.allowMultipleFile', 'uploadSettings.autoUpload'], []);
export let FileExplorerComponent = CreateComponent('FileExplorer', {
    selector: 'ej-fileexplorer',
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

export const EJ_FILEEXPLORER_COMPONENTS: Type<any>[] = [FileExplorerComponent  ];

