import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";


import { EJ_GRID_COMPONENTS } from './ej/grid.component';
import { GridGroupcaptionTemplateDirective } from './ej/gridtemplates/grid.groupcaption.template';
import { GridEditTemplateDirective } from './ej/gridtemplates/grid.edit.template';
import { GridDetailsTemplateDirective } from './ej/gridtemplates/grid.details.template';
import { GridSummaryTemplateDirective } from './ej/gridtemplates/grid.summary.template';
import { GridRowTemplateDirective } from './ej/gridtemplates/grid.row.template';
import { EJ_CHART_COMPONENTS } from './ej/chart.component';
import { EJ_DIAGRAM_COMPONENTS } from './ej/diagram.component';
import { EJ_OVERVIEW_COMPONENTS } from './ej/overview.component';
import { EJ_SUNBURSTCHART_COMPONENTS } from './ej/sunburstchart.component';
import { EJ_SYMBOLPALETTE_COMPONENTS } from './ej/symbolpalette.component';
import { EJ_HEATMAP_COMPONENTS } from './ej/heatmap.component';
import { EJ_HEATMAPLEGEND_COMPONENTS } from './ej/heatmaplegend.component';
import { EJ_RANGENAVIGATOR_COMPONENTS } from './ej/rangenavigator.component';
import { EJ_SPARKLINE_COMPONENTS } from './ej/sparkline.component';
import { EJ_BULLETGRAPH_COMPONENTS } from './ej/bulletgraph.component';
import { EJ_CIRCULARGAUGE_COMPONENTS } from './ej/circulargauge.component';
import { EJ_LINEARGAUGE_COMPONENTS } from './ej/lineargauge.component';
import { EJ_MAP_COMPONENTS } from './ej/map.component';
import { EJ_TREEMAP_COMPONENTS } from './ej/treemap.component';
import { EJ_DIGITALGAUGE_COMPONENTS } from './ej/digitalgauge.component';
import { EJ_SPREADSHEET_COMPONENTS } from './ej/spreadsheet.component';
import { EJ_DATEPICKER_COMPONENTS } from './ej/datepicker.component';
import { EJ_GANTT_COMPONENTS } from './ej/gantt.component';
import { EJ_TREEGRID_COMPONENTS } from './ej/treegrid.component';
import { TreeGridHeaderTemplateDirective } from './ej/treegridtemplates/treegrid.header.template';
import { EJ_COLORPICKER_COMPONENTS } from './ej/colorpicker.component';
import { EJ_DIALOG_COMPONENTS } from './ej/dialog.component';
import { EJ_SCROLLER_COMPONENTS } from './ej/scroller.component';
import { EJ_BARCODE_COMPONENTS } from './ej/barcode.component';
import { EJ_PDFVIEWER_COMPONENTS } from './ej/pdfviewer.component';
import { EJ_NUMERICTEXTBOX_COMPONENTS } from './ej/numerictextbox.component';
import { EJ_CURRENCYTEXTBOX_COMPONENTS } from './ej/currencytextbox.component';
import { EJ_PERCENTAGETEXTBOX_COMPONENTS } from './ej/percentagetextbox.component';
import { EJ_TIMEPICKER_COMPONENTS } from './ej/timepicker.component';
import { EJ_TOOLBAR_COMPONENTS } from './ej/toolbar.component';
import { EJ_MENU_COMPONENTS } from './ej/menu.component';
import { EJ_AUTOCOMPLETE_COMPONENTS } from './ej/autocomplete.component';
import { EJ_MASKEDIT_COMPONENTS } from './ej/maskedit.component';
import { EJ_TREEVIEW_COMPONENTS } from './ej/treeview.component';
import { EJ_SCHEDULE_COMPONENTS } from './ej/schedule.component';
import { EJ_KANBAN_COMPONENTS } from './ej/kanban.component';
import { EJ_RIBBON_COMPONENTS } from './ej/ribbon.component';
import { EJ_PIVOTGRID_COMPONENTS } from './ej/pivotgrid.component';
import { EJ_PIVOTCLIENT_COMPONENTS } from './ej/pivotclient.component';
import { EJ_PIVOTCHART_COMPONENTS } from './ej/pivotchart.component';
import { EJ_PIVOTSCHEMADESIGNER_COMPONENTS } from './ej/pivotschemadesigner.component';
import { EJ_PIVOTPAGER_COMPONENTS } from './ej/pivotpager.component';
import { EJ_PIVOTTREEMAP_COMPONENTS } from './ej/pivottreemap.component';
import { EJ_PIVOTGAUGE_COMPONENTS } from './ej/pivotgauge.component';
import { EJ_RATING_COMPONENTS } from './ej/rating.component';
import { EJ_LISTBOX_COMPONENTS } from './ej/listbox.component';
import { EJ_LISTVIEW_COMPONENTS } from './ej/listview.component';
import { EJ_ROTATOR_COMPONENTS } from './ej/rotator.component';
import { EJ_RTE_COMPONENTS } from './ej/rte.component';
import { EJ_DROPDOWNLIST_COMPONENTS } from './ej/dropdownlist.component';
import { EJ_COMBOBOX_COMPONENTS } from './ej/combobox.component';
import { EJ_RADIALMENU_COMPONENTS } from './ej/radialmenu.component';
import { EJ_SIGNATURE_COMPONENTS } from './ej/signature.component';
import { EJ_RADIALSLIDER_COMPONENTS } from './ej/radialslider.component';
import { EJ_TILE_COMPONENTS } from './ej/tile.component';
import { EJ_NAVIGATIONDRAWER_COMPONENTS } from './ej/navigationdrawer.component';
import { EJ_ACCORDION_COMPONENTS } from './ej/accordion.component';
import { EJ_TAB_COMPONENTS } from './ej/tab.component';
import { EJ_CHECKBOX_COMPONENTS } from './ej/checkbox.component';
import { EJ_RADIOBUTTON_COMPONENTS } from './ej/radiobutton.component';
import { EJ_TOGGLEBUTTON_COMPONENTS } from './ej/togglebutton.component';
import { EJ_SPLITBUTTON_COMPONENTS } from './ej/splitbutton.component';
import { EJ_DATETIMEPICKER_COMPONENTS } from './ej/datetimepicker.component';
import { EJ_DATERANGEPICKER_COMPONENTS } from './ej/daterangepicker.component';
import { EJ_PROGRESSBAR_COMPONENTS } from './ej/progressbar.component';
import { EJ_TAGCLOUD_COMPONENTS } from './ej/tagcloud.component';
import { EJ_BUTTON_COMPONENTS } from './ej/button.component';
import { EJ_GROUPBUTTON_COMPONENTS } from './ej/groupbutton.component';
import { EJ_TOOLTIP_COMPONENTS } from './ej/tooltip.component';
import { EJ_SLIDER_COMPONENTS } from './ej/slider.component';
import { EJ_FILEEXPLORER_COMPONENTS } from './ej/fileexplorer.component';
import { EJ_REPORTVIEWER_COMPONENTS } from './ej/reportviewer.component';
import { EJ_REPORTDESIGNER_COMPONENTS } from './ej/reportdesigner.component';
import { EJ_SPLITTER_COMPONENTS } from './ej/splitter.component';
import { EJ_UPLOADBOX_COMPONENTS } from './ej/uploadbox.component';
import { EJ_WAITINGPOPUP_COMPONENTS } from './ej/waitingpopup.component';
import { EJ_SPELLCHECK_COMPONENTS } from './ej/spellcheck.component';

