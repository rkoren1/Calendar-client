import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  DxButtonModule,
  DxChartModule,
  DxDataGridModule,
  DxPieChartModule,
  DxSchedulerModule,
  DxSelectBoxModule,
} from 'devextreme-angular';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SideNavOuterToolbarModule } from './layouts';
import { AppInfoService, ScreenService } from './shared/services';
import { FormsStoreModule } from './Store/store.module';

@NgModule({
  declarations: [AppComponent, CalendarComponent],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    AppRoutingModule,
    DxButtonModule,
    DxDataGridModule,
    FormsStoreModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    DxChartModule,
    CommonModule,
    HttpClientModule,
    DxSelectBoxModule,
    DxPieChartModule,
    DxSchedulerModule,
  ],
  providers: [ScreenService, AppInfoService, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
