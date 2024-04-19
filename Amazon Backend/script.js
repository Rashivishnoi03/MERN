const express = require("express");
const productsRouter = require('./routes/productsRoutes.js');
const app = express();
const test = require('./models/productsModels.js'); 
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoute.js");

app.use(express.json());
app.use('/api/products', productsRouter);
app.use('/api/users',userRouter);

const url = "mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.zhqlh0r.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0";
const databaseUser = 'rashivishnoi30';
const databasePassword = 'Rashi03';
const databaseName = 'Amazon-Backend';

let dbLink = url.replace("$_USERNAME_$",databaseUser);
dbLink = dbLink.replace("$_PASSWORD_$",databasePassword);
dbLink = dbLink.replace("$_DB_NAME_$",databaseName);

mongoose.connect(dbLink)
.then(
    ()=> console.log('------Database Connected-------')
);

app.listen(1400,
()=> console.log('-------App Started-------')
);