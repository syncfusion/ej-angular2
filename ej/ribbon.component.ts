import { CreateComponent, Utils, Type, CreateArrayTagDirective, CreateComplexDirective, ContentChild, forwardRef } from './core';
let RibbonPageInputs = Utils.AngularizeInputs(['id', 'text', 'itemType', 'contentID', 'enableSeparator'], []);

export let RibbonPageDirective = CreateComplexDirective({
    selector: 'e-applicationtab-backstagesettings-pages>e-page',
    inputs: RibbonPageInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => RibbonComponent)
    });


export let RibbonApplicationTabBackstageSettingsPagesDirective = CreateArrayTagDirective('applicationTab.backstageSettings.pages', 'ej-ribbon>e-applicationtab-backstagesettings-pages', RibbonPageDirective);

let RibbonContentGroupInputs = Utils.AngularizeInputs(['isMobileOnly', 'buttonSettings', 'columns', 'contentID', 'cssClass',
        'customGalleryItems', 'customToolTip', 'customToolTip.content', 'customToolTip.prefixIcon', 'customToolTip.title',
        'dropdownSettings', 'enableSeparator', 'expandedColumns', 'galleryItems', 'id',
        'isBig', 'itemHeight', 'itemWidth', 'splitButtonSettings', 'text',
        'toggleButtonSettings', 'toolTip', 'quickAccessMode', 'type'], []);

export let RibbonContentGroupDirective = CreateComplexDirective({
    selector: 'e-contentgroups>e-contentgroup',
    inputs: RibbonContentGroupInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['customToolTip'],
         type: forwardRef(() => RibbonComponent)
    });


export let RibbonContentGroupsDirective = CreateArrayTagDirective('groups', 'e-content>e-contentgroups', RibbonContentGroupDirective);

let RibbonContentInputs = Utils.AngularizeInputs(['defaults', 'defaults.height', 'defaults.width', 'defaults.type', 'defaults.isBig',
        'groups'], []);

export let RibbonContentDirective = CreateComplexDirective({
    selector: 'e-contents>e-content',
    inputs: RibbonContentInputs,
    queries: {
        _groups : new ContentChild(RibbonContentGroupsDirective),
    }
}, {
         tags: ['groups' ],
         complexes: ['defaults'],
         type: forwardRef(() => RibbonComponent)
    });


export let RibbonContentsDirective = CreateArrayTagDirective('content', 'e-groups>e-contents', RibbonContentDirective);

let RibbonGroupInputs = Utils.AngularizeInputs(['alignType', 'content', 'contentID', 'customContent', 'enableGroupExpander',
        'groupExpanderSettings', 'groupExpanderSettings.toolTip', 'groupExpanderSettings.customToolTip', 'text', 'type'], []);

export let RibbonGroupDirective = CreateComplexDirective({
    selector: 'e-groups>e-group',
    inputs: RibbonGroupInputs,
    queries: {
        _content : new ContentChild(RibbonContentsDirective),
    }
}, {
         tags: ['content' ],
         complexes: ['groupExpanderSettings'],
         type: forwardRef(() => RibbonComponent)
    });


export let RibbonGroupsDirective = CreateArrayTagDirective('groups', 'e-tabs>e-groups', RibbonGroupDirective);

let RibbonTabInputs = Utils.AngularizeInputs(['groups', 'id', 'text'], []);

export let RibbonTabDirective = CreateComplexDirective({
    selector: 'e-tabs>e-tab',
    inputs: RibbonTabInputs,
    queries: {
        _groups : new ContentChild(RibbonGroupsDirective),
    }
}, {
         tags: ['groups' ],
         complexes: [],
         type: forwardRef(() => RibbonComponent)
    });


export let RibbonTabsDirective = CreateArrayTagDirective('tabs', 'ej-ribbon>e-tabs', RibbonTabDirective);


let Outputs = ['beforeTabRemove', 'create', 'destroy', 'groupClick', 'groupExpand',
    'galleryItemClick', 'backstageItemClick', 'collapse', 'expand', 'load',
    'tabAdd', 'tabClick', 'tabCreate', 'tabRemove', 'tabSelect',
    'toggleButtonClick', 'qatMenuItemClick'
    ];
let ComplexProperties = ['collapsePinSettings', 'expandPinSettings', 'applicationTab', 'applicationTab.backstageSettings'];
let Inputs = Utils.AngularizeInputs(['allowResizing', 'isResponsive', 'buttonDefaults', 'showQAT', 'collapsePinSettings',
    'enableOnDemand', 'collapsible', 'enableRTL', 'expandPinSettings', 'applicationTab',
    'disabledItemIndex', 'enabledItemIndex', 'selectedItemIndex', 'locale', 'width',
    'collapsePinSettings.toolTip', 'collapsePinSettings.customToolTip', 'expandPinSettings.toolTip', 'expandPinSettings.customToolTip', 'applicationTab.backstageSettings',
    'applicationTab.backstageSettings.text', 'applicationTab.backstageSettings.height', 'applicationTab.backstageSettings.width', 'applicationTab.backstageSettings.headerWidth', 'applicationTab.menuItemID',
    'applicationTab.menuSettings', 'applicationTab.type', 'contextualTabs', 'tabs', 'applicationTab.backstageSettings.pages',
    'tabs.groups.content', 'tabs.groups.content.groups.customGalleryItems', 'tabs.groups.content.groups.galleryItems'], []);
export let RibbonComponent = CreateComponent('Ribbon', {
    selector: 'ej-ribbon',
    inputs: Inputs,
    outputs: Outputs,
    template: '',
    queries: {
        _applicationTab_backstageSettings_pages : new ContentChild(RibbonApplicationTabBackstageSettingsPagesDirective),
        _tabs : new ContentChild(RibbonTabsDirective),
    }
}, {
        tags: ['applicationTab.backstageSettings.pages', 'tabs'],
        twoways: [],
        complexes: ComplexProperties,
    });

export const EJ_RIBBON_COMPONENTS: Type<any>[] = [RibbonComponent , RibbonApplicationTabBackstageSettingsPagesDirective, RibbonContentGroupsDirective, RibbonContentsDirective, RibbonGroupsDirective, RibbonTabsDirective, RibbonPageDirective, RibbonContentGroupDirective, RibbonContentDirective, RibbonGroupDirective, RibbonTabDirective];

