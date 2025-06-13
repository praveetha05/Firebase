import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Schecker } from '../schecker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cdash',
  imports: [FormsModule],
  templateUrl: './cdash.html',
  styleUrl: './cdash.scss'
})
export class Cdash {
  email:string=""
  password:string=""
  msg:string=""
  constructor (private a:Schecker,private b:Router){}

  save(){

    this.a.create(this.email,this.password).then(()=>{

      this.msg="Account Created"

      setInterval(()=>{
        this.b.navigateByUrl('login')
      },1000)

    }).catch(()=>{
      this.msg="Account Creation Fails"
    })

  }

}
