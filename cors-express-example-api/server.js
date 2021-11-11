const express = require('express');
const cors = require('cors');

const app = express();

//registering middleware that parses JSON from the HTTP body 
app.use(express.json());
//app.use(cors());

const postsRoutes = require('./routes/postsRoutes');

app.use('/posts', postsRoutes);

//all other requests that don't fit our routes. 
app.all('*', (req, res) => {
    return res.status(500).json('Invalid path');
})

app.listen(4000, () => {
    console.log("The server is listening for requests on port 4000");
})