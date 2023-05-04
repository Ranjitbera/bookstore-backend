const mongoose=require("mongoose")
const dotenv = require('dotenv');
dotenv.config();
const connect = ()=>{
    mongoose.connect("mongodb+srv://ranjitbera34567:bookstore@cluster0.j6emnwa.mongodb.net/"
        ).then(()=>{
            console.log("connected to database succesfully")
        })
        .catch((err)=>{
           console.log(err.message)
        })
    }

connect();

