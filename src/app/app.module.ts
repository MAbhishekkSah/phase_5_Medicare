import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MedicinesListComponent } from './medicines-list/medicines-list.component';
import { HelpComponent } from './help/help.component';
import { AddItemComponent } from './ManageStore/add-item/add-item.component';
import { EditItemComponent } from './ManageStore/edit-item/edit-item.component';
import { TrackUserComponent } from './ManageStore/track-user/track-user.component';
import { LoginComponent } from './User/login/login.component';
import { SignupComponent } from './User/signup/signup.component';
import { YourOrdersComponent } from './User/your-orders/your-orders.component';
import { CartComponent } from './User/cart/cart.component';
import { LogoutComponent } from './User/logout/logout.component';
import { EditMedicineComponent } from './ManageStore/edit-medicine/edit-medicine.component';
import { UserDetailsComponent } from './User/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MedicinesListComponent,
    HelpComponent,
    AddItemComponent,
    EditItemComponent,
    TrackUserComponent,
    LoginComponent,
    SignupComponent,
    YourOrdersComponent,
    CartComponent,
    LogoutComponent,
    EditMedicineComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
