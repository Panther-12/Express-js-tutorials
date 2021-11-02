// middleware
// next is used to pass on to the next middleware in our case is the route handler
const logger = (req,res,next)=>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getTime();
    console.log('method:',method,'url:',url,'time:',time)
    next()

    // You can also terminate by providing a response
    //    res.send('404 page')
}

module.exports = logger;