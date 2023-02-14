import { Watches } from "./watch"



export class CartItem{

    constructor(watch:Watches){
        this.watch=watch;
    }
    watch:Watches
    quantity:number=1
   get price():number{
        return this.watch.price *this.quantity
    }
}