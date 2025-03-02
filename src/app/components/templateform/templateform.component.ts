import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  imports: [FormsModule, CommonModule],
  templateUrl: './templateform.component.html',
  styleUrl: './templateform.component.css'
})
export class TemplateformComponent {

  userObj: any = {
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    state: '',
    zipcode: '',
    isTermsAgreed: false
  }

  onSave(){
    debugger;
    const formValue = this.userObj;
  }

}
