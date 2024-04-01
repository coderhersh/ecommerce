import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetMenProductsService {
  private productsURL: string = 'https://fakestoreapi.com/products';
  
  constructor(private httpClient: HttpClient) { }

  fetchAllProducts(): void {
    this.httpClient.get(this.productsURL).subscribe(
      (data) => {
        console.log(data); // You can handle the response data here
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
