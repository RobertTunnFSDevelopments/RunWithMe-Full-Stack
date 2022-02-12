require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const app = express();

//Middleware
app.use(helmet());
app.use(cors());
app.use(express.json()); //Do not need body parser anymore

app.get('/', (req, res) => {
    res.send("It's decidedly average to be here")
});

app.listen(process.env.HOST_PORT, () => {
    console.log('Listening at http://${process.env.HOST_NAME}:${process.env.HOST_PORT}');
});

