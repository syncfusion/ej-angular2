import {
    forwardRef, ViewContainerRef, ContentChildren,
    EventEmitter, QueryList, Type, ContentChild,
    Component, Directive, ElementRef, SimpleChange,
    ChangeDetectionStrategy, ChangeDetectorRef, TemplateRef, EmbeddedViewRef
} from '@angular/core';

import { NG_VALUE_ACCESSOR } from '@angular/forms';

export { ContentChild, Type, forwardRef } from '@angular/core';

let currentTemplateElement;

export interface IParentTag {
    tags: Array<any>;
}

export interface IChildChange {
    index: number;
    change: any;
}

export interface IChangeSet {
    [key: string]: Array<IChildChange>;
}

let firstVal = {};

/** Internal Helpers */
export class Utils {
    static IterateAndGetChanges(obj: IParentTag): IChangeSet {
        if (ej.isNullOrUndefined(obj.tags) || obj.tags.length === 0) {
            return null;
        }
        let res: IChangeSet = {};
        for (let i = 0, tags = obj.tags; i < tags.length; i++) {
            let tag = tags[i], tagElement = obj['_' + tag.replace(/\./g, '_')];
            if (!ej.isNullOrUndefined(tagElement) && tagElement.hasChanges) {
                res[tag] = tagElement.getChangesAndReset();
            }
        }
        return res;
    }

    static AngularizeInputs(inputs: Array<string>, twoways: Array<string>): Array<string> {
        for (let i = 0, len = inputs.length; i < len; i++) {
            let element = inputs[i];
            inputs[i] = element.replace(/\./g, '_') + ':' + element;
        }
        for (let i = 0; i < twoways.length; i++) {
            let element = twoways[i];
            element = element.replace(/\./g, '_') + '_two:' + element;
            inputs.push(element);
        }
        return inputs;
    }
}

export class EJComponents<W, T> implements IParentTag {
    public tags: Array<any>;
    public model: T = <T>{};
    public widget: W;
    protected outputs: Array<string>;
    protected inputs: Array<string>;
    protected twoways: Array<string>;
    protected complexProperties: Array<string>;
    protected isEditor: boolean;

    private firstCheck: boolean;

    constructor(protected controlName: string, protected el: ElementRef, protected cdRef: ChangeDetectorRef) {
        //        this.__shadow = this.dom.getShadowRoot(this.el.nativeElement);
        this.firstCheck = true;
        this.createEvents(this.outputs);
        this.createTwoways(this.twoways);
    }

    protected createEvents(events: Array<string>) {
        let model = this.model, self = this;
        if (events && events.length) {
            for (let i = 0; i < events.length; i++) {
                let event = events[i];
                if (event.startsWith('model.')) {
                    continue;
                }
                self[event] = new EventEmitter(false);
            }
        }

        let complex = this.complexProperties;
        if (complex && complex.length) {
            for (let i = 0; i < complex.length; i++) {
                let element = complex[i];
                ej.createObject(element, {}, model);
            }
        }
    }

    protected createTwoways(twoways: Array<string>) {
        if (!twoways) { return; }
        let model = this.model;
        for (let i = 0; i < twoways.length; i++) {
            let element = twoways[i];
            if (element.indexOf(':') !== -1) {
                element = element.replace(/:.+/g, '');
            }
            ej.createObject(element + 'Change', new EventEmitter(), model);
            ej.createObject(element, this.addTwoways(element), model);
        }
    }

    protected addTwoways(prop): Function {
        let model = this.model, value = firstVal; // , originalProp = prop.replace(/-/g, '.');
        return function (newVal, isApp: boolean) {
            if (value === firstVal) {
                value = ej.getObject(prop + '_two', model);
                if (value === undefined) {
                    value = ej.getObject(prop, this === undefined || this.defaults === undefined ? {} : this.defaults);
                }
            }
            if (newVal === undefined) {
                return value;
            }
            if (value === newVal) { return; }
            value = newVal;
            if (!isApp) {
                ej.createObject(prop + '_two', newVal, model);
                ej.getObject<EventEmitter<any>>(prop + 'Change', model).emit(newVal);
            }
        };
    }

