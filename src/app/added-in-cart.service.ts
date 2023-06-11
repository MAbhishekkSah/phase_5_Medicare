import { Injectable } from '@angular/core';
import { Medicines } from './medicines';

@Injectable({
  providedIn: 'root'
})
export class AddedInCartService {

  constructor() { }
  added_to_cart:Medicines[] = new Array();
}
