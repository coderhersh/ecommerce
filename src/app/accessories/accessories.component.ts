import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Product';
import { GetAllProductsService } from '../services/get-all-products/get-all-products.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  products: Observable<Product[]> = new Observable<Product[]>;
  constructor(private getAllProductService: GetAllProductsService) {}

  ngOnInit(): void {
    this.products = this.getAllProductService.fetchAllProducts();
  }
}
