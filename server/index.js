const express = require('express');

const app = express()

app.use('/', express.static('.'));

const port = 2333;
app.listen(port, () => {
    console.log('server run in port ' + port);
})