import { Component } from '@angular/core';
import { Schecker } from '../schecker';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cnew',
  imports: [FormsModule],
  templateUrl: './cnew.html',
  styleUrl: './cnew.scss'
})
export class Cnew {

 email:string=""
  password:string=""
  errorMessage:string=""
  successMessage:string=""

  constructor (private c:Schecker){}

    loginUser(){
      this.c.create(this.email,this.password).then(()=>{
      
        this.successMessage="create Successfully"
        this.errorMessage=""
      }).catch(()=>{
          this.errorMessage="create Failed"
        this.successMessage=""
        
      })
    }

}
