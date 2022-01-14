const cookieSession = require('cookie-session');
const authRoute = require('./routes/auth');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const app = express();

//connect to db
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('Connected to MongoDB');
});

//middleware
app.use(express.json());
app.use(
  cookieSession({
    name: 'session',
    keys: ['keys'],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  })
);

//routes
app.use('/auth', authRoute);
app.listen(5000, () => {
  console.log('Server is running!');
});
