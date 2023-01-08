const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Shelem H.');
});

app.listen(port, () => {
    console.log('ola que ase');
})


