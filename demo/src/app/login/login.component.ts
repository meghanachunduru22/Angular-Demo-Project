import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginId : string;
  password : string;
  employee : any;
  constructor(private router: Router, private service: EmpService) { //Dependency injection
    this.loginId = "";
    this.password = "";
    this.employee = [{id:1,name:"PASHA",email: "pasha@gmail.com",password:'password'},
    {id:2,name:"HARSHA",email: "harsha@gmail.com",password:'password'},
    {id:3,name:"RAHUL",email: "rahul@gmail.com",password:'password'}];
  }

  ngOnInit(): void {
  }
  
  loginSubmit(): void{
    //method to display the data
    //testing whether the data came to ts or not
    //console.log('User Id : '+this.loginId);
    //console.log('Password : '+this.password);
    if(this.loginId === 'HR' && this.password === 'HR'){
      
      alert('Welcome to new Page....');
      
    } 
    else {
      this.employee.forEach((element:any) =>{
        //console.log(element.email);
        if(element.email === this.loginId){
          alert("Welcome to Employee Home Page...")
        }       
      }
      );
      //alert('Login Falilure....')
    }
    
  }
 async loginSubmit2(loginForm : any){
    //console.log(loginForm);

    //console.log(loginForm.value.loginId);
    //console.log(loginForm.value.password);
    if(loginForm.email === 'HR' && loginForm.password === 'HR'){
      //alert('Welcome to HR new Page....');
      //alert("TEST IN LOGIN.....");
      this.service.setUserLoggedIn();
      this.router.navigate(['hrhomepage']);

    } 
    else {
      // this.employee.forEach((element:any) =>{
        this.service.setUserLoggedIn();
       await this.service.getEmployeeByEmailAndPassword(loginForm).then((result:any)=>{console.log(result);this.employee=result});
       console.log("Data Fetched: ", this.employee);
       if(this.employee!=null){
          alert("Welcome to Employee Home Page...")
        }       
      }
      ;
      //alert('Login Falilure....')
    }
  }