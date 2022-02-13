require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const router = require('./router/routes');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(express.static(path.resolve(__dirname, 'static')));

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
