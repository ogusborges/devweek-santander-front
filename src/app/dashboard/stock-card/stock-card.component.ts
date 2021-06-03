import { Component, Inject, Injectable, Input, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock-model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css'],
  providers: [DashboardService]
})

export class StockCardComponent implements OnInit {
  @Input()
  public stock: Stock;

  constructor() {
    this.stock = new Stock(0,'',0,0,'');
  }

  ngOnInit(): void {
  }

  get variation(): string {
    const prefix: string = this.stock.variation == 0 ? '' : this.stock.variation < 0 ? '- ' : '+ ';
    return `${prefix}${this.stock.variation.toFixed(2).toLocaleString().replace('-', '')}%`;
  }
}
