import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  imports: [NgClass],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent implements OnInit {

  @Input() tabList: string[] = [];

  @Output() onTabClicked = new EventEmitter<string>();

  currentTab: string = '';

  constructor(){
    
  }

  ngOnInit(): void {
    this.currentTab = this.tabList[0];
  }

  onTabChange(tabName: string) {
    this.currentTab = tabName;
    this.onTabClicked.emit(tabName)
  }

}
