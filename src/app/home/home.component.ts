import { Component, OnInit } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
  , styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myimg: string = "assets/images/img.jpg";
  imageObject: Array<object> = [{
    img: "assets/images/poissonfarci.jpg",
    thumbImage: 'assets/images/poissonfarci.jpg',
    title: 'Poisson-farçie'
  },
  {
    img: "assets/images/pizza.jpg",
    thumbImage: 'assets/images/pizza.jpg',
    title: 'Pizza'
  },
  {
    img: "assets/images/baguette.jpeg",
    thumbImage: 'assets/images/baguette.jpeg',
    title: 'Baguette-farçie'
  }, {
    img: "assets/images/viandee.jpg",
    thumbImage: 'assets/images/viandee.jpg',
    title: 'Viande hashée'
  }, {
    img: "assets/images/grillademixte.jpg",
    thumbImage: 'assets/images/grillademixte.jpg',
    title: 'grillademixte'
  }, {
    img: "assets/images/cordonbleu.jpg",
    thumbImage: 'assets/images/cordonbleu.jpg',
    title: 'Cordon bleu'
  }, {
    img: "assets/images/paela.jpg",
    thumbImage: 'assets/images/paela.jpg',
    title: 'Paela'
  }, {
    img: "assets/images/risotto.jpg",
    thumbImage: 'assets/images/risotto.jpg',
    title: 'Risotto'
  }
    , {
    img: "assets/images/ravioli.jpg",
    thumbImage: 'assets/images/ravioli.jpg',
    title: 'Ravioli'
  }

  ]




  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 3,
    "dots": true,
    "infinite": true
  };



}
