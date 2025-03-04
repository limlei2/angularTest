import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit, AfterViewInit {

  http = inject(HttpClient);
  carList: any[] = [];
  carObj: any = {
    "carId": 0,
    "brand": "",
    "model": "",
    "year": "",
    "color": "",
    "dailyRate": "",
    "carImage": "",
    "regNo": ""
  }

  //used to init variables/values
  constructor(){

  }

  //trigger api functions
  ngOnInit(){
    this.getAllCars();
  }

  ngAfterViewInit(): void {
    console.log("After View Init", performance.now())
  }

  getAllCars(){
    this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars").subscribe((result:any) => {
      this.carList = result.data;
    })
  }

  onSaveCar(){
    this.http.post("https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar", this.carObj).subscribe((result:any) => {
      if(result.result) {
        alert("Car Created Successfully")
        this.getAllCars()
      } else {
        alert(result.message)
      }
    })
  }

  onEdit(data: any){
    this.carObj = data;
  }

  updateCar(){
    this.http.put("https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar", this.carObj).subscribe((result: any) => {
      if(result.result) {
        alert("Car Updated Successfully")
        this.getAllCars();
      } else {
        alert(result.message)
      }
    })
  }

  onDelete(id: number) {
    const isDelete = confirm("Are you sure you want to delete?");
    if(isDelete) {
      this.http.delete("https://freeapi.miniprojectideas.com/api/CarRentalApp/DeleteCarbyCarId?carid=" + id).subscribe((result: any) => {
        if(result.result) {
          alert("Car Deleted Successfully");
          this.getAllCars();
        } else {
          alert(result.message)
        }
      })
    }
  }

}
