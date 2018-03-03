import mysql from 'mysql';
import { db } from '../config';


export async function createDatabase() {
  return await new Promise(function (resolve, reject) {
    const conn = mysql.createConnection({
      host: db.host,
      user: db.user,
      password: db.password
    });
    conn.connect(function (err) {
      if (err) {
        reject(err);
        return;
      }
      conn.query('CREATE DATABASE IF NOT EXISTS ' + db.database, function (err) {
        if (err) {
          reject(err);
          return;
        }
        conn.end();
        // console.log('Database created...');
        resolve();
      });
    });
  });
}
/**
 * @param   {string} sqlstatement
 * @param   {object} values
 * @param   {string} message
 *
 * @returns {Promise<any>}
 */
export async function execAsync(sqlstatement, values, message) {
  return await new Promise(function (resolve, reject) {
    const conn = mysql.createConnection(db);
    conn.connect(function (err) {
      if (err) {
        reject(err);
        return;
      }
      conn.query(sqlstatement, values, function (err, result) {
        if (err) {
          reject(err);
          return;
        }
        conn.end();
        // console.log(message);
        resolve(result);
      });
    });
  });
}

export async function selectExecAsync(sqlstatement, values, message) {
  return await new Promise(function (resolve, reject) {
    const conn = mysql.createConnection(db);
    conn.connect(function (err) {
      if (err) {
        reject(err);
        return;
      }
      conn.query(sqlstatement, values, function (err, result) {
        if (err) {
          reject(err);
          return;
        }
        conn.end();
        // console.log(message);
        resolve(result);
      });
    });
  });
}
