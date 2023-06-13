import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from './user.model';
import { Produit } from './produit.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('container') container!: ElementRef;

  isLogin: boolean = false;
  isPerso: boolean = true;
  isPanier: boolean = false;
  isErrorLogin: boolean = false;
  isErrorAjout: boolean = false;

  nom: string = '';
  prenom: string = '';
  login: string = '';
  mdp: string = '';

  designation!: string;
  prix!: number;
  quantiteProduit!: number;

  nom_input!: string;
  mdp_input!: string;
  newUser: User = new User();
  userSession: User = new User();
  users: Array<User> = [];
  produits: Array<Produit> = [];
  produitsSelectionnes: Produit[] = [];

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
      {
        nom: 'Kevin',
        prenom: 'Durant',
        login: 'ww',
        mdp: 'ww'
      },      
    ];

    this.produits = [      
      {
        designation: 'Radion',
        prix: 1000,
        quantiteProduit: 0,
        montantProduit: 0
      },
      {
        designation: 'Micros',
        prix: 2000,
        quantiteProduit: 0,
        montantProduit: 0
      }      
    ]
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
    this.produits.forEach(produit => {
      const index = this.produitsSelectionnes.findIndex(p => p.designation === produit.designation);
      if (produit.quantiteProduit > 0) {
        if (index === -1) {
          this.produitsSelectionnes.push(produit);
        } else {
          if (produit.quantiteProduit === 0) {
            this.produitsSelectionnes.splice(index, 1);
          } else {
            this.produitsSelectionnes[index].quantiteProduit = produit.quantiteProduit;
          }
        }
      } else {
        if (index !== -1) {
          this.produitsSelectionnes.splice(index, 1);
        }
      }
    });
    

    if(this.produitsSelectionnes.length > 0){
      this.montant = this.produitsSelectionnes.reduce((total, produit) => {
        return total + (produit.prix * produit.quantiteProduit);
      }, 0);
      
      this.isLogin = false;
      this.isPerso = false;
      this.isPanier = true;      
      this.isErrorAjout = false;
    }
    else{
      this.isLogin = false;
      this.isPerso = true;
      this.isPanier = false;
      this.isErrorAjout = true;
    }
  }

  backPageAchat(){
    this.isLogin = false;
    this.isPerso = true;
    this.isPanier = false;
    this.isErrorAjout = false;
  }
}
