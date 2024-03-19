import { Component } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  public products = [
    { name: "Book", price: 100, category: "Literature" },
    { name: "Ball", price: 50, category: "Sports" },
    { name: "Flash drive", price: 20, category: "Electronics" },
    { name: "T-shirt", price: 30, category: "Clothing" },
    { name: "Milk", price: 25, category: "Groceries" },
    { name: "Printer paper", price: 15, category: "Electronics" },
    { name: "Basketball", price: 70, category: "Sports" },
    { name: "Sweater", price: 40, category: "Clothing" },
    { name: "Hammer", price: 10, category: "Tools" },
    { name: "Coffee maker", price: 60, category: "Electronics" },
    { name: "Sport pants", price: 45, category: "Clothing" },
    { name: "Apple", price: 2, category: "Groceries" }
];

getCategoryStyle(category: string): any {
  switch (category) {
    case 'Clothing':
      return { 'background-color': 'lightblue' };
    case 'Sports':
      return { 'background-color': 'lightgreen' };
    case 'Electronics':
      return { 'background-color': 'lightyellow' }; 
    case 'Groceries':
      return { 'background-color': 'lightcoral' };
    case 'Tools':
      return { 'background-color': 'lightgrey' }; 
    case 'Literature':
      return { 'background-color': 'gray' };
    default:
      return {}; 
  }
}


}
