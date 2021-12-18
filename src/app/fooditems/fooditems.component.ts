import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fooditems',
  templateUrl: './fooditems.component.html'
  ,
  styleUrls: ['./fooditems.component.css']

})
export class FooditemsComponent implements OnInit {

  constructor() { }
  public listoffoods = [{ 'name': 'makloub', 'ingredients': ['tuna', 'chees'], 'price': 6.5 },
  { 'name': 'baguette-farçie', 'ingredients': ['pate', 'olive', 'tuna', 'chees'], 'price': 9, },
  { 'name': 'poisson-farçie', 'ingredients': ['fish', 'salad', 'potato'], 'price': 40 },
  { 'name': 'burger', 'ingredients': ['hashed meat', 'fries', , 'tuna', 'chees'], 'price': 25 },
  { 'name': 'Taco', 'ingredients': ['salad', 'tuna', 'chees'], 'price': 13.5 }];

  ;
  ngOnInit(): void {

  }


}
