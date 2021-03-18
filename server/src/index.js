const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('All resources are exposed under /api prefix');
});

app.set('json spaces', 2);
app.use('/api', require('./controllers/items'));

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});