import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
 

  constructor(private route:Router,private ds:DataServiceService,private fb:FormBuilder){}

  loginData=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
    pass:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
  }
  )



  ngOnInit(): void {
    
    
  }

  

  login(){
    var uname=this.loginData.value.uname
    var pass=this.loginData.value.pass
    if(this.loginData.valid){
    const result=this.ds.login(uname,pass)

    if(result){
      alert("login success")
      this.route.navigateByUrl('')
    } else{
      alert("incorrect uname or passwrd")
    }

  } else{
    alert("invalid form")
  }
}

}
