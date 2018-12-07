import { Component } from '@angular/core'
import { CustomerService } from '../services/customer.service';
import { PagerService } from '../services/pager.service';
import { Router } from '@angular/router';
import { Customer } from '../models/customer';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styles: [`
    .backdrop
    { 
        background-color:rgba(0,0,0,0.6);              
        position:fixed;                
        top:0;                
        left:0;
        width:100%;
        height:100vh;
        z-index:9;        
    }`]
})

export class CustomerComponent {
    customers: Customer[];
    customer: Customer;
    message: string = "";
    buttonText: string = 'Save';
    display = 'none'
    popUpTitle: string = '';
    // pager object
    pager: any = {};
    pagedItems: any[];
    searchText: string = null;
    isLoading = false;

    constructor(private _custService: CustomerService, private _pager: PagerService, private _router: Router) {

    }

    ngOnInit() {
        this.getCustomersList();
    }

    editCustomer(id: number) {
        this.isLoading = true;
        this._custService.getCustomerById(id).subscribe(res => {
            this.customer = res;
            this.popUpTitle = 'Edit Customer';
            this.display = 'block'
            this.isLoading = false;
        });
        this.buttonText = 'Update'
    }

    deleteCustomer(id: number) {
        var result = confirm('Do you want to delete this user?');
        if (result) {
            this.isLoading = true;
            this._custService.deleteCustomer(id).subscribe(res => {
                this.message = res
                this.getCustomersList();
                this.isLoading = false;
            });
        }
    }

    saveCustomer() {
        this.display = 'none';
        this.isLoading = true;
        this.customer.isDeleted = false;
        this.buttonText == "Update" ?
            this._custService.saveEditedCustomer(this.customer)
                .subscribe(res => {
                    this.message = res;
                    this.getCustomersList();
                    this.isLoading = false;
                }) :
            this._custService.saveCustomer(this.customer)
                .subscribe(res => {
                    this.message = res;
                    this.getCustomersList();
                    this.isLoading = false;
                });
    }

    clearControls() {
        this.customer = null;
    }

    getCustomersList() {
        this.isLoading = true;
        //this.customers = this._custService.getCustomer();
        this._custService.getCustomer().subscribe(res => 
        {
            this.customers = res;
            this.setPage(1);
        this.isLoading = false;
        });
    }

    addCustomer() {
        this.display = 'block';
        this.popUpTitle = 'Add Customer';
        this.buttonText = 'Save';
        this.customer = new Customer();
    }

    onCloseHandled() {
        this.display = 'none';
        this.customer = new Customer();
    }

    searchCustomers() {
        this.isLoading = true;
        return this._custService.searchCustomer(this.searchText).subscribe(res => {
            this.customers = res;
            this.setPage(1);
            this.isLoading = false;
        });
    }
    setPage(page: number) {
        var pageSize = 5;
        // get pager object from service
        this.pager = this._pager.getPager(this.customers.length, page, pageSize);

        // get current page of items
        this.pagedItems = this.customers.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}