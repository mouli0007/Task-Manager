const express = require('express')
const app = express()
const tasks = require('./routes/task')
const connectDB = require('./db/connect')
// require('dotenv').config()
//Middleware
app.use(express.static('./public'))
app.use(express.json())


//Setting the middleware for the routes
app.use('/api/v1/task', tasks)


const port = 3000

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
