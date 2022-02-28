require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const router = require('./router/routes');
const fileUpload = require("express-fileupload");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors({
    origin: 'http://localhost:3001',
/*    credentials: true,
    methods:['GET', 'PUT', 'POST'],*/
    optionsSuccessStatus: 200
   /* exposedHeaders: ["set-cookie"],*/
}));

app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));

app.use('/api', router);

/*app.get('*', (req, res) =>{
    res.sendfile(path.resolve(__dirname + "./static/index.html"));
});*/


const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => {
            console.log(`node express work on ${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
}

start();
