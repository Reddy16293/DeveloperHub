const express = require('express');
const cors = require('cors');
const dbconnect = require('./config/database.js');
const apiroutes = require('./router');

const app = express();
const PORT = 5000; // Your backend server port

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-token'],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiroutes);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await dbconnect();
});
