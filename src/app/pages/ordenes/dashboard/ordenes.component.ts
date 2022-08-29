import { Customer } from './../../../demo/api/customer';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'app/demo/service/customer.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.scss'],
})
export class OrdenesComponent implements OnInit {
  customers: Customer[] = [];
  loading: boolean = false;
  mostrandoResultados:boolean= false
  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService
      .getCustomersLarge()
      .then((customers) => (this.customers = customers));
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  load() {
    this.mostrandoResultados = true

    this.loading = true;
    setTimeout(() => (this.loading = false), 1000);
  }
}
