import { Directive, ElementRef, ViewContainerRef, TemplateRef, Injector } from '@angular/core';
import { EJTemplateDirective, ejtemplate, ngTemplateid } from './../template';

@Directive({
    selector: `[e-treegridheader-template]`
})
export class TreeGridHeaderTemplateDirective extends EJTemplateDirective {
    referenceObj: any = {};
    constructor(protected el: ElementRef, protected viewContainerRef: ViewContainerRef,
        protected templateRef: TemplateRef<any>, protected injector: Injector) {
        super(el, viewContainerRef, templateRef);
    }
    ngOnInit() {
        let template = this.viewContainerRef.createEmbeddedView(this.templateRef, { '$implicit': [] });
        let templID = ej.getGuid('angulartmplstr');
        let tempEle = ej.buildTag('div#' + templID);
        $(tempEle).append(template.rootNodes);
        ej.createObject('headerTemplateID', $($(tempEle).append(template.rootNodes)).html(), this.element);
        this.element.headerTemplateID = $($(tempEle).append(template.rootNodes)).html();
        Object.defineProperty(this.element, '_treegridtemplateRef', {
            enumerable: false,
            writable: true,
            value: this.templateRef
        });
        Object.defineProperty(this.element, '_treegridviewRef', {
            enumerable: false,
            writable: true,
            value: this.viewContainerRef
        });
        $(tempEle).remove();
    }
}

ej.template['text/x-treegridheadertemplate'] = (self: any, selector: string, data: any, index: number, prop: any) => {
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
        scope.viewRef[index] = prop._treegridviewRef;
        scope.templateRef[index] = prop._treegridtemplateRef;
    } else {
        if (data.length > 1) {
            for (var i = 0; i < data.length; i++) {
                scope.itemData[i] = data[i];
                scope.viewRef[i] = prop._treegridviewRef;
                scope.templateRef[i] = prop._treegridtemplateRef;
            }
        }
        else {

            scope.itemData = [data];
            scope.viewRef = [prop._treegridviewRef];
            scope.templateRef = [prop._treegridtemplateRef];
        }
    }
    let actElement = '';
    if (selector.startsWith('#'))
        actElement = $(selector).html() || '';
    else
        actElement = selector;
    let tempElement = '';
    if (data.length > 1 && self.model.rowTemplate != null) {
        for (var i = 0; i < data.length; i++) {
            var temp = actElement;
            temp = '<tr ej-prop=\'' + i + '\'class=\'' + templateObject[selector].key + ' ej-angular-template\' />' + temp + '</tr>';
            tempElement = tempElement + temp;
        }
    }
    else {
        tempElement = tempElement + '<div ej-prop=\'' + index + '\' class=\'' + " embeddedview " + templateObject[selector].key + ' ej-angular-template\'>' + actElement + ' </div>';
    }
    return tempElement;
};