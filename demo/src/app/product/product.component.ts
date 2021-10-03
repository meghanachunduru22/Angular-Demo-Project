import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any;
  constructor() { }

  ngOnInit(): void {
    this.products = [{id:1,name:"Mobile",description:"Samsung",price:20000,imagePath:"assets/images/1.jfif"},
    {id:2,name:"Mobile",description:"Iphone",price:80000,imagePath:"assets/images/2.jfif"},
    {id:3,name:"Mobile",description:"OnePlus",price:30000,imagePath:"assets/images/3.jfif"},
    {id:4,name:"Mobile",description:"Mi",price:15000,imagePath:"assets/images/4.jfif"},
    {id:5,name:"Mobile",description:"Oppo",price:12000,imagePath:"assets/images/5.jfif"},
    {id:6,name:"Mobile",description:"Vivo",price:13000,imagePath:"assets/images/6.jfif"}
    ];
  }

}
