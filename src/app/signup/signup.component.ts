import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  uname:any
  pass:any
  email:any

  constructor(private ds:DataServiceService,private route:Router){ }

  ngOnInit(): void {
    
  }

  signup(){

    const result=this.ds.signup(this.uname,this.pass,this.email)

    if(result){
      alert("Now you can login")
      this.route.navigateByUrl("login")
    } else{
      alert("uname already exists")
    }

  }



}
