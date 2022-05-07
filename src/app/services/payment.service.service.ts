import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payments } from '../interfaces/payments';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor( private readonly httpClient: HttpClient) { }
  list! : Payments[]

  createPayment(payment: Payments): Observable<Payments>{
    return this.httpClient.post<Payments>('https://localhost:44355/api/createPayment/', payment);
  }
}
