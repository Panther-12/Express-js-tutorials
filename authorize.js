const authorize =  (req,res,next) =>{
    const {user}  = req.query
    if (user){
        req.user = {name:'nimrod',age:20,company:'MICROSOFT'}
        next()
    }
    else{
        res.status(404).send('UNAUTHORIZED')
    }
}

module.exports = authorize;