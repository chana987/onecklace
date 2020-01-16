const express = require('express')
const path = require('path')
// const bodyParser = require('body-parser')
const app = express()
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/test')

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-METHODS', 'GET, PUT, POST, DELETE, OPTIONS')
    res.header('Access-Control-Allow-HEADERS', 'Content-Type, Authorization, Content-Length, X-Requested-Within')
    next()
})

app.get('/products', async function(req, res) {
    let data = await sequelize.query('SELECT * FROM tbl_test')
    res.send(data)
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})