import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  currentUser:any;
  userDetails:any
  
 

  constructor() {this.getData() }

  

  // userDetails: any = {
  //   "anu": { username: "anu", password: "abc123", email: "anu@gmail.com" },
  //   "amal": { username: "amal", password: "abc123", email: "amal@gmail.com" },
  //   "arun": { username: "arun", password: "abc123", email: "arun@gmail.com" },
  //   "akil": { username: "akil", password: "abc123", email: "akil@gmail.com" }

  // }

  saveData(){
    if(this.userDetails){
      localStorage.setItem("database",JSON.stringify(this.userDetails))
    }
    if(this.currentUser){
      localStorage.setItem("currentuser",this.currentUser)
    }
  }

  getData(){
    if(localStorage.getItem("database")){
      this.userDetails=JSON.parse(localStorage.getItem("database")||"")
    }
    if(localStorage.getItem("currentuser")){
      this.currentUser=localStorage.getItem("currentuser")
    }
  }

  signup(uname: any, pass: any, email: any) {
    if (uname in this.userDetails) {
      return false
    } else {
      this.userDetails[uname] = { uname, password: pass, email: email }
      this.saveData()
      return true
    }

  }

  login(uname: any, pass: any) {
    if (uname in this.userDetails) {
      if (pass == this.userDetails[uname]["password"]) {
        this.currentUser=uname
        console.log(this.userDetails);
        this.saveData()
        
        return true
      } else {
        return false
      }

    } else {
      return false
    }
  }

}
