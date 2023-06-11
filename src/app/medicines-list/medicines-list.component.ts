import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImportdataServiceService } from '../importdata-service.service';
import { Medicines } from '../medicines';
import { AddedInCartService } from '../added-in-cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-medicines-list',
  templateUrl: './medicines-list.component.html',
  styleUrls: ['./medicines-list.component.css']
})
export class MedicinesListComponent implements OnInit {

  constructor(private import_data:ImportdataServiceService, private add_to_cart:AddedInCartService, private _route:Router){}
  medicinesList:Medicines[] = [];
  ctr:number=0;
  flag:string = "N";
  searchedItem:Medicines[] = [];
  noItemFound:String = 'Yes';
  isPurchased:string = 'N';
  ngOnInit() {
    return this.import_data.getAllMedicinesList().subscribe((response) =>
    {
      this.medicinesList = response;
    });  
  }
  searchItem(userForm:any)
  {
    console.log("Hi From Search Item List")
    if(userForm!=null)
    {
      let count = 0, i = 0;
      while(this.medicinesList[count]!=null)
      {
        console.log("userForm -> "+userForm.value.search)
          if(this.medicinesList[count].name == (userForm.value.search))
          {
            console.log("Inside if--");
            this.flag = "Y";
            this.searchedItem[i] = this.medicinesList[count];
            console.log(this.searchedItem[i]);
            i++;
          }
          count++;
      }
      if(this.searchedItem.length==0 || this.searchedItem[0]==null)
      {
        console.log("searched Item -> "+this.searchedItem)
        this.flag = "Y";
        this.noItemFound = "No Results Found!";
      }

    }
  }
  submit(userForm:any){

  }
  btnClick(todo:any){
    console.log(todo.name);
    this.isPurchased = "Y";
  }
  addToCart(medicineAdded:any){
    this.add_to_cart.added_to_cart[this.ctr] = medicineAdded;
    this.ctr++;
    console.log(this.add_to_cart.added_to_cart);
  }

  pageReload(){
    console.log("ReLoad");
    this.isPurchased = "N";
    this.flag = 'N';
    this.noItemFound = "Yes";
    this._route.navigate(['medicinesList']);
  }
  
}
