import { Component, OnInit } from '@angular/core';
import {TransactionService} from "../services/transaction.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  testval:number = 42;
  constructor() { }

  ngOnInit() {
  }

}