const express = require('express')
const app = express()
const path = require("path")
const hbs=require("hbs")
const collection=require("./mongodb")

const tempelatePath = path.join(__dirname, '../tempelates')
const publicPath = path.join(__dirname, '../public')
console.log(publicPath);

app.use(express.json())
app.set('view engine', 'hbs')
app.set('views', tempelatePath)
app.use(express.static(publicPath))
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('login')
})
app.get('/signup', (req, res) => {
    res.render('signup')
})
app.get('/home', (req, res) => {
    res.render('home')
})
app.get('/joinclass', (req, res) => {
    res.render('joinclass')
})
app.get('/testpost', (req, res) => {
    res.render('testpost')
})
app.get('/post', (req, res) => {
    res.render('post')
})
app.get('/classtabels', (req, res) => {
    res.render('classtabels')
})
app.get('/Fileupload', (req, res) => {
    res.render('Fileupload')
})



app.post('/signup', async (req, res) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }
    await collection.insertMany([data])

    res.render("home")

    })

app.post('/login', async (req, res) => {
        try {
            const check = await collection.findOne({ name: req.body.name })
    
            if (check.password === req.body.password) {
                res.status(201).render("home", { naming: `${req.body.password}+${req.body.name}` })
            }
    
            else {
                res.send("incorrect password")
            }
    
        } catch (e) {
    
            res.send("wrong details")
        }
    })

app.listen(3000, () => {
    console.log('port connected');
})