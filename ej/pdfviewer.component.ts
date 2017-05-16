import 'syncfusion-javascript/Scripts/ej/web/ej.pdfviewer.min';
import { CommonModule } from '@angular/common';
import { EJComponents } from './core';
import { EventEmitter, Type, Component, ElementRef, ChangeDetectorRef, Input, Output, NgModule, ModuleWithProviders } from '@angular/core';



@Component({
    selector: 'ej-pdfviewer',
    template: ''})
export class PdfViewerComponent extends EJComponents<any, any> {
	@Input('locale') locale_input: any;
	@Input('toolbarSettings') toolbarSettings_input: any;
	@Input('serverActionSettings') serverActionSettings_input: any;
	@Input('serviceUrl') serviceUrl_input: any;
	@Input('documentPath') documentPath_input: any;
	@Input('pageCount') pageCount_input: any;
	@Input('currentPageNumber') currentPageNumber_input: any;
	@Input('zoomPercentage') zoomPercentage_input: any;
	@Input('pdfService') pdfService_input: any;
	@Input('hyperlinkOpenState') hyperlinkOpenState_input: any;
	@Input('enableHyperlink') enableHyperlink_input: any;
	@Input('enableTextSelection') enableTextSelection_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('isDocumentEdited') isDocumentEdited_input: any;
	@Input('allowClientBuffering') allowClientBuffering_input: any;
	@Input('fileName') fileName_input: any;
	@Input('toolbarSettings.showToolTip') toolbarSettings_showToolTip_input: any;
	@Input('toolbarSettings.toolbarItem') toolbarSettings_toolbarItem_input: any;
	@Input('serverActionSettings.load') serverActionSettings_load_input: any;
	@Input('serverActionSettings.fileUpload') serverActionSettings_fileUpload_input: any;
	@Input('serverActionSettings.print') serverActionSettings_print_input: any;
	@Input('serverActionSettings.download') serverActionSettings_download_input: any;


	@Output('documentLoad') documentLoad_output = new EventEmitter();
	@Output('documentUnload') documentUnload_output = new EventEmitter();
	@Output('pageChange') pageChange_output = new EventEmitter();
	@Output('zoomChange') zoomChange_output = new EventEmitter();
	@Output('hyperlinkClick') hyperlinkClick_output = new EventEmitter();
	@Output('beforePrint') beforePrint_output = new EventEmitter();
	@Output('afterPrint') afterPrint_output = new EventEmitter();
	@Output('pageClick') pageClick_output = new EventEmitter();
	@Output('bufferStart') bufferStart_output = new EventEmitter();
	@Output('bufferEnd') bufferEnd_output = new EventEmitter();
	@Output('destroy') destroy_output = new EventEmitter();

    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef) {
        super('PdfViewer', el, cdRef, []);
    }



}

export var EJ_PDFVIEWER_COMPONENTS: Type<any>[] = [PdfViewerComponent
];


