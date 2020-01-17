const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/test')
const products = require('./json.json')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-METHODS', 'GET, PUT, POST, DELETE, OPTIONS')
    res.header('Access-Control-Allow-HEADERS', 'Content-Type, Authorization, Content-Length, X-Requested-Within')
    next()
})

app.get('/products', async function(req, res) {
    res.send(products)
})

app.post('/product', async function (req, res) {
    let data = req.body
    console.log(data)
    await sequelize.query(`INSERT INTO tbl_test VALUEs('${data.id}', '${data.name}', '${data.material}', '${data.price}')`)
    res.send('success')
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})