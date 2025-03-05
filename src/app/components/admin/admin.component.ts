import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressBarComponent } from "../../reusable/progress-bar/progress-bar.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  imports: [RouterLink, ProgressBarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  constructor(private httpClient: HttpClient){
    this.getUsers();
  }

  getUsers(){
    this.httpClient.get("https://freeapi.miniprojectideas.com/api/User/GetAllUsers").subscribe((result: any) =>{

    })
  }

}
