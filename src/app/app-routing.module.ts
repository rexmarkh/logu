import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReportsComponent } from './components/reports/reports.component';
import { AdminComponent } from './components/admin/admin.component';
import { EmployeeManagementComponent } from './components/employee-management/employee-management.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { AuthGuard } from './modules/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'reports',
        component: ReportsComponent
      },
      {
        path: 'employee_management',
        component: EmployeeManagementComponent
      },
      {
        path: 'accounts',
        component: AccountsComponent
      },
      {
        path: 'attendance',
        component: AttendanceComponent
      }
    ]
  },
  { 
    path: '**',
    redirectTo: '/home' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
// export const aboutRouting: ModuleWithProviders = RouterModule.forChild(routes);
export class AppRoutingModule { }
