import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor() { }
  public i:any=0;
  public done: boolean = true;
  onClick(btn1:any){
    this.i=1;
    this.done = !this.done;
    console.log(btn1.status);
  }
  onClick2(btn2:any){
    this.i=0
  }


  ngOnInit(): void {
  }

}
