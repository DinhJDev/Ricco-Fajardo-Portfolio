import React from 'react';
import ApiCalendar from 'react-google-calendar-api';

var calendarId = process.env.GoogleCalendarId;

ApiCalendar.setCalendar(calendarId);

ApiCalendar.listEvents({
    timeMin: new Date().getTime.toISOString(),
    timeMax: new Date().addDays(365).toISOString(),
    showDeleted: false,
    maxResults: 3,
    orderBy:'startTime'
})