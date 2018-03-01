const mysql = require('mysql');
import { db } from '../config';


export async function createDatabaseAsync() {
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
        console.log("Database created...");
        resolve();
      });
    });
  });
}

export async function execAsync(sqlstatement, message) {
  return await new Promise(function (resolve, reject) {
    const conn = mysql.createConnection(db);
    conn.connect(function (err) {
      if (err) {
        reject(err);
        return;
      }
      conn.query(sqlstatement, function (err) {
        if (err) {
          reject(err);
          return;
        }
        conn.end();
        console.log(message);
        resolve();
      });
    })
  });
}