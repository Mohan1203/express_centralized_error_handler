# express_centralized_error_handler

A simple module for handling errors in express it contain three functions `ErrorHandlerClass`, `errorHandlerMiddleware` and `asyncErrorHandler`.


## Example 

```javascript
const express = require('express');
const {ErrorHandlerClass,errorHandlerMiddleware,asyncErrorHandler} = require('express_centralized_error_handler')

const app = express()

// async error handler 
app.get('/',asyncErrorHandler(async(req,res,next)=>{
    const user = undefined;
    //customize error message with code
    if(!user){
        return next(new ErrorHandlerClass('User not found',404))
    }
}))

//sync error handler
app.get('/user', (req, res, next) => {
    //This will give error message user not found
    res.send(user);
})

//default error handler
app.get('/defaulterror', (req, res, next) => {
    //This will give default error message 'Something went wrong' with status code 500
    next(new ErrorHandlerClass());
})


// error middleware
app.use(errorHandlerMiddleware)

app.lister(port,()=>{
    console.log('server listening on port')
})

```

1. `errorHandlerMiddleware` :- `errorHandlerMiddleware` is middleware for error handling you have to provide this middleware in your main  file as `app.use(errorHandlerMiddleware)`. 
<span style="color:red">Always use this line after all the defined routes neither it will not work as expected</span>.

2.`ErrorHandlerClass` :- `ErrorHandlerClass` is a class that can help to customize the error message and error port accordingly usage of this class is `next(new ErrorHandlerClass("error messsage",statuscode))`.

3.`asyncErrorHandler` :- `asyncErrorHandler` is a function which handle async error handling using this function you can write async functions without try..catch block for that you have to wrap your callback function into `asyncErrorHandler`.
