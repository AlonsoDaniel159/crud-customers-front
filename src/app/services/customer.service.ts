import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../interface/customer.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  private url: string = 'http://localhost:8080/customers';

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url);
  }
}
