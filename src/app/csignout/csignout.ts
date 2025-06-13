import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Schecker } from '../schecker';

@Component({
  selector: 'app-csignout',
  imports: [],
  templateUrl: './csignout.html',
  styleUrl: './csignout.scss'
})
export class Csignout {

  

  constructor (private s:Router,private k:Schecker){}


  signout(){

    this.k.logout()

    this.s.navigateByUrl('login')
    
  }


}
