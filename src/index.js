const express = require('express');
const bitgener = require('bitgener');
const bwipjs = require('bwip-js');

const port = process.env.PORT || 3000;
const api = express();

api.use(express.static(__dirname + '/public'));

// api.get('/', (req, res) => {
//     res.send("HELLO BITCH!");
// })

api.listen(port, () => {
    console.log(`API is listening to port ${port}`);
})

api.post('/generate', (req, res) => {
    const reqQueryObj = req.query;
    const message = reqQueryObj.message ? reqQueryObj.message : '';
    const secret = reqQueryObj.secret ? reqQueryObj.secret : '';
    const title = reqQueryObj.altText ? reqQueryObj.altText : '';


    let options = {
        bcid: 'datamatrix', // Barcode type
        text: message, // Text to encode
        alttext: title, // Additional text
        scale: 5, // scaling factor
        includetext: title.length > 0 ? true : false, // Show human-readable text
        textxalign: 'center', // Always good to set this
        textsize: 3,
        padding: 2,
        backgroundcolor: 'ffffff',
        // dotty: true
    }

    bwipjs.toBuffer(options, function (err, png) {
        if (err) {
            res.send(err);
        } else {
            res.writeHead(200, {
                'Content-Type': 'image/png',
                'Content-Length': png.length
            });
            res.end(png);
        }
    });
})