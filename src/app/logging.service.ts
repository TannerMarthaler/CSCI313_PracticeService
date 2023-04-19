import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
  constructor() {}

  logStatusChange(newStatus: string): void {
    console.log(`A status change occured, the new status is ${newStatus}`);
  }
}
