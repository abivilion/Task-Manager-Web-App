const express =require('express');
const app = express();
const tasks = require('./routes/tasks') ;// task file in routes folder is required and its instance is the variable
const connectDB = require('./db/connect');
require('dotenv').config();
const notfound = require('./middleware/not-found')
const errorHandleMiddleware  =require('./middleware/error-handler')


//middleware
app.use(express.static('./public'));
app.use(express.json());

//routes
// app.get('/hello',(req,res) => {
// res.send('Task Manager App')
// })
// console.log(tasks);

app.use('/api/v1/tasks', tasks) ;// at this address task.js will be called and run
 
app.use(notfound ); // if page not found
app.use(errorHandleMiddleware)


const port =3000;

const start = async() => {
    try{
        console.log("This works!")
        await connectDB(process.env.MONGO_URI)
app.listen(port,()=>
     console.log(`Server is running on port: ${port}`)
     );

    } 
    catch(error){
        console.log(error);
    }
} ;

start();