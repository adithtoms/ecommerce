import { Injectable } from '@angular/core';
import { Watches } from 'src/app/shared/model/watch';

@Injectable({
  providedIn: 'root'
})
export class WatchService {

  constructor() { }

  getAll():Watches[]{
    return[
      {
        id:1,
        name:'Noise A',
        star:4,
        price:2500,
        fav:true,
        imgurl:'/assets/w1.png',
    
    },
    {
      id:2,
      name:'Noise B',
      star:4.5,
      price:2400,
      fav:false,
      imgurl:'/assets/w2.png',
  
  },
  {
    id:3,
    name:'Noise C',
    star:3.9,
    price:2100,
    fav:false,
    imgurl:'/assets/w3.png',

},
{
  id:4,
  name:'Noise D',
  star:4.8,
  price:2800,
  fav:true,
  imgurl:'/assets/w4.png',

},
{
  id:5,
  name:'Noise E',
  star:4.2,
  price:2700,
  fav:true,
  imgurl:'/assets/w5.png',

},
{
  id:6,
  name:'Noise F',
  star:4.7,
  price:2500,
  fav:true,
  imgurl:'/assets/w6.png',

},
{
  id:7,
  name:'Noise G',
  star:4.1,
  price:2900,
  fav:false,
  imgurl:'/assets/w7.png',

},
{
  id:8,
  name:'Noise H',
  star:5,
  price:2400,
  fav:true,
  imgurl:'/assets/w8.png',

},
    ]
  }

slider():string[]{
  return[
    '/assets/slider-img.png'
  ]
}
about():string[]{
  return[
    '/assets/about-img.png'
  ]
}

}
