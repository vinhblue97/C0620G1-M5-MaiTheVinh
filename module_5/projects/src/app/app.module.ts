import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './case-study/home/home.component';
import {M5CreateCustomerComponent} from './case-study/m5-create-customer/m5-create-customer.component';
import {M5ListCustomerComponent} from './case-study/m5-list-customer/m5-list-customer.component';
import {M5NavbarComponent} from './case-study/m5-navbar/m5-navbar.component';
import {TodoComponent} from './ 6.angular_form/todo/todo.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    M5CreateCustomerComponent,
    M5ListCustomerComponent,
    M5NavbarComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
