// db.js
const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'task_master',
  connectionLimit: 20,
});

function query(sql, args = []) {
  return new Promise((resolve, reject) => {
    pool.query(sql, args, (err, results) => {
      if (err) {
        console.error('Query error:', err.message);
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

function close() {
  return new Promise((resolve, reject) => {
    pool.end(err => {
      if (err) {
        console.error('Error closing connection pool', err.message);
        reject(err);
      } else {
        console.log('Connection pool closed successfully');
        resolve();
      }
    });
  });
}

module.exports = {
  query,
  close,
};