    ngAfterContentInit() {
        this.firstCheck = false;

        for (let i = 0; i < this.tags.length; i++) {
            let element = this.tags[i], item = this['_' + element.replace(/\./g, '_')];
            if (!ej.isNullOrUndefined(item)) {
                ej.createObject(element, item.getList(), this.model);
            }
        }

        let model = this.model, events = this.outputs;
        if (events) {
            for (let i = 0; i < events.length; i++) {
                let event = events[i];
                EJComponents.bindAndRaiseEvent(this, model, event);
            }
        }
        for (let i = 0; i < this.inputs.length; i++) {
            let property = this.inputs[i].split(':');
            if (this[property[0]] != null) {
                if (property[0].indexOf('_') == -1) {
                    this.model[property[1]] = this[property[1]];
                } else if (property[0].indexOf('_two') == -1) {
                    let tempObj = {};
                    let key = property[0].replace(/\_/g, '.');
                    ej.createObject(key, this[property[0]], tempObj);
                    let rootProp = key.split('.')[0];
                    $.extend(true, this.model[rootProp], tempObj[rootProp]);
                }
            }
        }
        for (let i = 0; i < this.twoways.length; i++) {
            let twoway = this.twoways[i];
            let twowayProperty = twoway.replace(/\./g, '_') + '_two';
            if (this[twowayProperty] != null) {
                if (twoway.indexOf('.') == -1) {
                    this.model[twowayProperty] = this[twowayProperty];
                } else {
                    let tempObj = {};
                    let key = twoway + '_two';
                    ej.createObject(key, this[twowayProperty], tempObj);
                    let rootProp = twowayProperty.split('_')[0];
                    $.extend(true, this.model[rootProp], tempObj[rootProp]);
                }
            }
        }
        let nativeElement = this.isEditor ? $(this.el.nativeElement.children) : $(this.el.nativeElement);
        this.widget = $(nativeElement)['ej' + this.controlName](this.model)['ej' + this.controlName]('instance');
    }

    private static bindAndRaiseEvent(instance, model, event) {
        if (!event.startsWith('model.')) {// && instance[event]['observers'].length > 1) {
            model[event] = function (params) {
                instance[event]['emit'](params);
            };
        }
    }

    ngOnChanges(changes: { [key: string]: SimpleChange }) {
        if (this.firstCheck) { return; }
        let ngChanges = {};
        for (let key in changes) {
            let element = changes[key];
            if (element.previousValue === element.currentValue) {
                break;
            }
            key = key.replace(/\_/g, '.');
            if (key.endsWith('.two')) {
                let oKey = key.replace('.two', ''), valFn = ej.getObject<Function>(oKey, this.widget['model']);
                valFn(element.currentValue, true);
                ej.createObject(oKey, valFn, ngChanges);
            }
            ej.createObject(key, element.currentValue, ngChanges);
        }

        this.widget['setModel'](ngChanges, $.isPlainObject(ngChanges));
    }

    ngAfterContentChecked() {
        /// TODO: ChangeDetection Third/Multi level
        let changes: IChangeSet = Utils.IterateAndGetChanges(this);
        for (let key in changes) {
            if (changes.hasOwnProperty(key)) {
                let element = changes[key];
                this.widget['_' + key](element);
            }
        }
    }

    ngOnDestroy() {
        this.widget['destroy']();
    }
}

export class ComplexTagElement {
    recentChanges: any;
    hasChanges: boolean;
    firstChange: boolean;
    index: number;
    valueChange: EventEmitter<any> = new EventEmitter();
    protected complexProperties: Array<string>;
    property: string;
    parent: EJComponents<any, any>;
    inputs: Array<string>;

    tags: Array<string>;

    constructor() {
        this.hasChanges = false;
        this.firstChange = true;
        let complexes = this.complexProperties;
        for (let i = 0; complexes !== undefined && i < complexes.length; i++) {
            let element = complexes[i];
            ej.createObject(element, {}, this);
        }
        Object.defineProperty(this, 'parent', {
            enumerable: false,
            writable: true,
            value: null
        });
    }

    ngOnInit() {
        this.firstChange = false;
        for (let i = 0; i < this.inputs.length; i++) {
            let property = this.inputs[i].split(':');
            if (this[property[0]] != null) {
                if (property[0].indexOf('_') != -1) {
                    let tempObj = {};
                    let key = property[0].replace(/\_/g, '.');
                    ej.createObject(key, this[property[0]], tempObj);
                    let rootProp = key.split('.')[0];
                    $.extend(true, this[rootProp], tempObj[rootProp]);
                }
            }
        }
    }

    ensureCleanObject() {
        let tags = this.tags;
        for (let i = 0; i < tags.length; i++) {
            let element = tags[i], tagElement = this['_' + element.replace(/\./g, '_')];

            if (i === 0 && this[element]) { return; }
            if (ej.isNullOrUndefined(tagElement)) { continue; }

            ej.createObject(element, tagElement.getList(), this);
        }
    }

    ngOnChanges(changes: { [key: string]: SimpleChange }) {
        if (this.firstChange) { return; }
        this.recentChanges = changes;
        this.hasChanges = true;
    }

