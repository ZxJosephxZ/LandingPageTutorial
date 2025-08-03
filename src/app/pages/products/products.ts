import { Component, inject, OnInit } from '@angular/core';
import { Api } from '../../services/api';
import { IProduct, Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit{

  productList: Product[] = [];
  private _apiService = inject(Api);

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data:IProduct) => {
      this.productList = data.products;
    });
  }
}
