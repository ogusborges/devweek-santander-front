import { Injectable } from "@angular/core";

// @Injectable({providedIn: 'root'})

export default class Stock {
  id: number;
  name: string;
  price: number;
  variation: number;
  date: string;

  constructor(id: number, name: string, price: number,
              variation:number, date: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.variation = variation;
    this.date = date;
  }
}
