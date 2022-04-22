const asyncWrapper = (fn) => { 

return async(req ,res,next) => {
    try{
        await fn(req,res,next)
    }
    catch (err)
    {
        // console.log(err);
        next(err);
        // res.status(500).json({"Error Occured ":err})
    }
}
}

module.exports =asyncWrapper