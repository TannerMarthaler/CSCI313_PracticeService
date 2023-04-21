import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  constructor() {}

  logStatusChange(newStatus: string): void {
    console.log(`A status change occured, the new status is ${newStatus}`);
  }
}
