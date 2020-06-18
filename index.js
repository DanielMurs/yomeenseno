const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')

app.set('port',process.env.PORT || 3000)

app.use(express.static(path.join(__dirname,'public')))
app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.send('index.html')
})


app.listen(app.get('port'),()=>{
    console.log(`listen on port ${app.get('port')}`)
})