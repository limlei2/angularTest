import { DatePipe, JsonPipe, LowerCasePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../pipes/na.pipe';
import { ProgressBarComponent } from "../../reusable/progress-bar/progress-bar.component";

@Component({
  selector: 'app-ng-for',
  imports: [NgFor, UpperCasePipe, LowerCasePipe, JsonPipe, DatePipe, NaPipe, ProgressBarComponent],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  courseName: string = "Angular"

  currentDate: Date = new Date();

  studentObj: any = {
    name:"Lim",
    city:"Toronto",
    mobile:"019283019283"
  }

  cityList: String[] = ["Ottawa", "Montreal", "Toronto", "Quebec"]

  employeeArray: any[] = [
    {empId:121, name:"", city:"Toronto", contactNo:"90128312", attendance: 40},
    {empId:122, name:"AAB", city:"Ottawa", contactNo:"11111111", attendance: 60},
    {empId:123, name:null, city:"Montreal", contactNo:"2222222", attendance: 80},
    {empId:124, name:"AAD", city:"Quebec", contactNo:"3333333", attendance: 10},
    {empId:125, name:undefined, city:"Markham", contactNo:"4444444", attendance: 35}
  ]

}
