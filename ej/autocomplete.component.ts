import { CreateComponent, Utils, Type, CreateControlValueAccessor } from './core';

let Outputs = ['actionBegin', 'actionSuccess', 'actionComplete', 'actionFailure', 'change',
    'close', 'create', 'destroy', 'focusIn', 'focusOut',
    'open', 'select'
    ];
let ComplexProperties = ['fields', 'multiColumnSettings'];
let Inputs = Utils.AngularizeInputs(['addNewText', 'allowAddNew', 'allowSorting', 'animateType', 'autoFocus',
    'caseSensitiveSearch', 'cssClass', 'dataSource', 'delaySuggestionTimeout', 'delimiterChar',
    'emptyResultText', 'enableAutoFill', 'enabled', 'enableDistinct', 'enablePersistence',
    'enableRTL', 'fields', 'filterType', 'height', 'highlightSearch',
    'itemsCount', 'minCharacter', 'multiColumnSettings', 'multiSelectMode', 'popupHeight',
    'popupWidth', 'query', 'readOnly', 'selectValueByKey', 'showEmptyResultText',
    'showLoadingIcon', 'showPopupButton', 'showRoundedCorner', 'showResetIcon', 'sortOrder',
    'template', 'validationMessage', 'validationRules', 'value', 'visible',
    'watermarkText', 'width', 'fields.groupBy', 'fields.htmlAttributes', 'fields.key',
    'fields.text', 'multiColumnSettings.enable', 'multiColumnSettings.showHeader', 'multiColumnSettings.stringFormat', 'multiColumnSettings.columns'], []);
export let AutocompleteComponent = CreateComponent('Autocomplete', {
    selector: '[ej-autocomplete]',
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

export let AutocompleteValueAccessor = CreateControlValueAccessor('[ej-autocomplete]', AutocompleteComponent);
export const EJ_AUTOCOMPLETE_COMPONENTS: Type<any>[] = [AutocompleteComponent , AutocompleteValueAccessor ];

