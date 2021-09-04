const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8000;
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send("test");
});

const apiRoutes = require('./routes')
app.use('/api/v1/', apiRoutes)

app.listen(port, () => {
    console.log('server is running');
});