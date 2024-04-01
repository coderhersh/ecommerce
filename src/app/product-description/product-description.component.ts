import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product';
import { GetProductByIdService } from '../services/get-product-by-id/get-product-by-id.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit{
  product: Observable<Product> = new Observable<Product>;
  
  constructor (
  private route: ActivatedRoute,
  private productById: GetProductByIdService) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productById.getProductById(id);
  }

  addToCart(): void {

  }

  buyNow(): void {
    
  }
}
