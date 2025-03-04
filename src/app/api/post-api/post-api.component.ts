import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from "../../reusable/tabs/tabs.component";
import { Car, ICarList } from '../../model/car';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule, TabsComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit, AfterViewInit {

  @ViewChild("textCity") cityTextbox : ElementRef | undefined;

  @ViewChild(TabsComponent) myTabViewChild : TabsComponent | undefined;

  http = inject(HttpClient);
  carList: ICarList [] = [];
  carObj: Car = new Car();
  currentTab: string = 'Car List';

  //used to init variables/values
  constructor(){

  }

  readCity(){
    const city = this.cityTextbox?.nativeElement.value;
    if(this.cityTextbox){
      this.cityTextbox.nativeElement.style.color = "red";
    }
    const val = this.myTabViewChild?.currentTab
  }

  //trigger api functions
  ngOnInit(){
    this.getAllCars();
  }

  onTabChange(tabName: string) {
    this.currentTab = tabName;
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
