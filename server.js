const express = require('express');
const app = express();
require
//****************************DataBase Connection******************* */
const mongoosedb = require('./config/mongo')
mongoosedb().then(()=>{console.log("Database connected..!!!")})

const authRoute = require('./router/authRouter');
app.use('/api/auth', authRoute)

app.listen(process.env.PORT,console.log("Server is runing..!!!"))