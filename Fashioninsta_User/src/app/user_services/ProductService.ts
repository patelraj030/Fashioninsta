import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../user_models/product';


@Injectable()
export class ProductService {
	

    private products: Product[];

    constructor(private http:HttpClient) {
        this.http.get<Product[]>("http://localhost:5000/api/products").subscribe(data=>this.products=data);
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>("http://localhost:5000/api/products");
        //return this.products;
      }
    // findAll(): Product[] {
    //     return this.products;
    // }
    searchByCompanyName(id: String):Observable<Product[]> {
		return this.http.get<Product[]>("http://localhost:5000/api/products/company/"+id);
	}

    find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i]._id == id) {
                return i;
            }
        }
        return -1;
    }

}