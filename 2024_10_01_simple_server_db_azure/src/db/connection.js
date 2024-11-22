const sql = require('mssql');

// Azure SQL database configuratio
const config = {
    user: 'cse3250', // Username
    password: 'Sakib2024@', // Password
    server: 'cloud-3250-server.database.windows.net', // Server name
    database: 'PeopleDB', // Database name
    options: { encrypt: true }, 
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Connected to Azure SQL Database');
        return pool;
    })
    .catch(err => {
        console.error('Database connection failed:', err.message);
        throw err;
    });

module.exports = poolPromise;


