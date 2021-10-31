// import relevant packages
const express = require('express')
const app = express()


const {products} = require('./json-data')

app.get('/api/v1/search',(req,res)=>{
    const {search} = req.query

    // create a copy of array
    let sortedProducts = [...products]
    if(search){
        const sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
        res.status(200).json(sortedProducts)
    }
    if (sortedProducts.length < 1){
        res.status(200).send('database empty')
    }
    res.status(404).send('product not found')
    console.log('hello world')

})
// listen to the port
app.listen(5000,()=>{
    console.log('listening on port 5000........')
})