import { execAsync } from './util';

export async function createUserTable() {
  return await execAsync(`CREATE TABLE IF NOT EXISTS users (
      user_id     VARCHAR(12) PRIMARY KEY,
      username    NVARCHAR(24) NOT NULL,
      password    VARCHAR(16) NOT NULL,
      telephone   VARCHAR(20) UNIQUE NOT NULL,
      email       VARCHAR(255) UNIQUE NOT NULL,
      is_manager  BOOL DEFAULT false NOT NULL,
      test        INT DEFAULT 0
      )`, undefined, "Table users created...");
}

export async function dropUserTable() {
  return await execAsync("DROP TABLE users", undefined, 'drop table users');
}

export async function createUser(user) {
  return await execAsync(`INSERT INTO users 
    (user_id, username, password, telephone, email) VALUES (?, ?, ?, ?, ?)`,
    [user.user_id, user.username, user.password, user.telephone, user.email],
    "create user " + JSON.stringify(user));
}

// for login by email
export async function getUserByEmail(email, password) {
  return await execAsync(`SELECT user_id, username, email, telephone, is_manager FROM users 
    WHERE email = ?`,
    [email],
    `select user by email ${email}`);
}

// for login by phone
export async function getUserByPhone(telephone, password) {
  return await execAsync(`SELECT user_id, username, email, telephone, is_manager FROM users 
    WHERE telephone = ?`,
    [telephone],
    `select user by telephone ${telephone}`);
}

export async function getUsernameByUserID(user_id) {
  return await execAsync("SELECT username FROM users WHERE user_id = ?",
    [user_id],
    `select user by user_id ${user_id}`);
}

export async function changePassword(new_password, user_id, password) {
  return await execAsync("UPDATE users SET password = ? WHERE user_id = ? AND password = ?",
    [new_password, user_id, password],
    `update user [user_id: ${user_id}, password: ${password}]`);
}

export async function changeEmail(new_email, user_id, email) {
  return await execAsync("UPDATE users SET email = ? WHERE user_id = ? AND email = ?",
    [new_email, user_id, email],
    `update user [user_id: ${user_id}, email: ${email}]`);
}

export async function changeTelephone(new_telephone, user_id, telephone) {
  return await execAsync("UPDATE users SET telephone = ? WHERE user_id = ? AND telephone = ?",
    [new_telephone, user_id, telephone],
    `update user [user_id: ${user_id}, telephone: ${telephone}]`);
}

export async function deleteUser(user_id, password) {
  return await execAsync("DELETE FROM users WHERE user_id = ? AND password = ?",
    [user_id, password],
    `delete user [user_id: ${user_id}]`);
}
