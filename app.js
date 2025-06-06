const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const tourRoutes = require('./routes/tour.route');
const userRoutes = require('./routes/user.route');
const authRoutes = require('./routes/auth.route');

const app = express();

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD);

mongoose.connect(DB)
    .then(() => {
        console.log("Connection to MongoDB has succeeded !!");
    })
    .catch((err) => {
        console.log("Connection to MongoDB has failed");
        console.log(err);
    });

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from the server");
});

app.use('/api/v1/tours', tourRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/auth', authRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
