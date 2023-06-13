import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('container') container!: ElementRef;

  isLogin: boolean = true;
  isPerso: boolean = false;
  isPanier: boolean = false;
  isErrorLogin: boolean = false;
  isErrorAjout: boolean = false;

  nom: string = '';
  prenom: string = '';
  login: string = '';
  mdp: string = '';
  nom_input!: string;
  mdp_input!: string;
  newUser: User = new User();
  userSession: User = new User();
  users: Array<User> = [];

  quantite: number = 0;
  montant: number = 0;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(){
    this.users = [
      {
        nom: 'Marie',
        prenom: 'Dupont',
        login: 'dupont',
        mdp: 'dupont'
      },
      {
        nom: 'Greg',
        prenom: 'Lafont',
        login: 'lafont',
        mdp: 'lafont'
      },
      {
        nom: 'Kevin',
        prenom: 'Durant',
        login: 'durant',
        mdp: 'durant'
      },      
    ];
  }
 
  signUpButton(){
    this.container.nativeElement.classList.add("right-panel-active");
  }

  signUpButton_mobile(){
    this.container.nativeElement.classList.add("right-panel-active");
  }

  signInButton(){
    this.container.nativeElement.classList.remove("right-panel-active");
  }

  signInButton_mobile(){
    this.container.nativeElement.classList.remove("right-panel-active");
  }

  signInMobile(){
    this.container.nativeElement.classList.remove("right-panel-active");
  }

  signUpMobile(){
    
  }

  signInUser(){
    const userFound = this.users.find(user => user.login === this.nom_input && user.mdp === this.mdp_input);
    if (userFound) {
      this.userSession = userFound;
      this.nom_input = '';
      this.mdp_input = '';
      this.isLogin = false;
      this.isPerso = true;
      this.isErrorLogin = false;
    } else {
      this.isErrorLogin = true;
    }
  }

  signUpUser(){
    this.users.push(this.newUser);
    this.userSession = this.newUser;
    this.isLogin = true;
    this.isErrorLogin = false;
    this.signInButton();
  }

  ajoutPanier(){
    if(this.quantite > 0){
      this.isLogin = false;
      this.isPerso = false;
      this.isPanier = true;
      this.montant = this.quantite * 1000;
      this.isErrorAjout = false;
    }
    else{
      this.isLogin = false;
      this.isPerso = true;
      this.isPanier = false;
      this.isErrorAjout = true;
    }
  }
}
