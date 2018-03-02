import { execAsync } from './util';

export async function createUserTable() {
  return await execAsync(`CREATE TABLE IF NOT EXISTS users (
      user_id     VARCHAR(12) PRIMARY KEY,
      username    VARCHAR(24) NOT NULL,
      password    VARCHAR(16) NOT NULL,
      telephone   VARCHAR(20) NOT NULL,
      email       VARCHAR(255) NOT NULL,
      is_manager  BOOL DEFAULT false NOT NULL
      )`, undefined, "Table users created...");
}

export async function createUser(user) {
  return await execAsync("INSERT INTO users " +
    "(user_id, username, password, telephone, email) VALUES (?, ?, ?, ?, ?)",
    [user.user_id, user.username, user.password, user.telephone, user.email],
    "create user " + JSON.stringify(user));
}

export async function getUserByEmail(email, password) {
  return await execAsync("SELECT user_id, email, telephone, is_manager FROM users " +
    "WHERE email = ?",
    [email],
    `select user by email ${email}`);
}

export async function getUserByPhone(telephone, password) {

}

export async function changePassword(new_password, user_id, password) {
  return await execAsync("UPDATE users SET Password = ? " +
  "WHERE User_id = ? AND Password = ?",
  [new_password, user_id, password],
  `update user [user_id: ${user_id}, password: ${password}]`);
}

export async function deleteUser(user_id, password) {
  return await execAsync("DELETE FROM users " +
    "WHERE user_id = ? AND password = ?",
    [user_id, password],
    `delete user [user_id: ${user_id}]`);
}
