import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ListCustomersComponent } from './pages/list-customers/list-customers.component';
import { NewCustomerComponent } from './pages/new-customer/new-customer.component';
import { ViewCustomerComponent } from './pages/view-customer/view-customer.component';

const routes: Routes = [
  {
    path: 'customers',
    component: ListCustomersComponent
  },
  {
    path: 'customers/new',
    component: NewCustomerComponent
  },
  {
    path: 'customers/edit/:id',
    component: NewCustomerComponent
  },
  {
    path: 'customers/view/:id',
    component: ViewCustomerComponent
  },
  { 
    path: '**', 
    redirectTo: 'customers', 
  },
  
];


@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
