const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); // toma un número como entrada y devuelve una cadena con el número formateado con comas como separadores de miles

const mainControllers = {
//muestra todos los productos
    index: (req, res) =>{
        res.render ('index', {products, toThousand})
    },

};

module.exports = mainControllers;