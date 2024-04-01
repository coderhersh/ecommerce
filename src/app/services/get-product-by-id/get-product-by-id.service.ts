import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Product';

@Injectable({
  providedIn: 'root'
})
export class GetProductByIdService {
  private url: string = 'https://fakestoreapi.com/products/';
  constructor(private httpClient: HttpClient) { }

  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.url + id);
  }
}
