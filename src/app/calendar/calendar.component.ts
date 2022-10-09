import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import * as signalR from '@microsoft/signalr';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  dataSource: DataSource;

  constructor(private http: HttpClient, private datePipe: DatePipe) {
    this.dataSource = new DataSource({
      store: new CustomStore(/* {
        load: (options) => {
          return of(true);
        },
        insert: (values) => {
          return of(true);
        },
        remove: (key) => {
          return of(true);
        },
        update: (key, values) => {
          return of(true);
        },
      } */),
    });
  }

  ngOnInit(): void {
    let connection = new signalR.HubConnectionBuilder()
      .withUrl('/calendarEvent')
      .build();

    connection.on('NewCalendarEvent', (data) => {
      console.log(data);
    });
  }
}