import { EJTemplateDirective } from './ej/template';

export * from './ej/grid.component';
export { GridGroupcaptionTemplateDirective } from './ej/gridtemplates/grid.groupcaption.template';
export { GridEditTemplateDirective } from './ej/gridtemplates/grid.edit.template';
export { GridDetailsTemplateDirective } from './ej/gridtemplates/grid.details.template';
export { GridSummaryTemplateDirective } from './ej/gridtemplates/grid.summary.template';
export { GridRowTemplateDirective } from './ej/gridtemplates/grid.row.template';
export * from './ej/chart.component';
export * from './ej/diagram.component';
export * from './ej/overview.component';
export * from './ej/sunburstchart.component';
export * from './ej/symbolpalette.component';
export * from './ej/heatmap.component';
export * from './ej/heatmaplegend.component';
export * from './ej/rangenavigator.component';
export * from './ej/sparkline.component';
export * from './ej/bulletgraph.component';
export * from './ej/circulargauge.component';
export * from './ej/lineargauge.component';
export * from './ej/map.component';
export * from './ej/treemap.component';
export * from './ej/digitalgauge.component';
export * from './ej/spreadsheet.component';
export * from './ej/datepicker.component';
export * from './ej/gantt.component';
export * from './ej/treegrid.component';
export { TreeGridHeaderTemplateDirective } from './ej/treegridtemplates/treegrid.header.template';
export * from './ej/colorpicker.component';
export * from './ej/dialog.component';
export * from './ej/scroller.component';
export * from './ej/barcode.component';
export * from './ej/pdfviewer.component';
export * from './ej/numerictextbox.component';
export * from './ej/currencytextbox.component';
export * from './ej/percentagetextbox.component';
export * from './ej/timepicker.component';
export * from './ej/toolbar.component';
export * from './ej/menu.component';
export * from './ej/autocomplete.component';
export * from './ej/maskedit.component';
export * from './ej/treeview.component';
export * from './ej/schedule.component';
export * from './ej/kanban.component';
export * from './ej/ribbon.component';
export * from './ej/pivotgrid.component';
export * from './ej/pivotclient.component';
export * from './ej/pivotchart.component';
export * from './ej/pivotschemadesigner.component';
export * from './ej/pivotpager.component';
export * from './ej/pivottreemap.component';
export * from './ej/pivotgauge.component';
export * from './ej/rating.component';
export * from './ej/listbox.component';
export * from './ej/listview.component';
export * from './ej/rotator.component';
export * from './ej/rte.component';
export * from './ej/dropdownlist.component';
export * from './ej/combobox.component';
export * from './ej/radialmenu.component';
export * from './ej/signature.component';
export * from './ej/radialslider.component';
export * from './ej/tile.component';
export * from './ej/navigationdrawer.component';
export * from './ej/accordion.component';
export * from './ej/tab.component';
export * from './ej/checkbox.component';
export * from './ej/radiobutton.component';
export * from './ej/togglebutton.component';
export * from './ej/splitbutton.component';
export * from './ej/datetimepicker.component';
export * from './ej/daterangepicker.component';
export * from './ej/progressbar.component';
export * from './ej/tagcloud.component';
export * from './ej/button.component';
export * from './ej/groupbutton.component';
export * from './ej/tooltip.component';
export * from './ej/slider.component';
export * from './ej/fileexplorer.component';
export * from './ej/reportviewer.component';
export * from './ej/reportdesigner.component';
export * from './ej/splitter.component';
export * from './ej/uploadbox.component';
export * from './ej/waitingpopup.component';
export * from './ej/spellcheck.component';
export * from './ej/core';
export { EJTemplateDirective } from './ej/template';


