import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  
  message: string;
  age: number;
  name: string;
  salary: number;
  isMarried: boolean;
  hobbies : any;
  address : any;

  constructor() {
    //automatically invokes when an object is crated.
    //it is useful for initializing class variables and acts as dependency injection
    //avoid writing code inside the constructor
    this.message = "Hello World";
    this.age = 33;
    this.name = 'Harsha';
    this.salary = 99999;
    this.isMarried = true;
    this.hobbies = ["Playing","CHATTING","EATING"];
    this.address = {doorNo:101,street: "gachbowli",city:"Hyd"};
    //alert('constructor is exected');
   }

  ngOnInit(): void {
    //invokes when component is created
    //Write init code of angular
    //alert('init is executed..');
  }
  showMessage(): void{
    alert('Method called...');
    console.log('method called...');   //to display msg in console
  }
}
