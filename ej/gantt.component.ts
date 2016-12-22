import { CreateComponent, Utils, Type } from './core';

let Outputs = ['actionBegin', 'actionComplete', 'beginEdit', 'cellSelecting', 'cellSelected',
    'rowDrag', 'rowDragStart', 'rowDragStop', 'collapsed', 'collapsing',
    'contextMenuOpen', 'create', 'endEdit', 'expanded', 'expanding',
    'load', 'queryCellInfo', 'queryTaskbarInfo', 'rowDataBound', 'rowSelected',
    'rowSelecting', 'taskbarEdited', 'taskbarEditing', 'taskbarClick', 'toolbarClick'
    , 'model.dataSourceChange: dataSourceChange', 'model.selectedRowIndexChange: selectedRowIndexChange', 'model.splitterSettings.positionChange: splitterSettings.positionChange'];
let ComplexProperties = ['dragTooltip', 'splitterSettings', 'editSettings', 'scheduleHeaderSettings', 'sizeSettings',
    'sortSettings', 'toolbarSettings'];
let Inputs = Utils.AngularizeInputs(['addDialogFields', 'allowColumnResize', 'allowGanttChartEditing', 'allowKeyboardNavigation', 'allowMultiSorting',
    'allowMultipleExporting', 'allowSelection', 'allowSorting', 'allowDragAndDrop', 'enablePredecessorValidation',
    'baselineColor', 'baselineEndDateMapping', 'baselineStartDateMapping', 'childMapping', 'columnDialogFields',
    'connectorLineBackground', 'connectorlineWidth', 'cssClass', 'cellTooltipTemplate', 'dragTooltip',
    'dateFormat', 'durationMapping', 'durationUnit', 'editDialogFields', 'isResponsive',
    'splitterSettings', 'editSettings', 'enableAltRow', 'enableWBS', 'enableWBSPredecessor',
    'enableCollapseAll', 'leftTaskLabelMapping', 'rightTaskLabelMapping', 'leftTaskLabelTemplate', 'rightTaskLabelTemplate',
    'enableContextMenu', 'enableProgressBarResizing', 'enableResize', 'enableTaskbarDragTooltip', 'enableTaskbarTooltip',
    'enableVirtualization', 'endDateMapping', 'highlightWeekends', 'holidays', 'includeWeekend',
    'locale', 'milestoneMapping', 'showColumnOptions', 'parentTaskbarTemplate', 'taskType',
    'workUnit', 'taskSchedulingMode', 'selectionType', 'parentProgressbarBackground', 'resourceUnitMapping',
    'notesMapping', 'taskSchedulingModeMapping', 'durationUnitMapping', 'parentTaskbarBackground', 'parentTaskIdMapping',
    'predecessorMapping', 'progressbarBackground', 'progressbarHeight', 'progressbarTooltipTemplate', 'progressbarTooltipTemplateId',
    'progressMapping', 'query', 'renderBaseline', 'validateManaulTasksOnLinking', 'resourceIdMapping',
    'resourceInfoMapping', 'resourceNameMapping', 'resources', 'roundOffDayworkingTime', 'rowHeight',
    'scheduleEndDate', 'scheduleHeaderSettings', 'scheduleStartDate', 'showColumnChooser', 'showGridCellTooltip',
    'showGridExpandCellTooltip', 'showProgressStatus', 'showResourceNames', 'showTaskNames', 'sizeSettings',
    'sortSettings', 'splitterPosition', 'startDateMapping', 'stripLines', 'taskbarBackground',
    'taskbarEditingTooltipTemplate', 'taskbarEditingTooltipTemplateId', 'taskbarTooltipTemplate', 'taskbarTemplate', 'milestoneTemplate',
    'readOnly', 'taskbarTooltipTemplateId', 'taskIdMapping', 'taskNameMapping', 'toolbarSettings',
    'treeColumnIndex', 'selectionMode', 'weekendBackground', 'workingTimeScale', 'dragTooltip.showTooltip',
    'dragTooltip.tooltipItems', 'dragTooltip.tooltipTemplate', 'splitterSettings.index', 'editSettings.allowAdding', 'editSettings.allowDeleting',
    'editSettings.allowEditing', 'editSettings.allowIndent', 'editSettings.allowOutdent', 'editSettings.beginEditAction', 'editSettings.editMode',
    'scheduleHeaderSettings.dayHeaderFormat', 'scheduleHeaderSettings.hourHeaderFormat', 'scheduleHeaderSettings.minutesPerInterval', 'scheduleHeaderSettings.monthHeaderFormat', 'scheduleHeaderSettings.scheduleHeaderType',
    'scheduleHeaderSettings.timescaleStartDateMode', 'scheduleHeaderSettings.weekendBackground', 'scheduleHeaderSettings.weekHeaderFormat', 'scheduleHeaderSettings.yearHeaderFormat', 'sizeSettings.height',
    'sizeSettings.width', 'sortSettings.sortedColumns', 'toolbarSettings.showToolbar', 'toolbarSettings.toolbarItems', 'selectedCellIndexes'], ['dataSource', 'selectedRowIndex', 'splitterSettings.position']);
export let GanttComponent = CreateComponent('Gantt', {
    selector: 'ej-gantt',
    inputs: Inputs,
    outputs: Outputs,
    template: '',
    queries: {
    }
}, {
        tags: [],
        twoways: ['dataSource', 'selectedRowIndex', 'splitterSettings.position'],
        complexes: ComplexProperties,
    });

export const EJ_GANTT_COMPONENTS: Type<any>[] = [GanttComponent  ];

