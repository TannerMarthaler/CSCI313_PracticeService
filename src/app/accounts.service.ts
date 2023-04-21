import { Injectable } from '@angular/core';

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
  }

  updateStatus(id: number, newStatus: string): void {
    this.accounts[id].status = newStatus;
  }

  constructor() {}
}
