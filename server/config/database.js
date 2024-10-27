const { MongoClient } = require('mongodb');
require('dotenv').config();

const connectDB = async () =>{
    try{
        await MongoClient.connect(process.env.MONGODB_URL);
        console.log('Successful Connection');
    }catch(err){
        console.error('Failed to connect to MongoDB:', err);
    }
}
connectDB();