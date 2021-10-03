import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  employees:any;

  constructor() { 

  }

  ngOnInit(): void {
    this.employees=[{empId: 100,empName:"pooja",salary:20000},
    {empId: 101,empName:"bindu",salary:50000},
    {empId: 102,empName:"chinnu",salary:100000},
    {empId: 103,empName:"kasu",salary:200000}];
  }
  showDetails(data: any){
    alert(data);
  }

}