import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interface/customer.interface';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit{

  public customersList!: Customer[];

  constructor(private service: CustomerService) { };

  ngOnInit() {
    this.service.findAll().subscribe(data => {      
      this.customersList = data;
      console.log(this.customersList);
    });  
  
  };

  displayedColumns: string[] = ['customerID', 'companyName', 'contactName',
    'contactTitle', 'address', 'city', 'region', 'postalCode', 'country', 'phone',
    'fax'];

}
