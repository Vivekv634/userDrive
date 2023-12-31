require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userAuthRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const cookieParser = require('cookie-parser');


const app = express();


mongoose.connect(process.env.DB_URI_DEV).then(() => {
    console.log('CONNECTED TO DATABASE')

    app.use(express.json());
    app.use(cors());
    app.use(cookieParser());
    app.use('/api/auth', userAuthRoutes);
    app.use('/api/user', userRoutes);

    app.listen(process.env.PORT, () => {
        console.log(`Server is listening to http://localhost:${process.env.PORT}`);
    });
})