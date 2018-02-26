import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-button-panel',
  templateUrl: './button-panel.component.html',
  styleUrls: ['./button-panel.component.css']
})
export class ButtonPanelComponent implements OnInit, AfterViewInit {
  intercepts = ["alef", "bet", "gimel", "dalet", "hey", "vav", "zain"];
  toggle = false;
  DISPLAY_ELEMENTS: number;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.DISPLAY_ELEMENTS = 5;
  }

  public getLineElements(){
    return this.intercepts.slice(0,this.DISPLAY_ELEMENTS);
  }
  public getColumnElements(){
    return this.intercepts.slice(this.DISPLAY_ELEMENTS, this.intercepts.length);
  }
  public onClick(){
    this.toggle = !this.toggle;
  }
}
