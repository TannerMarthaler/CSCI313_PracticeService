import { Injectable } from '@angular/core';
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

  addAccount(name: string, status: string): void {
    this.accounts.push({ name, status });
    this.logging.logStatusChange(status);
  }

  updateStatus(id: number, newStatus: string): void {
    this.accounts[id].status = newStatus;
    this.logging.logStatusChange(newStatus);
  }

  constructor(private logging: LoggingService) {}
}
