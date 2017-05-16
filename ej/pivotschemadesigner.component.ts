import 'syncfusion-javascript/Scripts/ej/web/ej.pivotschemadesigner.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-pivotschemadesigner',
    template: ''})
export class PivotSchemaDesignerComponent extends EJComponents<any, any> {
	@Input('cssClass') cssClass_input: any;
	@Input('customObject') customObject_input: any;
	@Input('enableWrapper') enableWrapper_input: any;
	@Input('enableRTL') enableRTL_input: any;
	@Input('olap') olap_input: any;
	@Input('enableDragDrop') enableDragDrop_input: any;
	@Input('height') height_input: any;
	@Input('locale') locale_input: any;
	@Input('pivotControl') pivotControl_input: any;
	@Input('serviceMethod') serviceMethod_input: any;
	@Input('url') url_input: any;
	@Input('width') width_input: any;
	@Input('layout') layout_input: any;
	@Input('olap.showKPI') olap_showKPI_input: any;
	@Input('olap.showNamedSets') olap_showNamedSets_input: any;
	@Input('serviceMethod.fetchMembers') serviceMethod_fetchMembers_input: any;
	@Input('serviceMethod.filtering') serviceMethod_filtering_input: any;
	@Input('serviceMethod.memberExpand') serviceMethod_memberExpand_input: any;
	@Input('serviceMethod.nodeDropped') serviceMethod_nodeDropped_input: any;
	@Input('serviceMethod.nodeStateModified') serviceMethod_nodeStateModified_input: any;
	@Input('serviceMethod.removeButton') serviceMethod_removeButton_input: any;


	@Output('afterServiceInvoke') afterServiceInvoke_output = new EventEmitter();
	@Output('beforeServiceInvoke') beforeServiceInvoke_output = new EventEmitter();
	@Output('dragMove') dragMove_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef) {
        super('PivotSchemaDesigner', el, cdRef, []);
    }



}

export var EJ_PIVOTSCHEMADESIGNER_COMPONENTS: Type<any>[] = [PivotSchemaDesignerComponent
];


