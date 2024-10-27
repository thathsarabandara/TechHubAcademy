const express = require('express');
const app = express();
const cors = require('cors');
const frontendCorsOption = require('./middleware/cors/cors')
const studentRoutes = require('./routes/student');
require('./config/database');
require('dotenv');

// Middleware to parse URL-encoded data
app.use(express.urlencoded({extended:true}));

// Middleware to parse JSON data (optional)
app.use(express.json());

const frontendCorsOptions = {
    origin: 'http://localhost:3001', // Allow only this origin
    credentials: true,                // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(frontendCorsOptions));

// route for student
app.use('/', studentRoutes);

const port = 5002 || process.env.PORT;
app.listen(port, () =>{
    console.log(`Server is runing on ${port}`);
})