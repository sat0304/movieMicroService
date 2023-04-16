const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Producer = require('./producer');
const producer = new Producer();
const PORT = 3000;

app.use(bodyParser.json("application/json"));

app.post('/sendLog', async (req, res, next) => {
    await producer.publishMessage(req.body.logType, req.body.message);
    res.send();
});

app.listen(PORT, () => {
    console.log(`Server works at ${PORT} port`);
})
