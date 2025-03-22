const db = require('./db');

db.query('SELECT 1 + 1 AS result', (err, results) => {
    if (err) {
        console.error('Query failed:', err);
        return;
    }
    console.log('Database query result:', results);
});
