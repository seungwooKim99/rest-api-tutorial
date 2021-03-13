const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const bodyParser = require('body-parser')
require('dotenv/config');
const cors = require('cors');

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Import Routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)

//ROUTES
app.get('/', (req,res) => {
    res.send('We are on home');
})

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    },
    (err) => {
        if(err){
            console.log(err)
        }
        else{
            console.log('connected to DB!')
        }
    }
)

//listen
app.listen({port: PORT}, () => console.log(`server is running on http://localhost:${PORT} ^^7`));