const sql = require('mssql');

const selectData = async (pool) => {
    try {
        const result = await pool.request().query('SELECT * FROM People');
        return result.recordset;
    } catch (err) {
        console.error('Error fetching data:', err.message);
        throw err;
    }
};

module.exports = { selectData };

