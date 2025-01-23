const express = require('express');
const config = require('./config');
const routes = require('./routes');

const app = express();
const PORT = config.PORT || 3001;

app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});