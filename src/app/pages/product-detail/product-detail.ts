import { Component, inject, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../../services/api';
import { IProduct, IProductDetail, Product } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail implements OnInit{
  loading :boolean = true;
  private _router = inject(ActivatedRoute);
  private _apiService = inject(Api);
  public product?:Product;
  ngOnInit(): void {
    this._router.params.subscribe(params => {
      this._apiService.getProduct(params['id']).subscribe((data:IProductDetail) =>{
        this.product = data.product;
        this.loading = false;
      })
    })
  }
}
