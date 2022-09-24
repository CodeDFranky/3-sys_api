const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.get('/test', (req, res) => {
    res.send(sampleData);
})

app.listen(port, () => {
    console.log(`Application is listening to port ${port}`);
})