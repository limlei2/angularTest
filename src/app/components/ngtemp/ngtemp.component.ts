import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngtemp',
  imports: [NgFor, NgIf, NgTemplateOutlet],
  templateUrl: './ngtemp.component.html',
  styleUrl: './ngtemp.component.css'
})
export class NgtempComponent {

  employeeArray: any[] = [
    {empId:121, isActive: false, name:"", city:"Toronto", contactNo:"90128312", attendance: 40},
    {empId:122, isActive: true, name:"AAB", city:"Ottawa", contactNo:"11111111", attendance: 60},
    {empId:123, isActive: false, name:null, city:"Montreal", contactNo:"2222222", attendance: 80},
    {empId:124, isActive: true, name:"AAD", city:"Quebec", contactNo:"3333333", attendance: 10},
    {empId:125, isActive: false, name:undefined, city:"Markham", contactNo:"4444444", attendance: 35}
  ]
  
  isLoader: boolean = true;

  constructor(){
    setTimeout(()=>{
      this.isLoader = false;
    }, 3000)
  }

}
