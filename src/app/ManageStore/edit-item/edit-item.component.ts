import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImportdataServiceService } from 'src/app/importdata-service.service';
import { Medicines } from 'src/app/medicines';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit{

  constructor(private service:ImportdataServiceService, private _router:Router, private activatedRoute:ActivatedRoute){}
  itemsList!:Medicines[];

  ngOnInit() {  
    return this.service.getAllMedicinesList().subscribe((response) =>
    {
      this.itemsList = response;
    });
  }
  deleteItem(itemId:number){
    this.itemsList = this.itemsList.filter(c=>c.id!=itemId);
    this.service.deleteMedicine(itemId);
    console.log("Deleted!");
  }
}
