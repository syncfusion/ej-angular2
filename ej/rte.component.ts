import { CreateComponent, Utils, Type, CreateControlValueAccessor } from './core';

let Outputs = ['change', 'create', 'contextMenuClick', 'destroy', 'execute',
    'keydown', 'keyup', 'preRender', 'select'
    , 'model.valueChange: valueChange'];
let ComplexProperties = ['fileBrowser', 'imageBrowser', 'tools'];
let Inputs = Utils.AngularizeInputs(['allowEditing', 'allowKeyboardNavigation', 'autoFocus', 'autoHeight', 'colorCode',
    'colorPaletteColumns', 'colorPaletteRows', 'cssClass', 'enabled', 'enableHtmlEncode',
    'enablePersistence', 'enableResize', 'enableRTL', 'enableXHTML', 'enableTabKeyNavigation',
    'externalCSS', 'fileBrowser', 'fontName', 'fontSize', 'format',
    'height', 'htmlAttributes', 'iframeAttributes', 'imageBrowser', 'isResponsive',
    'locale', 'maxHeight', 'maxLength', 'maxWidth', 'minHeight',
    'minWidth', 'name', 'showClearAll', 'showClearFormat', 'showCustomTable',
    'showContextMenu', 'showDimensions', 'showFontOption', 'showFooter', 'showHtmlSource',
    'showHtmlTagInfo', 'showToolbar', 'showCharCount', 'showRoundedCorner', 'showWordCount',
    'tableColumns', 'tableRows', 'tools', 'toolsList', 'tooltipSettings',
    'undoStackLimit', 'validationRules', 'validationMessage', 'width', 'zoomStep',
    'fileBrowser.ajaxAction', 'fileBrowser.extensionAllow', 'fileBrowser.filePath', 'imageBrowser.ajaxAction', 'imageBrowser.extensionAllow',
    'imageBrowser.filePath', 'tools.alignment', 'tools.casing', 'tools.clear', 'tools.clipboard',
    'tools.edit', 'tools.doAction', 'tools.effects', 'tools.font', 'tools.formatStyle',
    'tools.images', 'tools.indenting', 'tools.links', 'tools.lists', 'tools.media',
    'tools.style', 'tools.tables', 'tools.view', 'tools.print', 'tools.customOrderedList',
    'tools.customUnorderedList'], ['value']);
export let RTEComponent = CreateComponent('RTE', {
    selector: '[ej-rte]',
    inputs: Inputs,
    outputs: Outputs,
    template: '',
    queries: {
    }
}, {
        tags: [],
        twoways: ['value'],
        complexes: ComplexProperties,
    });

export let RTEValueAccessor = CreateControlValueAccessor('[ej-rte]', RTEComponent);
export const EJ_RTE_COMPONENTS: Type<any>[] = [RTEComponent , RTEValueAccessor ];

