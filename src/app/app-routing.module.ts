import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ListEmployeesComponent } from './employee/list-employees/list-employees.component';

const routes: Routes = [
  { path: 'list-employees', component: ListEmployeesComponent },

  { path: 'create-employee', component: CreateEmployeeComponent },

  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
