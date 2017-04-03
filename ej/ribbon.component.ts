import { CreateComponent, Utils, Type, CreateArrayTagDirective, CreateComplexDirective, ContentChild, forwardRef } from './core';
export let Ribbon_PageDirective = CreateComplexDirective({
    selector: 'e-applicationtab-backstagesettings-pages>e-page',
    inputs: ['id', 'text', 'itemType', 'contentID', 'enableSeparator'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: [],
         type: forwardRef(() => RibbonComponent)
    });


export let Ribbon_ApplicationTabBackstageSettingsPagesDirective = CreateArrayTagDirective('applicationTab.backstageSettings.pages', 'ej-ribbon>e-applicationtab-backstagesettings-pages', Ribbon_PageDirective);

export let Ribbon_ContentGroupDirective = CreateComplexDirective({
    selector: 'e-contentgroups>e-contentgroup',
    inputs: ['isMobileOnly', 'buttonSettings', 'columns', 'contentID', 'cssClass',
        'customGalleryItems', 'customToolTip', 'customToolTip.content', 'customToolTip.prefixIcon', 'customToolTip.title',
        'dropdownSettings', 'enableSeparator', 'expandedColumns', 'galleryItems', 'id',
        'isBig', 'itemHeight', 'itemWidth', 'splitButtonSettings', 'text',
        'toggleButtonSettings', 'toolTip', 'quickAccessMode', 'type'],
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['customToolTip'],
         type: forwardRef(() => RibbonComponent)
    });


export let Ribbon_ContentGroupsDirective = CreateArrayTagDirective('groups', 'e-content>e-contentgroups', Ribbon_ContentGroupDirective);

export let Ribbon_ContentDirective = CreateComplexDirective({
    selector: 'e-contents>e-content',
    inputs: ['defaults', 'defaults.height', 'defaults.width', 'defaults.type', 'defaults.isBig',
        'groups'],
    queries: {
        _groups : new ContentChild(Ribbon_ContentGroupsDirective),
    }
}, {
         tags: ['groups' ],
         complexes: ['defaults'],
         type: forwardRef(() => RibbonComponent)
    });


export let Ribbon_ContentsDirective = CreateArrayTagDirective('content', 'e-groups>e-contents', Ribbon_ContentDirective);

export let Ribbon_GroupDirective = CreateComplexDirective({
    selector: 'e-groups>e-group',
    inputs: ['alignType', 'content', 'contentID', 'customContent', 'enableGroupExpander',
        'groupExpanderSettings', 'groupExpanderSettings.toolTip', 'groupExpanderSettings.customToolTip', 'text', 'type'],
    queries: {
        _content : new ContentChild(Ribbon_ContentsDirective),
    }
}, {
         tags: ['content' ],
         complexes: ['groupExpanderSettings'],
         type: forwardRef(() => RibbonComponent)
    });


export let Ribbon_GroupsDirective = CreateArrayTagDirective('groups', 'e-tabs>e-groups', Ribbon_GroupDirective);

export let Ribbon_TabDirective = CreateComplexDirective({
    selector: 'e-tabs>e-tab',
    inputs: ['groups', 'id', 'text'],
    queries: {
        _groups : new ContentChild(Ribbon_GroupsDirective),
    }
}, {
         tags: ['groups' ],
         complexes: [],
         type: forwardRef(() => RibbonComponent)
    });


export let Ribbon_TabsDirective = CreateArrayTagDirective('tabs', 'ej-ribbon>e-tabs', Ribbon_TabDirective);


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
        _applicationTab_backstageSettings_pages : new ContentChild(Ribbon_ApplicationTabBackstageSettingsPagesDirective),
        _tabs : new ContentChild(Ribbon_TabsDirective),
    }
}, {
        tags: ['applicationTab.backstageSettings.pages', 'tabs'],
        twoways: [],
        complexes: ComplexProperties,
    });

export const EJ_RIBBON_COMPONENTS: Type<any>[] = [RibbonComponent , Ribbon_ApplicationTabBackstageSettingsPagesDirective, Ribbon_ContentGroupsDirective, Ribbon_ContentsDirective, Ribbon_GroupsDirective, Ribbon_TabsDirective, Ribbon_PageDirective, Ribbon_ContentGroupDirective, Ribbon_ContentDirective, Ribbon_GroupDirective, Ribbon_TabDirective];

