// import relevant packages
const express = require('express')
const app = express()


const {products} = require('./json-data')

app.get('/',(req,res)=>{
    let allProducts = [...products]
    if (allProducts){
        return res.status(200).json(allProducts)
    }
    if (allProducts.length < 1){
       return res.status(404).json({sucess:true, productsData:[]})
    }
    res.status(404).send('An error occured during data fetch')
    
    
})

app.get('/api/v1/products/product',(req,res)=>{
    const {search} = req.query

    // create a copy of array
    let sortedProducts = [...products]
    if(search){
        const filteredProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
        res.status(200).json(filteredProducts)
    }
    if (sortedProducts.length < 1){
        // res.status(200).send('database empty')
        // alternative
        return res.status(200).json({sucess:true,data:[]})
    }
    res.status(404).send('product not found')
   // console.log('hello world')

})
// listen to the port
app.listen(5000,()=>{
    console.log('listening on port 5000........')
})