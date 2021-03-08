const express = require('express');
const cors = require('cors');

const app = express();

// CORS
app.use(cors());

// Routes
app.use('/api/items', require('./routes/items'));

app.listen(4000, () => {
    console.log('Start server on port 4000');
});