    getChangesAndReset() {
        if (this.hasChanges === false) { return; }

        let changes = this.recentChanges || {};

        for (let key in changes) {
            let oKey = key;
            if (key.indexOf('_') != -1) {
                oKey = oKey.replace(/\_/g, '.');
                ej.createObject(oKey, changes[key].currentValue, changes);
            } else if (changes.hasOwnProperty(key)) {
                changes[oKey] = changes[key].currentValue;
            }
        }

        let contentChanges = Utils.IterateAndGetChanges(this);
        if (!$.isEmptyObject(contentChanges)) {
            for (let key in contentChanges) {
                if (contentChanges.hasOwnProperty(key)) {
                    let element = contentChanges[key];
                    // this.el.nativeElement.
                    this.parent.widget['_' + this.property.replace(/\./g, '_') + '_' + key](element);
                }
            }
        }

        this.hasChanges = false;

        return changes;
    }

    ngAfterContentChecked() {
        let tags = this.tags;
        for (let i = 0, len = tags.length; i < len; i++) {
            let element = tags[i], tagElement = this['_' + element.replace(/\./g, '_')];
            if (tagElement && tagElement.hasChanges) {
                this.hasChanges = true;
            }
        }
    }
}

export class ArrayTagElement<T extends ComplexTagElement> {
    list: Array<T>;
    children: QueryList<T>;
    recentChanges: Array<IChildChange>;
    hasChanges: boolean;

    constructor(public propertyName: string) {
        this.hasChanges = false;
    }

    // TODO: Need to consider dynamic child change
    ngAfterContentInit() {
        let index = 0;
        this.list = this.children.map((child) => {
            child.index = index++;
            child.property = this.propertyName;
            return child;
        });
    }

    ngOnChanges(changes) {
    }

    getList() {
        let list = this.list;
        for (let i = 0; i < list.length; i++) {
            list[i].ensureCleanObject();
        }
        return list;
    }

    getChangesAndReset(): Array<IChildChange> {
        this.hasChanges = false;
        return this.recentChanges;
    }

    ngAfterContentChecked(): void {
        let changes = {}, res: Array<IChildChange> = changes[this.propertyName] = [], childChange;

        for (let i = 0, list = this.list; i < list.length; i++) {
            let child = list[i];
            if (child.hasChanges) {
                childChange = child.getChangesAndReset();
                for (let key in childChange) {
                    if (key.indexOf('_') == -1) {
                        $.extend(true, child[key], childChange[key]);
                    }
                }
                if (!ej.isNullOrUndefined(childChange)) {
                    res.push(<IChildChange>{
                        index: child.index,
                        change: childChange
                    });
                }
            }
        }

        if (res.length > 0) {
            this.recentChanges = res;
            this.hasChanges = true;
        }
    }
}

export function CreateComplexDirective(args: {
    selector: string,
    inputs: Array<string>,
    outputs?: Array<string>,
    queries?: { [key: string]: any }
}, ejArgs): Type<any> {
    return Directive(args).Class({
        extends: ComplexTagElement,
        constructor: [ejArgs.type, function (widget: EJComponents<any, any>) {
            this.tags = ejArgs.tags;
            this.complexProperties = ejArgs.complexes;
            this.inputs = args.inputs;
            ComplexTagElement.call(this);
            this.parent = widget;
            currentTemplateElement = this;
        }]
    });
}

@Directive({
    selector: `[e-template]`
})
export class EJTemplateDirective {
    element: any;
    private childViews: any = [];
    constructor(protected el: ElementRef, protected viewContainerRef: ViewContainerRef,
        protected templateRef: TemplateRef<any>) {
        this.element = currentTemplateElement;
    }
    ngOnInit() {
        let template = this.viewContainerRef.createEmbeddedView(this.templateRef, { '$implicit': [] });
        let templID = ej.getGuid('angulartmplstr');
        let tempEle = ej.buildTag('div#' + templID);
        $(tempEle).append(template.rootNodes);
        ej.createObject('template', $($(tempEle).append(template.rootNodes)).html(), this.element);
        this.element.template = $($(tempEle).append(template.rootNodes)).html();
        ej.createObject('_templateRef', this.templateRef, this.element);
        ej.createObject('_viewRef', this.viewContainerRef, this.element);
        $(tempEle).remove();
    }
    ngAfterViewInit() {
        window.setTimeout(() => {
            this.compileTempalte();
        });
        let parentWidget = this.element.parent.widget || this.element.widget;
        parentWidget.element.on(parentWidget.pluginName + 'refresh', () => {
            if (parentWidget.angularTemplate) {
                this.compileTempalte();
            }
        });
    }

