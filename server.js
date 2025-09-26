const express = require('express');
const app = express();
require
//****************************DataBase Connection******************* */
const mongoosedb = require('./config/mongo')
mongoosedb().then(()=>{console.log("Database connected..!!!")})
















app.listen(process.env.PORT,console.log("Server is runing..!!!"))