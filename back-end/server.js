const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const dbname='app-database';
const url=`mongodb://localhost:27017/${dbname}`;
const app=express();
const userRouter=require('./routes/userRoute');
const notesRouter=require('./routes/notesRoute');
//require('dotenv').config();
const port= 5000;
app.use(cors());
app.use(express.json());
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});
// const connection=mongoose.connection;
// connection.then(() =>{
//     console.log("Data-base connected");
// });
const connection= async() =>{
    const conn=await mongoose.connection;
    const printconn=await console.log(conn);
    const ifconnresolve=await console.log('Database connected...'); 
    
}
app.use('/users',userRouter);
app.use('/notes',notesRouter);
connection();
app.listen(port,() => {
    console.log(`Server running on port ${port}`);
});
