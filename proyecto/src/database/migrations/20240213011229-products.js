'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    
   await queryInterface.createTable('products', { 
    id: {
      type: DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true,
    },
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      
    },
    categoryId: {
      type: DataTypes.INTEGER, 
      references: {
        model: {
          tableName: "category",
        },
        key: "id",
      }, 
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    }
   });
     
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.dropTable('products');
    
  }
};
