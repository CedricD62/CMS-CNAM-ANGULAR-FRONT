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
  private readonly baseUrl = 'https://localhost:44355/api/Produit'

  getProduits(): Observable<Produit[]> {
    return this.httpClient.get<Produit[]>('https://localhost:44355/api/Produit');
  }

  getProduit(id: string): Observable<Produit> {
    return this.httpClient.get<Produit>('https://localhost:44355/api/Produit/'+id);
  }

  createProduit(produit: Produit): Observable<Produit>{
    return this.httpClient.post<Produit>('https://localhost:44355/api/Produit', produit);
  }

  updateProduit(produit: Produit): Observable<Produit>{
    return this.httpClient.put<Produit>('https://localhost:44355/api/Produit/'+ produit.Id, produit);
  }

  deleteProduit(id:UUID): Observable<void>{
    return this.httpClient.delete<void>(('https://localhost:44355/api/Produit/'+id));
  }
}
