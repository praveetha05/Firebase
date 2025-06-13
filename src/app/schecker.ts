import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class Schecker {

  private auth=inject(Auth);

  login(email:string,password:string){

    return signInWithEmailAndPassword(this.auth,email,password);

  }

  create(email:string,password:string){
    return createUserWithEmailAndPassword(this.auth,email,password);
  }
  logout(){
    return signOut(this.auth)
  }
}