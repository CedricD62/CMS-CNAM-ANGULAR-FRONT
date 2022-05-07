import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { Produit } from 'src/app/interfaces/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit-edit',
  templateUrl: './produit-edit.component.html',
  styleUrls: ['./produit-edit.component.scss']
})
export class ProduitEditComponent implements OnInit {

  produit!: Produit;
  movieForm!: FormGroup;
  isUpdated!: boolean;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly produitService : ProduitService
  ) {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>{
        return this.produitService.getProduit(params.get('id')!)
      })
    ).subscribe((produit: Produit) => {
      this.produit = produit;
      this.movieForm = new FormGroup({
        Name: new FormControl(produit.name, [
          Validators.required,
          Validators.minLength(2)
        ]),
      });
    });
   }

  ngOnInit(): void {
  }

  onSubmit(): void{
    const produit: Produit = {
      id: this.produit.id,
      ...this.movieForm.value
    }
    this.produitService.updateProduit(produit).subscribe(res =>{
      this.isUpdated = true;
    });

  }

}

