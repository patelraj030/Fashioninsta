import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  orderplaced:string;
  flag:boolean=false;
  checkout:FormGroup;
  constructor() { 
    this.checkout=new FormGroup({});
  }

  ngOnInit(): void {
  }
  onsubmit():void{
    console.log("method works");
    this.flag=true;
    this.orderplaced="Thank you for your Order. You will get your product within 4 business days"
  }

}
