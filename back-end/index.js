import  express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app =express();

app.use(bodyParser.json({limit: "30mb",extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb",extended:true}));
app.use(cors());


const PORT = process.env.PORT || 3000; 

const CONNECTION_URL="mongodb+srv://pinar:pinar123@cluster0.xtjizw0.mongodb.net/";
mongoose.connect(CONNECTION_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Veritabanı bağlantısı kuruldu. ${PORT}`)
    })
})
.catch(error =>{
    console.error(error.message);
});