let EJ_COMPONENTS = [EJTemplateDirective, EJ_GRID_COMPONENTS, GridGroupcaptionTemplateDirective, GridEditTemplateDirective, GridDetailsTemplateDirective, GridSummaryTemplateDirective, GridRowTemplateDirective,
    EJ_CHART_COMPONENTS, EJ_DIAGRAM_COMPONENTS, EJ_OVERVIEW_COMPONENTS, EJ_SUNBURSTCHART_COMPONENTS,
    EJ_SYMBOLPALETTE_COMPONENTS, EJ_HEATMAP_COMPONENTS, EJ_HEATMAPLEGEND_COMPONENTS, EJ_RANGENAVIGATOR_COMPONENTS, EJ_SPARKLINE_COMPONENTS,
    EJ_BULLETGRAPH_COMPONENTS, EJ_CIRCULARGAUGE_COMPONENTS, EJ_LINEARGAUGE_COMPONENTS, EJ_MAP_COMPONENTS, EJ_TREEMAP_COMPONENTS,
    EJ_DIGITALGAUGE_COMPONENTS, EJ_SPREADSHEET_COMPONENTS, EJ_DATEPICKER_COMPONENTS, EJ_GANTT_COMPONENTS, EJ_TREEGRID_COMPONENTS,
    TreeGridHeaderTemplateDirective, EJ_COLORPICKER_COMPONENTS, EJ_DIALOG_COMPONENTS, EJ_SCROLLER_COMPONENTS, EJ_BARCODE_COMPONENTS, EJ_PDFVIEWER_COMPONENTS,
    EJ_NUMERICTEXTBOX_COMPONENTS, EJ_CURRENCYTEXTBOX_COMPONENTS, EJ_PERCENTAGETEXTBOX_COMPONENTS, EJ_TIMEPICKER_COMPONENTS, EJ_TOOLBAR_COMPONENTS,
    EJ_MENU_COMPONENTS, EJ_AUTOCOMPLETE_COMPONENTS, EJ_MASKEDIT_COMPONENTS, EJ_TREEVIEW_COMPONENTS, EJ_SCHEDULE_COMPONENTS,
    EJ_KANBAN_COMPONENTS, EJ_RIBBON_COMPONENTS, EJ_PIVOTGRID_COMPONENTS, EJ_PIVOTCLIENT_COMPONENTS, EJ_PIVOTCHART_COMPONENTS,
    EJ_PIVOTSCHEMADESIGNER_COMPONENTS, EJ_PIVOTPAGER_COMPONENTS, EJ_PIVOTTREEMAP_COMPONENTS, EJ_PIVOTGAUGE_COMPONENTS, EJ_RATING_COMPONENTS,
    EJ_LISTBOX_COMPONENTS, EJ_LISTVIEW_COMPONENTS, EJ_ROTATOR_COMPONENTS, EJ_RTE_COMPONENTS, EJ_DROPDOWNLIST_COMPONENTS,
    EJ_COMBOBOX_COMPONENTS, EJ_RADIALMENU_COMPONENTS, EJ_SIGNATURE_COMPONENTS, EJ_RADIALSLIDER_COMPONENTS, EJ_TILE_COMPONENTS,
    EJ_NAVIGATIONDRAWER_COMPONENTS, EJ_ACCORDION_COMPONENTS, EJ_TAB_COMPONENTS, EJ_CHECKBOX_COMPONENTS, EJ_RADIOBUTTON_COMPONENTS,
    EJ_TOGGLEBUTTON_COMPONENTS, EJ_SPLITBUTTON_COMPONENTS, EJ_DATETIMEPICKER_COMPONENTS, EJ_DATERANGEPICKER_COMPONENTS, EJ_PROGRESSBAR_COMPONENTS,
    EJ_TAGCLOUD_COMPONENTS, EJ_BUTTON_COMPONENTS, EJ_GROUPBUTTON_COMPONENTS, EJ_TOOLTIP_COMPONENTS, EJ_SLIDER_COMPONENTS,
    EJ_FILEEXPLORER_COMPONENTS, EJ_REPORTVIEWER_COMPONENTS, EJ_REPORTDESIGNER_COMPONENTS, EJ_SPLITTER_COMPONENTS, EJ_UPLOADBOX_COMPONENTS,
    EJ_WAITINGPOPUP_COMPONENTS, EJ_SPELLCHECK_COMPONENTS];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EJ_COMPONENTS
  ],
  exports: [
    EJ_COMPONENTS
  ]
})
export class EJAngular2Module {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EJAngular2Module
    };
  }
}


