//modules

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent, data: {title:'Home'}},
  {path: 'about', component:AboutComponent, data: {title:'About'}},
  {path: 'products', component:ProductsComponent, data: {title:'Products'}},
  {path: 'services', component:ServicesComponent, data: {title:'Services'}},
  {path: 'contact', component:ContactComponent, data: {title:'Contact'}},
  {path: 'contact/contact-list', component: ContactListComponent, data: {title: 'Contact List'}},
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
