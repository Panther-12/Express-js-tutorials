
const express = require('express')
const app = express()

const path = require('path')

const {people} = require('./json-data')
const {database} = require('./json-data')

// urlencoded middleware is used to access data from post requests
app.use(express.static('./forms'))
app.use(express.urlencoded({extended:false}))

// homepage
app.get('/',(req,res)=>{
    const homeFile = path.resolve(__dirname,'./forms/home.html')
    res.status(400).sendFile(homeFile)
})

//login page
app.get('/login',(req,res)=>{
    const file = path.resolve(__dirname,'./forms/index.html')
    res.status(400).sendFile(file)
})

app.get('/api/people',(req,res)=>{
    res.status(400).json({sucess:true, data:people})
})

// route that handles post request from the form
// update the users login info to a database in this case an array
app.post('/login/validation',(req,res)=>{
    let newDatabase = [...database]
    const homeFile = path.resolve(__dirname,'./forms/home.html')
    if (!req.body.username){
        return res.status(404).send('Invalid username')
    }
    newDatabase.push(req.body)
    console.log(newDatabase)
    
    res.status(400).sendFile(homeFile)
   
})
// initialize the server
app.listen(5000,()=>{
    console.log('server listening to port 5000..........')
})