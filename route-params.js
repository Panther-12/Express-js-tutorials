const express = require('express')
const {products} = require('./json-data')


// Initialize the app instance
const app = express()


app.get('/',(req,res)=>{
    res.send('<h1> hello user  <a href="/api/products/1"> get first product</a></h1>')
})

// Route parameters are indicate with a colon followed by a desired name
app.get('/api/products/:productID',(req,res)=>{
    try{
        const productIndex = req.params.productID
        // alternative to product index
        // const {productID} = req.params

        const singleProduct = products.map((product)=>{
            const {name,brand,image} = product;
       /* if (product.id === 0){
            return {name, brand, image}
        }
        else{
            res.status(404).send('item not found')
        }*/
            return {name,brand,image}
        })
        if (products[productIndex]){
            res.json(singleProduct[productIndex])
        }
        else{
            res.status(404).send('item not found')
        }
    }
    catch(error){
        console.log(error)
    }

})

// initialize the server
app.listen(5000,()=>{
    console.log('server listening.............')
})