const express = require('express')
const reqFilter = require('./middleware')
const route = express.Router()
const app = express()

//        i am using Middlewear in External "middleware.js" file
// all pages Middleware express js
// app.use(reqFilter);

route.use(reqFilter)
app.get('/',(req,resp)=>{
    resp.send('Wellcome to home page')
})
// Middleware on single routed express js only User Page
route.get('/user',(req,resp)=>{
    resp.send('Wellcome to User page')
})
app.get('/about',(req,resp)=>{
    resp.send('Wellcome to About page')
})
app.use('/',route)

app.listen(3300)