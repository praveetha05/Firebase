
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Schecker } from '../schecker';


@Component({
  selector: 'app-clogin',
  imports: [CommonModule, FormsModule],
  templateUrl: './clogin.html',
  styleUrl: './clogin.scss'
})
export class Clogin {

  email:string=""
  password:string=""
  errorMessage:string=""
  successMessage:string=""

  constructor (private c:Schecker){}

    loginUser(){
      this.c.login(this.email,this.password).then(()=>{
       
           this.successMessage="Login Success"
        this.errorMessage=""
      }).catch(()=>{
         this.errorMessage="Login Failed"
        this.successMessage=""
     
        
        
      })

      
        
      
    }
   
  
  



}
