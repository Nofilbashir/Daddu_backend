// const express = require('express')
// const app = express()
// const cors = require('cors')
// const data = require('./data')

// app.use(express.json())
// app.use(express.urlencoded({extended:false}))
// app.use(cors())



// app.get('/',(req,res)=>{
//     res.send(data)
// })

// app.post('/', (req,res)=>{
//     const user = req.body
//     console.log(user)
//     data.push(user)
// })


// app.listen(5000,(req,res)=>{
//     console.log('server running on port 5000')
// })
let data = [{book:"Algoriyhms", price:1000},{book:"Data Structure", price:2500},{book:"JavaSript", price:3000},{book:"React", price:35000}]

const express = require('express')
const cors = require('cors')

const app  =express()


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.get('/',(req,res)=>{
    res.send({name:"Daddu", age:25})

})

app.get('/data',(req,res)=>{
    res.send(data)
})

app.post('/',(req,res)=>{
    let sentData  = req.body
    data.push(sentData)
    res.send(data)
})


app.delete('/', (req,res)=>{
    data.pop()
    res.send(data)
})







app.listen(5000, ()=>{
    console.log('server chal para')
})


