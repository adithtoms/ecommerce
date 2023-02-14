import { Injectable } from '@angular/core';
import { Cart } from '../shared/model/cart';
import { CartItem } from '../shared/model/cartitem';
import { Watches } from '../shared/model/watch';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart=new Cart()
  addToCart(watch:Watches):void{
    let cartitem=this.cart.items.find(item=>item.watch.id===watch.id)
    if(cartitem){
      this.changeQuantity(watch.id,cartitem.quantity+1)
      return;
    }
    this.cart.items.push(new CartItem(watch))
  }

  removeFromCart(watchId:number):void{
    this.cart.items=this.cart.items.filter(item=>item.watch.id!=watchId)
  }
  changeQuantity(watchId:number,quantity:number){
    let cartitem=this.cart.items.find(item=>item.watch.id===watchId)
    if(!cartitem)return
    cartitem.quantity=quantity
  }
  getCart():Cart{
    return this.cart
  }
}
