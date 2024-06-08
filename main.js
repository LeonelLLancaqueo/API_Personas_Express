const express = require('express')

const app= express()

const empleado= require('./empleado')




app.use(express.static('static'))
/*
app.use((req,res,next) =>{
    console.log('pasa por aca')
    next()
} )
*/
app.use('/empleado', empleado)

app.get( '/', (req,res)=>{

    res.sendFile('./static/index');
})

app.listen( 3000, ()=>{
    console.log("server in port 3000");
})
