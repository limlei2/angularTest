import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {
  
  constructor(){
    console.log("constructor")
  }

  ngOnInit(): void {
    console.log("ngOnInit")
    //use cases: api call functions
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit", performance.now())
    //use cases: viewchild, getting reference of elements/third party libraries
    //performance.now used to test speed of ui
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  
  ngOnDestroy(): void {
    alert("You are leaving page")
    console.log("ngOnDestroy")
  }
}
