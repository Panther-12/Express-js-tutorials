// import express module
const express = require('express');
const app = express()

// import the json-data module
const {products,people} = require('./json-data')

app.get('/',(req,res)=>{
    res.send(`<h1> welcome to inventory app 
    <a href="/api/products">get product</a></h1>
    `)
})

// handle the api url
// the map function is used to iterate over the list
// for each product in products assign id,name and image then return these values
app.get('/api/products',(req,res)=>{
    const filteredproduct = products.map((product)=>{
        const {id, name, image} = product;
        return{id,name,image}
    })
    res.json(filteredproduct)
})

// find a specific product in a list
app.get('/api/products/0',(req,res)=>{
    const singleproduct = products.find((product)=> product.id === 0)
    res.json(singleproduct)
})

// find single product other method
app.get('/api/products/1',(req,res)=>{
    const singleproduct = products[1]
    res.json(singleproduct)
})

// start the server
app.listen(5000,()=>{
    console.log('server is listening..........')
})