import {Component, OnInit} from '@angular/core';
import {ICustomer} from '../ICustomer';
import {NgForm, FormBuilder, FormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import {validateComponent} from 'codelyzer/walkerFactory/walkerFn';

@Component({
  selector: 'app-m5-create-customer',
  templateUrl: './m5-create-customer.component.html',
  styleUrls: ['./m5-create-customer.component.css']
})
export class M5CreateCustomerComponent implements OnInit {
  formCreate: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formCreate = this.fb.group({
        name: ['', Validators.required],
      birthDay: '',
      gender: '',
      }
    );
  }

  goCreateCustomer() {
  }

  onSubmit(formCreate: NgForm) {
    console.log(formCreate);
  }
}
