/**
 *
 * Version 1.2021.0 (Ready for another year)
 *
 * GLOBAL constants for U3A
 * Change these to match the column names you are using for email
 * recepient addresses and email sent column.
 */
var U3A = {
  // file is - "U3A Current Program - Wordpress"
  WORDPRESS_PROGRAM_FILE_ID: '1svCAoJKW7FsnerJSPhLkzuXEcicdksA5fcV2UfaztR8',

  // file is - "U3A Current Program - Wordpress"
  // WORDPRESS_PROGRAM_FILE_ID: '1BIsccb20dsKWSVB_jy7EKGmCV25yQzdbGn3K99tv6A0',

  // file is - "Term-1 Enrolments"
  ENROLMENT_GOOGLE_FORM_ID: '1ALDrXrF5t9BLidEoIXSmqHM79iTRERUB4guQxO2jBko',
}

/**
 * Creates the menu items for user to run scripts on drop-down.
 */
function onOpen() {
  var ui = SpreadsheetApp.getUi()
  ui.createMenu('U3A Menu')
    .addSubMenu(
      ui.createMenu('CourseDetails').addItem('Change Course Status', 'loadCourseStatusSidebar')
    )
    .addSeparator()
    .addSubMenu(
      ui
        .createMenu('CalendarImport')
        .addItem('Schedule Zoom Meeting', 'selectedZoomSessions')
        .addItem('Email Session Advice', 'createSessionAdviceEmail')
        .addItem('Import Calendar', 'loadCalendarSidebar')
        .addItem('Create CourseDetails', 'createCourseDetails')
    )
    .addSeparator()
    .addSubMenu(
      ui
        .createMenu('Database')
        .addItem('Email ALL Enrollees - PDF', 'allRegistrationEmails')
        .addItem('Email ALL Enrollees - HTML', 'allHTMLRegistrationEmails')
        .addItem('Email SELECTED Enrollees - PDF', 'selectedRegistrationEmails')
        .addItem('Email SELECTED Enrollees - HTML', 'selectedHTMLRegistrationEmails')
        .addItem('Create Database', 'buildDB')
    )
    .addSeparator()
    .addSubMenu(
      ui
        .createMenu('Wordpress Actions')
        .addItem('Create Course Program', 'makeCourseDetailForWordPress')
        .addItem('Create Enrolment Form', 'updateWordpressEnrolmentForm')
        .addItem('Import Enrolment Responses', 'makeEnrolmentCSV')
    )
    .addSeparator()
    .addSubMenu(
      ui.createMenu('Other Actions').addItem('I&R Enrolment Sheet', 'selectedAttendanceRegister')
    )
    .addSeparator()
    .addItem('Help', 'loadHelpSidebar')
    .addToUi()
}

/**
 * Handler  to load Calendar Sidebar.
 */
function loadCalendarSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('calendarSidebar').setTitle('U3A Tools')
  SpreadsheetApp.getUi().showSidebar(html)
}

/**
 * Handler  to load Help Sidebar.
 */
function loadHelpSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('HelpSidebar').setTitle('U3A Tools Help')
  SpreadsheetApp.getUi().showSidebar(html)
}

/**
 * Handler  to load Help Sidebar.
 */
function loadCourseStatusSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('courseStatusSidebar').setTitle('U3A Tools')
  SpreadsheetApp.getUi().showSidebar(html)
}

function btn_makeHyperlink() {
  makeHyperlink()
}

function btn_print_attendance() {
  print_attendance()
}

function btn_createDraftZoomEmail() {
  createDraftZoomEmail()
}

function btn_print_courseRegister() {
  print_courseRegister()
}

function changeCourseStatus({ courseTitle, status }) {
  console.log('changeCourseStatus', courseTitle, status)
  updateCourseStatus(courseTitle, status)
  showToast(`Updated "${courseTitle}" to ${status}`, 5)
}
