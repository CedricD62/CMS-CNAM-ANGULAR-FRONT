import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../interfaces/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getProduits(): Observable<Produit[]> {
    return this.httpClient.get<Produit[]>('/api/produit');
  }

  getProduit(id: Number): Observable<Produit> {
    return this.httpClient.get<Produit>(`/api/produit/${id}`);
  }

  createProduit(produit: Produit): Observable<Produit>{
    return this.httpClient.post<Produit>('api/produit', produit);
  }

  updateProduit(produit: Produit): Observable<Produit>{
    return this.httpClient.put<Produit>(`/api/produit/${produit.Id}`, produit);
  }

  deleteProduit(id:Number): Observable<void>{
    return this.httpClient.delete<void>(`/api/produit/${id}`);
  }
}
