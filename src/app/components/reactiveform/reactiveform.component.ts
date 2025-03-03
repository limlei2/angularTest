import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  imports: [ReactiveFormsModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {

  userForm: FormGroup = new FormGroup ({
    fName: new FormControl("",[Validators.required]),
    lName: new FormControl("", [Validators.required, Validators.minLength(5)]),
    username: new FormControl(""),
    city: new FormControl(""),
    state: new FormControl("Ontario"),
    zip: new FormControl(),
    isAgree: new FormControl(false)
  })

  constructor(){
    this.userForm.controls['state'].disable();
    setTimeout(() =>{
      this.userForm.controls['state'].enable();
    }, 5000)
    const isValid = this.userForm.valid;
  }

  onUserSave(){
    const formValue = this.userForm.value;
    console.log(formValue)
  }

}
