import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddedInCartService } from 'src/app/added-in-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit
{
  constructor(private add_to_cart:AddedInCartService, private route:Router){}

  showItems:any[] = this.add_to_cart.added_to_cart;
  ngOnInit(): void {
    console.log(this.add_to_cart.added_to_cart);
      console.log(this.showItems);
  }
  removeFromCart(medId:any)
  {
    console.log("cart->"+this.add_to_cart.added_to_cart);
    this.showItems = this.showItems.filter(c=>c.id!=medId);
    this.route.navigate(['cart']);

  }
  btnClick(med:any){

  }

}
