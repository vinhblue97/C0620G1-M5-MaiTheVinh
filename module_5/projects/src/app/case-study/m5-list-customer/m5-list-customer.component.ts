import { Component, OnInit } from '@angular/core';
import {ICustomer} from '../ICustomer';

@Component({
  selector: 'app-m5-list-customer',
  templateUrl: './m5-list-customer.component.html',
  styleUrls: ['./m5-list-customer.component.css']
})
export class M5ListCustomerComponent implements OnInit {

  customerList: Array<ICustomer> = [
    {
      customerAddress: 'Đà Nẵng',
      customerBirthDay: '31/03/1997',
      customerEmail: 'vinhblue97@gmail.com',
      customerGender: '1',
      customerIdCard: '197362335',
      customerPhone: '0334611971',
      customerType: '1',
      customerName: 'Mai Thế Vinh'
    },
    {
      customerAddress: 'Đà Nẵng',
      customerBirthDay: '30/07/1992',
      customerEmail: 'gigahoang@gmail.com',
      customerGender: '1',
      customerIdCard: '123456789',
      customerPhone: '0000000000',
      customerType: '2',
      customerName: 'Hoàng Minh Quân'
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
