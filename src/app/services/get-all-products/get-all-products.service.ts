import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/Product';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllProductsService {
  private productsURL: string = 'https://fakestoreapi.com/products';
  
  constructor(private httpClient: HttpClient) { }

  fetchAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productsURL).pipe(
      catchError(error => {
        console.error('Error fetching products:', error);
        return throwError('Something went wrong; please try again later.');
      })
    );
  }
}
