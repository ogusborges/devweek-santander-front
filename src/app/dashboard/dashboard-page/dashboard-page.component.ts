import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import Stock from 'src/app/shared/models/stock-model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})

export class DashboardPageComponent implements OnInit {
  stocks: Array<Stock>;

  constructor(private dashboardService: DashboardService,
              private titleService: Title) {
    this.stocks = [];
    this.titleService.setTitle("Santander DevWeek");
  }

  async fetchStocks(): Promise<Stock[]> {
    return this.stocks = await this.dashboardService.getStocks();
  }

  ngOnInit(): void {
    this.fetchStocks();
  }

}
