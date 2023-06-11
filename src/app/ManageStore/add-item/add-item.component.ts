import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImportdataServiceService } from 'src/app/importdata-service.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  isSubmitted = false;
  constructor(private service:ImportdataServiceService, private route:Router) {}
  ngOnInit(): void {
  }
  selectedFiles?: FileList;
  currentFile?:File;
  progress = 0;
  message = '';
  name:string = '';

  medicine = {
    name:'',
    description:'',
    sellerName:'',
    category:'',
    price:''
  }
  call(){
    console.log("File Calling!");
  }

  selectFile(event:any){
    console.log("select A file -> ");
    this.selectedFiles = event.target.files;
    console.log("slected File is "+this.selectedFiles);
  }

  addMedicine()
  {
    console.log("Adding Medicine..");
    const data = {
        name:this.medicine.name,
        description:this.medicine.description,
        sellerName:this.medicine.sellerName,
        category:this.medicine.category,
        price:this.medicine.price
    };
    alert(data.name);
    console.log("progress = "+this.progress);
    this.progress = 0;
    if(this.selectedFiles)
    {
      console.log("Inside If** ");
      const file:File |null = this.selectedFiles.item(0);
      console.log("######");
      if(file)
      {
        console.log("Inside file if -- ");
        this.currentFile = file;
        this.service.uploadFilesAndMedicine(this.currentFile,data).subscribe();
      }
      this.selectedFiles = undefined;
    }
      this.route.navigate(['medicinesList']);
  }
  
}
