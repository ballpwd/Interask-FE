const express = require('express');
const connectDB = require('./config/db');

// Connect Database
connectDB();

const app = express();

// Define Routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/room', require('./routes/api/room'));
app.use('/api/ask', require('./routes/api/ask'));
app.use('/api/feedback', require('./routes/api/feedback'));
app.use('/api/question', require('./routes/api/question'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));