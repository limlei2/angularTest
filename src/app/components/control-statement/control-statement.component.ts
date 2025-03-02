import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-statement',
  imports: [FormsModule],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css'
})
export class ControlStatementComponent {

  div1Visible: boolean = false;
  isChecked: boolean = false;
  dayName: string = '';
  cityList: string [] = [
    "Ottawa",
    "Toronto",
    "Montreal",
    "Quebec"
  ]
  employeeArray: any[] = [
    {empId:121, name:"AAA", city:"Toronto", contactNo:"90128312"},
    {empId:122, name:"AAB", city:"Ottawa", contactNo:"11111111"},
    {empId:123, name:"AAC", city:"Montreal", contactNo:"2222222"},
    {empId:124, name:"AAD", city:"Quebec", contactNo:"3333333"},
    {empId:125, name:"AAE", city:"Markham", contactNo:"4444444"}
  ]

  hideShowDiv1(isShow: boolean) {
    this.div1Visible=isShow;
  }

}
