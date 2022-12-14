const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

const cors = require('cors');
require('dotenv').config();
app.use(cors());
app.use(express.json());
const todoRoutes = require('./routes/todos')

//global middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})


//routes
app.use('/api/todos',todoRoutes)

app.get('/', (req, res) => {
    res.json({ msg: "hello" })
})

//connect to db
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.2gxbocu.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('connected to db');
    })
    .catch((error) => {
        console.log(error);
    })
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})