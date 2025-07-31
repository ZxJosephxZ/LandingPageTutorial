import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api {
    private _http = inject(HttpClient)
    private urlBase: string = 'https://fakestoreapi.in/api/products';

    getProducts():Observable<any>
    {
        return this._http.get(this.urlBase);
    }

    getProduct(id:number):Observable<any>
    {
      return this._http.get('${this.urlBase}/${id}');
    }
}
