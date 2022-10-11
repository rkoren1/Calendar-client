import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CalendarEvent, CalendarEventDto } from './calendar.model';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get<CalendarEvent>(
      environment.apiUrl + 'api/CalendarEvents/GetCalendarEvents'
    );
  }

  insertEvent(calendarEventDto: CalendarEventDto) {
    return this.http.post<CalendarEventDto>(
      environment.apiUrl + 'api/CalendarEvents/PostCalendarEvent',
      calendarEventDto
    );
  }
  updateEvent(calendarEvent: CalendarEvent) {
    const params = new HttpParams().set('id', calendarEvent.id);
    return this.http.put<CalendarEventDto>(
      environment.apiUrl + 'api/CalendarEvents/UpdateCalendarEvent',
      calendarEvent,
      {
        params,
      }
    );
  }
  deleteEvent(calendarEventId: number) {
    const params = new HttpParams().set('id', calendarEventId);
    return this.http.delete(
      environment.apiUrl + 'api/CalendarEvents/DeleteCalendarEvent',
      {
        params,
      }
    );
  }
}
