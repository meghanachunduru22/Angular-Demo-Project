import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
@Component({
  selector: 'app-showemp',
  templateUrl: './showemp.component.html',
  styleUrls: ['./showemp.component.css']
})
export class ShowempComponent implements OnInit {
  employees:any;

  constructor(private service: EmpService) { 
  //   this.employees=[{empId: 100,empName:"pooja",salary: 99999.99,gender: 'Female',doj: '4/5/2012'},
  //   {empId: 101,empName:"bindu",salary: 96999.99,gender: 'Female',doj: '07/7/2012' },
  //   {empId: 102,empName:"chinnu",salary: 95999.99,gender: 'Female',doj: '02/6/2012'},
  //   {empId: 103,empName:"kasu",salary: 94999.99,gender: 'Female',doj: new Date()}];
}

  ngOnInit(): void {
    this.service.showAllEmployees().subscribe((result) => {console.log(result); this.employees=result;});
  }
  deleteEmp(employee: any){
    this.service.deleteEmp(employee).subscribe((result: any)=>{
      const i = this.employees.findIndex((element:any)=>{
        return element._id === employee._id;
    });
    this.employees.splice(i,1);
 });
 }
}

//TS calls service , service calls server