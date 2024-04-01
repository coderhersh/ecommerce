import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { Observable } from 'rxjs';
import { GetAllProductsService } from '../services/get-all-products/get-all-products.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit{
  products: Observable<Product[]> = new Observable<Product[]>;
  constructor(private getAllProductService: GetAllProductsService) {}

  ngOnInit(): void {
    this.products = this.getAllProductService.fetchAllProducts();
  }
}
