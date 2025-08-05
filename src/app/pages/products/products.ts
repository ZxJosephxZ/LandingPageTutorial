import { Component, inject, OnInit } from '@angular/core';
import { Api } from '../../services/api';
import { IProduct, Product } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CurrencyPipe],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit{

  productList: Product[] = [];
  private _apiService = inject(Api);
  private _router = inject(Router);

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data:IProduct) => {
      this.productList = data.products;
    });
  }

  navigate(id:number):void
  {
    this._router.navigate(['/products', id]);
  }
}
