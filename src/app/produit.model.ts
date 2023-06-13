export class Produit {
    designation!: string;
    prix!: number;
    quantiteProduit!: number;
    montantProduit!: number;

  constructor(designation: string, prix: number, quantiteProduit: number) {
    this.designation = designation;
    this.prix = prix;
    this.quantiteProduit = quantiteProduit;
    this.montantProduit = prix * quantiteProduit;
  }
}
