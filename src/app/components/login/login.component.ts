import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    EmailId: '',
    Password: ''
  };

  //test1234@google.com
  //1234

  router = inject(Router);
  http = inject(HttpClient);

  onLogin(){
    this.http.post("https://freeapi.miniprojectideas.com/api/User/Login", this.loginObj).subscribe((result: any) => {
      if(result.message == "UserName or Password is Wrong"){
        alert("Wrong Credentials");
      } else {
        localStorage.setItem("angular19User", result.data.token)
        this.router.navigateByUrl("admin");
      }
    }, error => {
      alert("Wrong Credentials")
    })
  }

}
