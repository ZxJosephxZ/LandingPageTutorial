import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Contact } from './pages/contact/contact';
import { ProductDetail } from './pages/product-detail/product-detail';

export const routes: Routes = [
    {path:'',component: Home},
    {path:'products', component: Products},
    {path:'contact', component: Contact},
    {path:'products/:id', component: ProductDetail},
    {path:'**', redirectTo:'', pathMatch:'full'}
];
