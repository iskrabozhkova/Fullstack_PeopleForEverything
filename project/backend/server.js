const express = require('express');
const app = express();
const mongoose = require('mongoose');

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
mongoose.connect('mongodb://localhost/project', {useNewUrlParser: true})
const db = mongoose.connection;
db.on('error', (error)=> console.log(error))
db.on('open', ()=> console.log('Connected to database'))
const apiRouter = require('./api/index');

app.use(express.json());
app.use('/api', apiRouter);

app.listen(8080, () => {
    console.log('Server is listening');
})