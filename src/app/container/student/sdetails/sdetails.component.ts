import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sdetails',
  templateUrl: './sdetails.component.html',
  styleUrls: ['./sdetails.component.css']
})
export class SdetailsComponent implements OnInit {

  constructor() { }
  public studentData:any=[{'name':'a1','password':'1234','Collage':'HIT'},{'name':'a2','password':'qwer','Collage':'HIT'},{'name':'a3','password':'asdf','Collage':'HIT'}];
  public studentName:any="";
  public studentPassword:any="";
  public res:any=[];
  onCheck(name:any,password:any){
    
    this.studentName=name.value;
    this.studentPassword=password.value;
    this.res=this.studentData.filter((i:any)=>{
      if (i.name==this.studentName && i.password==this.studentPassword){
        console.log(i);
        return i;
      }
    })
    console.log(this.studentName);
    console.log(this.studentPassword);
  };

  ngOnInit(): void {
  }

}
