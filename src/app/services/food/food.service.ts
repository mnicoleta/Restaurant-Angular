import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {


  constructor() { }

  getFoodById(id: number): Foods {
    return this.getAll().find(food => food.id == id)!;

  }






  getAllFoodByTag(tag: string): Foods[] {
    return tag == "All" ?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));

  }

  // getAllTag in food services 

  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 8 },
      { name: 'FastFood', count: 5 },
      { name: 'Pizza', count: 3 },
      { name: 'Lunch', count: 4 },
      { name: 'SlowFood', count: 3 },
      { name: 'Hamburger', count: 5 },
      { name: 'Fray', count: 1 },
      { name: 'Soup', count: 0 }


    ];
  }


  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Pizza peperoni',
        price: 10,
        cookTime: '10-20',
        favorite: true,
        origins: ['italy'],
        star: 4.2,
        imageUrl: '../assets/5.jpg',
        tags: ['SlowFood', 'Pizza'],
      },
      {
        id: 2,
        name: 'Burger Vita',
        price: 12,
        cookTime: '15-20',
        favorite: false,
        origins: ['germany'],
        star: 3.0,
        imageUrl: '../assets/12.jpg',
        tags: ['FastFood', 'Hamburger', 'Lunch'],
      },
      {
        id: 3,
        name: 'Pizza Corn',
        price: 16,
        cookTime: '5-20',
        favorite: false,
        origins: ['spain'],
        star: 4.0,
        imageUrl: '../assets/7.jpg',
        tags: ['SlowFood', 'Pizza'],
      },
      {
        id: 4,
        name: 'Burger American',
        price: 10,
        cookTime: '20-25',
        favorite: false,
        origins: ['american'],
        star: 4.0,
        imageUrl: '../assets/11.jpg',
        tags: ['FastFood', 'Hamburger', 'Lunch'],
      },
      {
        id: 5,
        name: 'Menu Burger',
        price: 15,
        cookTime: '10-20',
        favorite: true,
        origins: ['italy'],
        star: 5.0,
        imageUrl: '../assets/9.jpg',
        tags: ['FastFood', 'Hamburger', 'Fray'],
      },
      {
        id: 6,
        name: 'Burger Clasic',
        price: 25,
        cookTime: '10-20',
        favorite: true,
        origins: ['italy'],
        star: 4.0,
        imageUrl: '../assets/10.jpg',
        tags: ['FastFood', 'Hamburger', 'Lunch'],
      },
      {
        id: 7,
        name: 'Pizza Diavola',
        price: 20,
        cookTime: '10-20',
        favorite: false,
        origins: ['italy'],
        star: 1.0,
        imageUrl: '../assets/3.jpg',
        tags: ['SlowFood', 'Pizza'],
      },
      {
        id: 8,
        name: 'Meniu Burger Clasic',
        price: 20,
        cookTime: '10-20',
        favorite: false,
        origins: ['italy'],
        star: 2.5,
        imageUrl: '../assets/8.jpg',
        tags: ['FastFood', 'Hamburger', 'Lunch'],
      },

    ]
  }
}
