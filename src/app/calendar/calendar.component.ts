import { Component, OnInit } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  dataSource: DataSource;
  hubConnection: any;

  constructor(private calendarService: CalendarService) {
    this.dataSource = new DataSource({
      store: new CustomStore({
        load: (options) => {
          return lastValueFrom(this.calendarService.getEvents()).then((res) => {
            return res;
          });
        },
        insert: (values) => {
          if (values.allDay) {
            values.start = new Date(values.start);
            values.start.setDate(values.start.getDate() + 1);
          } else {
            values.start = new Date(values.start);
            values.start.setDate(values.start.getDate() + 1);
            values.end = new Date(values.end);
            values.end.setDate(values.start.getDate() + 1);
          }

          return lastValueFrom(this.calendarService.insertEvent(values));
        },
        remove: (key) => {
          return lastValueFrom(this.calendarService.deleteEvent(key.id)).then(
            (res) => {}
          );
        },
        update: (key, values) => {
          return lastValueFrom(this.calendarService.updateEvent(values));
        },
      }),
    });
  }

  ngOnInit(): void {
    this.startConnectionWithCalendarHub(environment.apiUrl + 'calendarevent');

    this.hubConnection.on('NewCalendarEvent', (event: any) => {
      console.log(event);
    });
  }

  startConnectionWithCalendarHub(url: string) {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(url)
      .build();
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch((err: any) =>
        console.log('Error while starting connection: ' + err)
      );
  }
}
