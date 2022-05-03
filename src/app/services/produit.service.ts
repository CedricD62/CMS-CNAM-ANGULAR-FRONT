import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../interfaces/produit';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor( private readonly httpClient: HttpClient) { }
  private readonly baseUrl = 'https://localhost:44355/api/'
  list! : Produit[]

  getProduits(): Observable<Produit[]> {
    return this.httpClient.get<Produit[]>(this.baseUrl);
  }

  getProduit(id: Number): Observable<Produit> {
    return this.httpClient.get<Produit>(this.baseUrl);
  }

  createProduit(produit: Produit): Observable<Produit>{
    return this.httpClient.post<Produit>('api/produit', produit);
  }

  updateProduit(produit: Produit): Observable<Produit>{
    return this.httpClient.put<Produit>(`/api/produit/${produit.Id}`, produit);
  }

  deleteProduit(id:UUID): Observable<void>{
    return this.httpClient.delete<void>(`/api/produit/${id}`);
  }
}
