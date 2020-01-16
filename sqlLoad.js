const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/test')
const products = require('./json.json')

const loadProducts = async function() {
    for (let product of products) {
        await sequelize.query(`INSERT INTO tbl_test values('${product.id}', '${product.name}', 'silver', '${product.price}')`)
    }
}

loadProducts()