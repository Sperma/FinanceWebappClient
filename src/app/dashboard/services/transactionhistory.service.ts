import {Injectable, EventEmitter} from '@angular/core';
import {Transaction} from "../models/transaction";
import {isBlank} from "@angular/core/src/facade/lang";
import {DashboardResourceService} from "../resources/dashboard-resource.service";
import {QueryInformation} from "../models/query-information";

@Injectable()
export class TransactionHistoryService {
  constructor(private resource: DashboardResourceService) {
  }

  public lastTransactionChange: EventEmitter<Transaction[]> = new EventEmitter<Transaction[]>();
  public filteredTransactionChange: EventEmitter<Transaction[]> = new EventEmitter<Transaction[]>();

  private lastTransactions: Transaction[] = [];
  private filteredTransactions: Transaction[] = [];

  public get getLatestTransactions(): Transaction[] {
    return this.lastTransactions;
  }

  public updateLatestTransactions() {
    var query: QueryInformation = new QueryInformation(0, 3,
      0, '1999-05-11T02:00:00.000Z', (new Date()).toISOString()
    );
    this.resource.getTransactions(query).subscribe(
      (data: Transaction[]) => {
        this.lastTransactions = !isBlank(data) ? data : null;
        this.lastTransactionChange.emit(this.lastTransactions);
      });


  }


}
