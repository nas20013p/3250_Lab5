const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');

const app = express();

// Configure CORS
const corsOptions = {
    origin: 'https://humble-space-fortnight-v6v4q59v6x453wxrq-3000.app.github.dev', // React app URL
    credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use('/', routes);

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});



