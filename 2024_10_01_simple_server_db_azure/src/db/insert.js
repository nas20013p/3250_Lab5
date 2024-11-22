const sql = require('mssql');

const insertData = async (pool, query) => {
    try {
        const { id, name, address } = query;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .input('name', sql.VarChar, name)
            .input('address', sql.VarChar, address)
            .query('INSERT INTO People (id, name, address) VALUES (@id, @name, @address)');
        return { message: 'Data inserted successfully', result };
    } catch (err) {
        console.error('Error inserting data:', err.message);
        throw err;
    }
};

module.exports = { insertData };

