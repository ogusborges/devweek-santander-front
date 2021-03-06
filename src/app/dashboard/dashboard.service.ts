import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/models/stock-model';
import { DashboardModule } from './dashboard.module';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  readonly url: string = 'https://dweek-santander.herokuapp.com/santander';
  constructor(private http: HttpClient) {
  }

  async getStocks(): Promise<Stock[]> {
    return this.http.get<Stock[]>(`${this.url}/stock`).toPromise();
  }
}
