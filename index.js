const express = require('express');
const router = express.Router();

const app = express();

router.get('/', function(req, res) {
    res.json({test: 'Hello World!!!'});
});

router.get('/hc', function(req, res) {
    res.sendStatus(200);
});

app.use('/', router);

app.listen(8080, function () {
    console.log('listening!');
});
