
import { Foods } from "./food";

export class CartItem {
    constructor(food: Foods) {
        this.food = food;
        this.price; //javascript code  can write this method 

    }

    food: Foods;
    quantity: number = 1;
    get price(): number {
        return this.food.price * this.quantity;
    }

}

// it's created a cartItem model