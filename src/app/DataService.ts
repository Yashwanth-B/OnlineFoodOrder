import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
    providedIn: 'root'
  })
  export class DataService implements InMemoryDbService{
  
    constructor() { }
    createDb(){
  
     let  foods =  [
      {id:1, name:"Idly", price:20, description:"Four piece Idly with Chutney and Sambar", numberOfPlates:0},
      {id:2, name:"Pongal", price:30, description:"One cup Pongal with sambar", numberOfPlates:0},
      {id:3, name:"Puri", price:50, description:"Two Piece puri with kurma", numberOfPlates:0},
      {id:4, name:"Vada", price:30, description:"Three piece vada with Chutney and Sambar", numberOfPlates:0},
      {id:5, name:"Parotta", price:40, description:"Two piece Parotta with Kurma", numberOfPlates:0},
      {id:6, name:"Dosa", price:30, description:"Plain Dosa with Red and White chutney", numberOfPlates:0},
      {id:7, name:"Masala Dosa", price:60, description:"Masala dosa with red chutney", numberOfPlates:0},
      {id:8, name:"Onion Dosa", price:60, description:"Onion dosa with chutney", numberOfPlates:0},
      {id:9, name:"Ghee Karam Roast", price:70, description:"Nellore special Ghee Karam Roast", numberOfPlates:0},
      {id:10, name:"Upma Pesarattu", price:50, description:"Upma Pesarattu with allam chutney", numberOfPlates:0}
     ];

     let users=[
      //General Users
      {id:1, name:'testuser', password:'Test123', userType:'U'},
      {id:2, name:'tempuser', password:'Test123', userType:'U'},
      {id:3, name:'dummyuser', password:'Test123', userType:'U'},
      //Admin Users
      {id:4, name:'admin1', password:'Strict123', userType:'A'},
      {id:5, name:'admin2', password:'Strict123', userType:'A'},
    ];

    let orders= [
      {itemname:'Dosa' ,type:'Veg',cusine:'South Indian',price:50,order_date:'1-3-2021',order_time:'2.30PM'},
      {itemname:'Chicken Dosa' ,type:'Non-Veg',cusine:'South Indian',price:90,order_date:'26-2-2021',order_time:'12.30PM'},
      {itemname:'Idly Paya' ,type:'Non-Veg',cusine:'South Indian',price:70,order_date:'7-4-2021',order_time:'5.33PM'},
      {itemname:'Paneer Dosa' ,type:'Veg',cusine:'South Indian',price:100,order_date:'2-4-2021',order_time:'7.26PM'},
      {itemname:'prawn roast' ,type:'Non-Veg',cusine:'Multi Cusine',price:150,order_date:'1-4-2021',order_time:'3.56PM'},
      {itemname:'Upma' ,type:'Veg',cusine:'South Indian',price:50,order_date:'3-4-2021',order_time:'1.12PM'},
      {itemname:'Chicken Biriyani' ,type:'Non-Veg',cusine:'North Indian',price:200,order_date:'4-4-2021',order_time:'11.59PM'},
      {itemname:'Idly with chutney' ,type:'Veg',cusine:'South Indian',price:30,order_date:'1-4-2021',order_time:'6.30AM'},
      {itemname:'Gongura Chicken' ,type:'Non-Veg',cusine:'South Indian',price:250,order_date:'4-4-2021',order_time:'7.30AM'},
      {itemname:'Ghee Karam Dosa' ,type:'Veg',cusine:'South Indian',price:90,order_date:'2-4-2021',order_time:'12.45PM'},
      {itemname:'Ghee Karam Dosa' ,type:'Veg',cusine:'South Indian',price:90,order_date:'5-4-2021',order_time:'5.32PM'}
    ]
     
  
     return {foods,users,orders};
  
    }
  }