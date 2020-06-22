const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Import Routes
const authRoute = require('./routes/auth')
const postsRoute = require('./routes/posts')

dotenv.config();

const app = express();


const PORT = 5500

// Connect to database
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true}, () => console.log('Connected to DB'))

// Middleware
app.use(express.json());

// Route Middlewares
app.use('/api/user', authRoute)
app.use('/api/posts', postsRoute)


app.listen(PORT, () => console.log(`API running on port ${PORT}`))