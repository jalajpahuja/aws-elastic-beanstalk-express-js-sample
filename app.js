const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('It's a test deployment pipeline handson -- With Full Pipeline'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
