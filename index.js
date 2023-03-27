const express = require('express');
const {routerApi} = require('./routes/routerApi');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>')
});

routerApi(app);

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on PORT ${PORT}`)
