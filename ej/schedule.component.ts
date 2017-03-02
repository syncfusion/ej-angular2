import { CreateComponent, Utils, Type, CreateArrayTagDirective, CreateComplexDirective, ContentChild, forwardRef } from './core';
let ScheduleResourceInputs = Utils.AngularizeInputs(['field', 'title', 'name', 'allowMultiple', 'resourceSettings',
        'resourceSettings.dataSource', 'resourceSettings.text', 'resourceSettings.id', 'resourceSettings.groupId', 'resourceSettings.color',
        'resourceSettings.start', 'resourceSettings.end', 'resourceSettings.workWeek', 'resourceSettings.appointmentClass'], []);

export let ScheduleResourceDirective = CreateComplexDirective({
    selector: 'e-resources>e-resource',
    inputs: ScheduleResourceInputs,
    queries: {
    }
}, {
         tags: [ ],
         complexes: ['resourceSettings'],
         type: forwardRef(() => ScheduleComponent)
    });


export let ScheduleResourcesDirective = CreateArrayTagDirective('resources', 'ej-schedule>e-resources', ScheduleResourceDirective);


let Outputs = ['actionBegin', 'actionComplete', 'appointmentClick', 'beforeAppointmentRemove', 'beforeAppointmentChange',
    'appointmentHover', 'beforeAppointmentCreate', 'appointmentWindowOpen', 'beforeContextMenuOpen', 'cellClick',
    'cellDoubleClick', 'cellHover', 'create', 'destroy', 'drag',
    'dragStart', 'dragStop', 'menuItemClick', 'navigation', 'queryCellInfo',
    'reminder', 'resize', 'resizeStart', 'resizeStop', 'overflowButtonClick',
    'overflowButtonHover', 'keyDown', 'appointmentCreated', 'appointmentChanged', 'appointmentRemoved'
    , 'model.appointmentSettings.dataSourceChange: appointmentSettings.dataSourceChange', 'model.currentViewChange: currentViewChange', 'model.currentDateChange: currentDateChange'];
let ComplexProperties = ['appointmentSettings', 'categorizeSettings', 'contextMenuSettings', 'group', 'workHours',
    'prioritySettings', 'reminderSettings', 'renderDates', 'timeZoneCollection', 'agendaViewSettings',
    'tooltipSettings', 'timeScale', 'blockoutSettings', 'contextMenuSettings.menuItems'];
let Inputs = Utils.AngularizeInputs(['allowDragAndDrop', 'allowKeyboardNavigation', 'appointmentSettings', 'appointmentTemplateId', 'cssClass',
    'categorizeSettings', 'cellHeight', 'cellWidth', 'contextMenuSettings', 'dateFormat',
    'showAppointmentNavigator', 'enableAppointmentResize', 'enableLoadOnDemand', 'enablePersistence', 'enableRTL',
    'endHour', 'group', 'height', 'workHours', 'isDST',
    'isResponsive', 'locale', 'maxDate', 'minDate', 'orientation',
    'prioritySettings', 'readOnly', 'reminderSettings', 'renderDates', 'resourceHeaderTemplateId',
    'showAllDayRow', 'showCurrentTimeIndicator', 'showHeaderBar', 'showLocationField', 'showTimeZoneFields',
    'showQuickWindow', 'startHour', 'timeMode', 'timeZone', 'timeZoneCollection',
    'views', 'width', 'enableRecurrenceValidation', 'agendaViewSettings', 'firstDayOfWeek',
    'workWeek', 'tooltipSettings', 'timeScale', 'showDeleteConfirmationDialog', 'allDayCellsTemplateId',
    'workCellsTemplateId', 'dateHeaderTemplateId', 'showOverflowButton', 'appointmentDragArea', 'showNextPrevMonth',
    'blockoutSettings', 'appointmentSettings.query', 'appointmentSettings.tableName', 'appointmentSettings.applyTimeOffset', 'appointmentSettings.id',
    'appointmentSettings.startTime', 'appointmentSettings.endTime', 'appointmentSettings.subject', 'appointmentSettings.description', 'appointmentSettings.recurrence',
    'appointmentSettings.recurrenceRule', 'appointmentSettings.allDay', 'appointmentSettings.resourceFields', 'appointmentSettings.categorize', 'appointmentSettings.location',
    'appointmentSettings.priority', 'appointmentSettings.startTimeZone', 'appointmentSettings.endTimeZone', 'categorizeSettings.allowMultiple', 'categorizeSettings.enable',
    'categorizeSettings.dataSource', 'categorizeSettings.id', 'categorizeSettings.text', 'categorizeSettings.color', 'categorizeSettings.fontColor',
    'contextMenuSettings.enable', 'contextMenuSettings.menuItems', 'contextMenuSettings.menuItems.appointment', 'contextMenuSettings.menuItems.cells', 'group.resources',
    'workHours.highlight', 'workHours.start', 'workHours.end', 'prioritySettings.enable', 'prioritySettings.dataSource',
    'prioritySettings.text', 'prioritySettings.value', 'prioritySettings.template', 'reminderSettings.enable', 'reminderSettings.alertBefore',
    'renderDates.start', 'renderDates.end', 'timeZoneCollection.dataSource', 'timeZoneCollection.text', 'timeZoneCollection.id',
    'timeZoneCollection.value', 'agendaViewSettings.daysInAgenda', 'agendaViewSettings.dateColumnTemplateId', 'agendaViewSettings.timeColumnTemplateId', 'tooltipSettings.enable',
    'tooltipSettings.templateId', 'timeScale.enable', 'timeScale.minorSlotCount', 'timeScale.majorSlot', 'timeScale.minorSlotTemplateId',
    'timeScale.majorSlotTemplateId', 'blockoutSettings.enable', 'blockoutSettings.templateId', 'blockoutSettings.dataSource', 'blockoutSettings.query',
    'blockoutSettings.tableName', 'blockoutSettings.id', 'blockoutSettings.startTime', 'blockoutSettings.endTime', 'blockoutSettings.subject',
    'blockoutSettings.isBlockAppointment', 'blockoutSettings.isAllDay', 'blockoutSettings.resourceId', 'blockoutSettings.customStyle', 'resources'], ['appointmentSettings.dataSource', 'currentView', 'currentDate']);
export let ScheduleComponent = CreateComponent('Schedule', {
    selector: 'ej-schedule',
    inputs: Inputs,
    outputs: Outputs,
    template: '',
    queries: {
        _resources : new ContentChild(ScheduleResourcesDirective),
    }
}, {
        tags: ['resources'],
        twoways: ['appointmentSettings.dataSource', 'currentView', 'currentDate'],
        complexes: ComplexProperties,
    });

export const EJ_SCHEDULE_COMPONENTS: Type<any>[] = [ScheduleComponent , ScheduleResourcesDirective, ScheduleResourceDirective];

