import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mdetails',
  templateUrl: './mdetails.component.html',
  styleUrls: ['./mdetails.component.css']
})
export class MdetailsComponent implements OnInit {

  constructor() { }
  public image1:any="./assets/images/college.jpeg";
  public image2:any="./assets/images/student.jpeg";

  ngOnInit(): void {
  }

}
