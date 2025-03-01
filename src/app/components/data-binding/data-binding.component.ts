import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  firstName: string = "Hello";
  rollNo: number = 121;
  isActive: boolean = true;
  currentName: Date = new Date();
  myPlaceholder: string = "Enter Full Name";
  div1ClassName: string = "bg-primary";
  selectedCity: string = "";

  constructor(){
    console.log(this.firstName);
    this.isActive = false;
    console.log(this.isActive);
  }

  showWelcomeMessage() {
    alert("Welcome to Angular 19 Website")
  }

  onCityChanged(){
    console.log("City Changed");
  }

}
