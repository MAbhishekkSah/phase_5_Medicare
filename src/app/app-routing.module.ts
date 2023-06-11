import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MedicinesListComponent } from './medicines-list/medicines-list.component';
import { HelpComponent } from './help/help.component';
import { AddItemComponent } from './ManageStore/add-item/add-item.component';
import { EditItemComponent } from './ManageStore/edit-item/edit-item.component';
import { TrackUserComponent } from './ManageStore/track-user/track-user.component';
import { SignupComponent } from './User/signup/signup.component';
import { LoginComponent } from './User/login/login.component';
import { CartComponent } from './User/cart/cart.component';
import { YourOrdersComponent } from './User/your-orders/your-orders.component';
import { LogoutComponent } from './User/logout/logout.component';
import { AppComponent } from './app.component';
import { EditMedicineComponent } from './ManageStore/edit-medicine/edit-medicine.component';
import { UserDetailsComponent } from './User/user-details/user-details.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'home', component:HomeComponent  },
  { path:'medicinesList', component:MedicinesListComponent  },
  { path:'help', component:HelpComponent},
  { path:'addItem', component:AddItemComponent },
  { path:'editItem', component:EditItemComponent },
  { path:'trackUser', component:TrackUserComponent},
  { path:'signup', component:SignupComponent},
  { path:'login', component:LoginComponent},
  { path:'cart', component:CartComponent},
  { path:'yourOrders', component:YourOrdersComponent},
  { path:'logout', component:LogoutComponent},
  { path:"app/:id",component:AppComponent},
  { path:'editMedicine/:id', component:EditMedicineComponent},
  { path:'userDetails/:id', component:UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
