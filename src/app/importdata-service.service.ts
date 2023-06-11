import { Injectable } from '@angular/core';
import {HttpClient,HttpEvent,HttpRequest,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicines } from './medicines';
import { MedicineWithoutPhoto } from './medicine-without-photo';

@Injectable({
  providedIn: 'root'
})
export class ImportdataServiceService {

  baseUrl:String = "http://localhost:8081/medicare";
  
  constructor(private http:HttpClient) { }

  //get All medicines list
  getAllMedicinesList() : Observable<Medicines[]>{
    let endPoint = 'getMedicinesList';
    let url = `${this.baseUrl}/${endPoint}`;
    return this.http.get<Medicines[]>(`${url}`);
  }

  getMedicinesById(id:number):Observable<Medicines>{
    let endPoint = 'getMedicinesById';
    let url = `${this.baseUrl}/${endPoint}/${id}`;
    return this.http.get<Medicines>(`${url}`);
  }

  updateMedicine(id:number,updatedMed:Medicines):Observable<any>{
    let endPoint = 'updateMedicine';
    let url = `${this.baseUrl}/${endPoint}/${id}`;
    return this.http.put(`${url}`,updatedMed);
  }

  deleteMedicine(id:number){
    let endPoint = 'deleteMedicine';
    let url = `${this.baseUrl}/${endPoint}/${id}`;
    this.http.delete(`${url}`).subscribe(data =>{
      return this.getAllMedicinesList();
    });
  }

  uploadFilesAndMedicine(file:File,data:MedicineWithoutPhoto):Observable<Medicines>
  {
    console.log("data -> "+data.price);
    let endPoint = 'addMedicine';
      let url = `${this.baseUrl}/${endPoint}`;
      const formData:FormData = new FormData();
      formData.append('files',file);
      formData.append('name',data.name);
      formData.append('sellerName',data.sellerName);
      formData.append('category',data.category);
      formData.append('description',data.description);
      formData.append('price',data.price);
    console.log("Before calling upload Med");
      return this.http.post<Medicines>(`${url}`,formData);
  }

}
