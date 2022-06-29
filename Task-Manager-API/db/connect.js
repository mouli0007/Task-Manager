const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://mouli:1234@nodeexpressproject.urbzc.mongodb.net/Task-Manager?retryWrites=true&w=majority';

const connectDB = (url) => { 

return mongoose
    .connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,   
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB;
   



