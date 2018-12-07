import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Customer } from '../models/customer';

@Injectable()
export class CustomerService {

    baseApiUrl: string = "http://localhost:59456/api/customer/";
    constructor(private _http: HttpClient) {

    }

    getCustomer() {
        // let authHeaders = new Headers();
        // authHeaders.append('Authorization', 'Bearer ' + localStorage.getItem("access_token"));
        //return this._httpUtility.httpRequest("GET",this.baseApiUrl + 'GetCustomers').map((res: HttpEvent<HttpResponse<Customer>>) => res);
        return this._http.get<Customer[]>(this.baseApiUrl + 'GetCustomers')
            .map((res: Customer[]) => res);
    }

    getCustomerById(id: number) {
        return this._http.get<Customer>(this.baseApiUrl + "GetCustomerById/" + id)
            .map((res: Customer) => res);
    }

    deleteCustomer(id: number) {
        return this._http.delete(this.baseApiUrl + "deletecustomer/" + id)
            .map((res: string) => res);
    }

    saveEditedCustomer(cust: Customer) {
        return this._http.put(this.baseApiUrl + "editcustomer", cust)
            .map((res: string) => res);
    }

    saveCustomer(cust: Customer) {
        return this._http.post(this.baseApiUrl + "savecustomer", cust)
            .map((res: string) => res);
    }

    searchCustomer(query: any) {
        query = query == null || query == undefined || query == "" ? "" : query;
        return this._http.get<Customer[]>(this.baseApiUrl + "SearchCustomers?searchText=" + query)
            .map((res: Customer[]) => res);
    }
}