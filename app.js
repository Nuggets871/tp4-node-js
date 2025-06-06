const express = require('express');

const tourRoutes = require('./routes/tour.route');
const userRoutes = require('./routes/user.route');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from the server");
});

app.use('/api/v1/tours', tourRoutes);
app.use('/api/v1/users', userRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
