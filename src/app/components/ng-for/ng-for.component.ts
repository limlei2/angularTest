import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  cityList: String[] = ["Ottawa", "Montreal", "Toronto", "Quebec"]

  employeeArray: any[] = [
    {empId:121, name:"AAA", city:"Toronto", contactNo:"90128312"},
    {empId:122, name:"AAB", city:"Ottawa", contactNo:"11111111"},
    {empId:123, name:"AAC", city:"Montreal", contactNo:"2222222"},
    {empId:124, name:"AAD", city:"Quebec", contactNo:"3333333"},
    {empId:125, name:"AAE", city:"Markham", contactNo:"4444444"}
  ]

}
