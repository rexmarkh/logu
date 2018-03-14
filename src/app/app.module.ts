import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './modules/core.module';
import { NgxBootstrapModule } from './modules/ngx-bootstrap.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ReportsComponent } from './components/reports/reports.component';
import { EmployeeManagementComponent } from './components/employee-management/employee-management.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AttendanceComponent } from './components/attendance/attendance.component';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    AdminComponent,
    HomeComponent,
    ReportsComponent,
    EmployeeManagementComponent,
    AccountsComponent,
    DashboardComponent,
    AttendanceComponent
  ],
  imports: [
    AppRoutingModule,    
    BrowserModule,
    FormsModule,
    CoreModule,
    NgxBootstrapModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
