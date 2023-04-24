import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Test Account',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  statusUpdated = new EventEmitter<string>();

  addAccount(name: string, status: string): void {
    this.accounts.push({ name, status });
    this.logging.logStatusChange(status);
  }

  updateStatus(id: number, newStatus: string): void {
    this.accounts[id].status = newStatus;
    this.logging.logStatusChange(newStatus);
  }

  deleteAccount(id: number) {
    this.accounts.splice(id, 1);
  }

  constructor(private logging: LoggingService) {}
}
