import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Company } from '../user_models/company';
import { Product } from '../user_models/product';
import { CompanyService } from '../user_services/company.service';
import { ProductService } from '../user_services/ProductService';

@Component({
	templateUrl: 'product.component.html'
})

export class ProductComponent implements OnInit {

	products: Product[];
	companies:Company[];
	search:FormGroup;
	constructor(private productService: ProductService,private companyService:CompanyService) { 
		this.search=new FormGroup({
			company:new FormControl()
		});
	}

	ngOnInit() {
		this.productService.getProducts().subscribe(data=>this.products=data);
		console.log(this.products);
		// console.log(this.productService.findAll())
		// this.products = this.productService.findAll();
		this.companyService.getCompanies().subscribe(result=>{this.companies=result;console.log(this.companies)});
	}
	searchByCompanyName(name:String){
		console.log("name----"+name);
		this.productService.searchByCompanyName(name).subscribe(data=>this.products=data);
	}

}