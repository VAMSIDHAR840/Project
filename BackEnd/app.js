let express = require('express')
let app = express()
let User = require('./model/users')
let mongoose = require('mongoose')
let port = 8000
let cors = require('cors')
let db_url = 'mongodb://localhost:27017/users'



//middle wares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//database Connection

mongoose.connect(db_url).then(() => {
    console.log("Database Established");
})
//login page post and check the data
app.post('/login', (req, res) => {
    User.findOne({ email: req.body.email })
        .then((userData) => {
            if (userData) {
                if (userData.password === req.body.password) {
                    res.send({ message: "Login Successful", status: 200 })
                } else {
                    res.send({ message: "Please enter valid password" })
                }
            } else {
                res.send({ message: "user not found" })
            }
        })
})


//post the data

app.post('/register', async (req, res) => {
    User.findOne({ email: req.body.email }).then((data) => {
        if (data) {
            res.send({ message: "User email allready exists" })
        } else {
            let userData = new User({
                name: req.body.name,
                email: req.body.email,
                phoneNo: req.body.phoneNo,
                password: req.body.password
            })
            userData.save()
                .then(() => {
                    res.send({ message: 'User registered Successfully' })
                })
                .catch(() => {
                    res.send({ message: 'User registration is not done try after some time' })

                })
        }
    })
})

app.listen(port, () => {
    console.log("serever on port " + port);
})