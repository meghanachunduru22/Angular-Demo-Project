import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showemp',
  templateUrl: './showemp.component.html',
  styleUrls: ['./showemp.component.css']
})
export class ShowempComponent implements OnInit {
  employees:any;

  constructor() { 
    this.employees=[{empId: 100,empName:"pooja",salary: 99999.99,gender: 'F',doj: '4/5/2012'},
    {empId: 101,empName:"bindu",salary: 96999.99,gender: 'F',doj: '07/7/2012' },
    {empId: 102,empName:"chinnu",salary: 95999.99,gender: 'F',doj: '02/6/2012'},
    {empId: 103,empName:"kasu",salary: 94999.99,gender: 'F',doj: new Date()}];
  }

  ngOnInit(): void {
  }

}