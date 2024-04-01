import { Component, OnInit } from '@angular/core';
import { GetAllProductsService } from '../services/get-all-products/get-all-products.service';
import { Product } from '../Product';
import { Observable, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-everything',
  templateUrl: './everything.component.html',
  styleUrls: ['./everything.component.css']
})
export class EverythingComponent implements OnInit{
  products: Observable<Product[]> = new Observable<Product[]>;
  constructor(private getAllProductService: GetAllProductsService) {}

  ngOnInit(): void {
    this.products = this.getAllProductService.fetchAllProducts();
  }
}
