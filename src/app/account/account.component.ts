import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
// import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{
  //   id: number;
  //   newStatus: string;
  // }>();

  // loggingService: LoggingService;

  // constructor(logSer: LoggingService) {
  //   this.loggingService = logSer;
  // }

  // Does the same thing as the above lines of code for declaring a LoggingService instance
  constructor(
    // private loggingService: LoggingService,
    private accountService: AccountsService
  ) {}

  onSetTo(status: string) {
    // this.statusChanged.emit({ id: this.id, newStatus: status });
    this.accountService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    // console.log(`A status change occured, the new status is ${status}`);
    this.accountService.statusUpdated.emit(status);
  }

  removeAccount(): void {
    this.accountService.deleteAccount(this.id);
  }
}
