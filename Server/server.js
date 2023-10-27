const { Pool } = require('pg');
const dbConfig = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./Routes/userRoute');
const blogRoutes = require('./Routes/blogRoute');

const app = express();
app.use(bodyParser.json());

const pool = new Pool({
    connectionString: dbConfig.development.url,
   });

app.use('/users', userRoutes);

app.use('/', blogRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