    compileTempalte() {
        let widget = this.element.parent.widget || this.element.widget;
        let element = widget.element;
        let childView: EmbeddedViewRef<any>;
        let templates = $(element).find('.ej-angular-template');
        let templateObject = widget.angularTemplate;
        for (let template in templateObject) {
            let tmplElement = templates.filter('.' + templateObject[template].key);
            if (tmplElement.length) {
                for (let i = 0; i < tmplElement.length; i++) {
                    childView = (<ViewContainerRef>templateObject[template].viewRef[i]).createEmbeddedView(<TemplateRef<any>>templateObject[template].templateRef[i], { '$implicit': templateObject[template].itemData[parseInt($(tmplElement[i]).attr('ej-prop'))] });
                    $(tmplElement[i]).empty().append(childView.rootNodes);
                }
            } else {
                delete templateObject[template];
            }
        }
    }

    clearTempalte() {
        let templateObject = this.element.parent.widget.angularTemplate;
        if (templateObject && Object.keys(templateObject).length) {
            for (let tmpl in templateObject) {
                delete templateObject[tmpl];
            }
        }
        for (let childView in this.childViews) {
            delete this.childViews[childView];
        }
        this.viewContainerRef.remove();
    }
    ngOnDestroy() {
        this.clearTempalte();
    }
}

export function CreateArrayTagDirective(property: string, selector: string, type): Type<any> {
    return Directive({
        selector: selector,
        queries: {
            children: new ContentChildren(type)
        }
    }).Class({
        extends: ArrayTagElement,
        constructor: function () {
            ArrayTagElement.call(this, property);
        }
    });
}

export function CreateComponent(controlName: string, componentArgs: {
    selector: string,
    inputs: Array<string>,
    outputs: Array<string>,
    template: string,
    changeDetection?: any,
    queries: {
        [key: string]: any
    }
}, ejArgs): Type<any> {
    componentArgs.changeDetection = ChangeDetectionStrategy.OnPush;

    let comp = Component(componentArgs);
    return comp.Class({
        extends: EJComponents,
        constructor: [ElementRef, ChangeDetectorRef, function (el: ElementRef, cdRef: ChangeDetectorRef) {
            this.tags = ejArgs.tags;
            this.outputs = componentArgs.outputs;
            this.inputs = componentArgs.inputs;
            this.twoways = ejArgs.twoways;
            this.isEditor = ejArgs.isEditor;
            this.complexProperties = ejArgs.complexes;
            EJComponents.call(this, controlName, el, cdRef);
        }]
    });
}

export function CreateControlValueAccessor(selector: string, component: Type<any>): Type<any> {
    let EJDefaultValueAccessor;
    let constAccessor = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => EJDefaultValueAccessor), multi: true
    };

    let valDirective = Directive({
        selector: selector,
        host: { '(change)': 'onChange($event.value)', '(focusOut)': 'onTouched()' },
        providers: [constAccessor]
    });

    EJDefaultValueAccessor = valDirective.Class({
        constructor: [component, function (host) {
            this.host = host;
        }],
        onChange: (_) => { },
        onTouched: () => { },

        writeValue(value: any): void {
            if (this.host.widget) {
                this.host.widget.option('model.value', value);
            } else {
                this.host.model.value = value;
            }
        },

        registerOnChange(fn: (_: any) => void): void {
            this.onChange = fn;
        },

        registerOnTouched(fn: () => void): void {
            this.onTouched = fn;
        }
    });

    return EJDefaultValueAccessor;
}

ej.template['text/x-template'] = (self, selector, data, index, prop) => {
    let templateObject = self.angularTemplate;
    if (!templateObject || !templateObject[selector]) {
        templateObject = templateObject || {};
        templateObject[selector] = { key: ej.getGuid('angulartmpl'), itemData: [], viewRef: [], templateRef: [] };
        self.angularTemplate = templateObject;
    }
    let scope = templateObject[selector];
    if (!ej.isNullOrUndefined(index)) {
        if (!scope.itemData) {
            scope.itemData = [];
        }
        scope.itemData[index] = data;
        scope.viewRef[index] = prop._viewRef;
        scope.templateRef[index] = prop._templateRef;
    } else {
        scope.itemData = [data];
        scope.viewRef = [prop._viewRef];
        scope.templateRef = [prop._templateRef];
    }
    let actElement = $(selector).html() || '';
    let tempElement = '<div ej-prop=\'' + index + '\' class=\'' + templateObject[selector].key + ' ej-angular-template\'>' + actElement + '</div>';
    return tempElement;
};

ej.template.render = ej.template['text/x-template'];
