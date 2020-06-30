const express = require('express')
const app = express()
const path = require('path')

app.set('port',process.env.PORT || 3000)

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.sendFile('index.html',{root:path.join(__dirname,'public')})
})

app.listen(app.get('port'),()=>{
    console.log(`listen on port ${app.get('port')}`)
})