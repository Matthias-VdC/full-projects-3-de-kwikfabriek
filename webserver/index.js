const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 8100;
const cors = require('cors');

app.use(cors());

//which services are used (middleware)
// app.use(express.static('public'));
app.use(bodyParser.json());


//Root route (documentation)
app.get('/', (req, res) => {
    console.log("API root route called.")
    res.send('Hello world');
});

app.listen(port, () => {
    console.log(`Movie API listening at http://localhost:${port}`)
});