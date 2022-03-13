import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // details :any;
  employee:any;

  constructor(private httpClient: HttpClient,private service:EmpService) { 
    this.employee = {empID: "",empName: "",DOJ: "",salary: "",gender: ""};
  }

  ngOnInit(): void {
    // this.httpClient.get('http://restcountries.com/v3.1/all').subscribe((result:any)=>
    // console.log(result));
    console.log("Data recieved");//OUT OF SUBsCRIPTION
  }
  // showDetails(): void{
  //   console.log("EmpID: "+this.details.empID);
  //   console.log("EmpName: "+this.details.empName);
  //   console.log("DOJ: "+this.details.DOJ);
  //   console.log("salary: "+this.details.salary);
  //   console.log("gender: "+this.details.gender);
  // }
  registerEmp(){
    this.service.registerEmp(this.employee).subscribe((result)=>console.log(result));
  }

}
