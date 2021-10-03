import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{

  @Input() c_empId:any;
  @Input() c_empName:any;
  @Input() c_salary:any;

  @Output() send:EventEmitter<any> = new EventEmitter();

  sendData(){
    //Write code to send selected data to parent
    this.send.emit(this.c_empId+"..."+this.c_empName+"..."+this.c_salary); //send is a firing event

  }
}
