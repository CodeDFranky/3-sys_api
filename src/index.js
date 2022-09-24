const express = require('express');

const port = process.env.PORT || 3000;

const api = express();

api.use(express.static(__dirname + '/public'));

api.listen(port, () => {
    console.log(`API is listening to port ${port}`);
})