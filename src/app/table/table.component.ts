import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  resposes :any;
  respso:any;
  fullname:any;
  res:any;
 
  constructor(public http :HttpClient) {  
    
  }
  
  ngOnInit(): void {

    this.http.get("http://localhost/newform/list.php").subscribe((response)=>{
      this.resposes = response;
     // this.ngOnInit();
     
  // console.log(this.resposes);
       
    });
  }
  search(){
    if(this.fullname == ""){
      this.ngOnInit();
    }else{
      console.log("hello");
       this.resposes=this.resposes.filter((res:any) =>{
            return res.fullname.toLocaleLowerCase().match(this.fullname.toLocaleLowerCase());
      });

    }
  }
  key="id";
  reverse :boolean=false;
  
  datas:any
  sort(){
    if(this.reverse){
      let newrray= this.resposes.sort((a:any,b:any) =>a.id - b.id);
      this.datas = newrray
    }else{
      let newrray= this.resposes.sort((a:any,b:any) =>b.id - a.id);
      this.datas = newrray
    }
    
        this.reverse = !this.reverse;
  }

}
