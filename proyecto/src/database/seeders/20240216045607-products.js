'use strict';
//const { faker, LoremModule } = require("@faker-js/faker");
//const { LoremPicsum } = require("@faker-js/faker/modules/image/providers/lorempicsum");

module.exports = {
  async up(queryInterface, Sequelize) {

    const products = [
      {
          id:1,
          name:"Margarita" ,
          price:8560, 
          categoryId:2 ,
          description:"salsa de tomate, mozzarella y orégano o albahaca fresca",
          image:"margherita.jpg"
      },
      {
          id: 2,
          name:"Napolitana" ,
          price: 10500, 
          categoryId: 1,
          description:"salsa de tomate, mozzarella, tomate, ajo y orégano",
          image:"napoletana.jpg"
      },
      {
          id:3,
          name:"Fugazzeta" ,
          price: 9600, 
          categoryId: 3,
          description:"queso mozzarella y cebolla",
          image:"fugazzetta.jpg"
      },
      {
          id:4,
          name:"Putanesca" ,
          price: 10670, 
          categoryId: 2,
          description:"rodajas de tomate, mozzarella, anchoas y orégano",
          image:"putanesca.jpg"
      },
      {
          id:5,
          name:"Pepperoni" ,
          price: 12000, 
          categoryId: 1,
          description:"salsa de tomate, mozzarella y pepperoni original estilo new york city",
          image:"pepperoni-2.jpg"
      },
      {
        id:6,
        name:"Pizza Napolitana Vegana" ,
        price: 7000, 
        categoryId: 3,
        description:"Queso vegano a base de soja, tomate, perejil y orégano",
        image:"PIZZA-NAPOLETANA-SIN-TACC.jpg"
    },
    {
      id:7,
      name:"Cacciatore" ,
      price: 8950, 
      categoryId: 2,
      description:"salsa de tomate, mozzarella, pollo cacciatore, cebolla, crema de pimientos, perejil.",
      image:"PIZZA-POLLO-CACCIATORE.jpg"
  },
  ];
    /*Array(5)
      .fill(0)
      .forEach((_, i) => {
        const idRandom = Math.floor(Math.random() * 2) + 1;
        const randomProducto = {
          id: i + 1,
          name: faker.commerce.productName(),
          price: faker.finance.amount({ min: 2000, max: 70000, dec: 0 }), 
          categoryId: idRandom,
          description: faker.commerce.productDescription(),
          image: faker.image.urlLoremFlickr({ category: 'food' })

        };
        products.push(randomProducto);
      })*/
    await queryInterface.bulkInsert("products", products, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});

  }
};
