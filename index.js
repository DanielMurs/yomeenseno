const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')

app.set('port',process.env.PORT || 3000)

app.use(express.static(path.join(__dirname,'public')))
app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.redirect('/signin')
})

app.get('/signin',(req,res)=>{
    res.sendFile('public/signin.html',{root:__dirname})
})

app.get('/signup',(req,res)=>{
    res.sendFile('public/signup.html',{root:__dirname})
})

app.listen(app.get('port'),()=>{
    console.log(`listen on port ${app.get('port')}`)
})