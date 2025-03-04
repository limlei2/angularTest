import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../service/customer.service';
import { ProgressBarComponent } from "../../reusable/progress-bar/progress-bar.component";
import { TabsComponent } from "../../reusable/tabs/tabs.component";

@Component({
  selector: 'app-customer',
  imports: [FormsModule, ProgressBarComponent, TabsComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  customerTabs: string [] = ["Basic Info", "Plan Info", "Payments"];

  customerObj: any = {
    "customerId": 0,
    "customerName": "",
    "customerCity": "",
    "mobileNo": "",
    "email": ""
  }

  customerArray: any[] = []

  constructor(private customerService: CustomerService){
    this.getCustomers();
  }

  getCustomers(){
    this.customerService.loadCustomers().subscribe((result: any) => {
      this.customerArray = result.data;
    })
  }

  onSaveCustomer(){
    this.customerService.createCustomer(this.customerObj).subscribe((result: any) => {
      if(result.result){
        alert("Customer Created Successfully");
        this.getCustomers();
      } else {
        alert(result.message);
      }
    })
  }

}
