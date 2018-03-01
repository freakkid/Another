import { execAsync } from "./util";

export async function createUserTableAsync() {
  return await execAsync(`CREATE TABLE IF NOT EXISTS users (
      user_id     VARCHAR(12) PRIMARY KEY,
      username    VARCHAR(24) NOT NULL,
      password    VARCHAR(16) NOT NULL,
      telephone   VARCHAR(20) NOT NULL,
      email       VARCHAR(255) NOT NULL,
      is_manager  BOOL NOT NULL
      )`, "Table users created...");
}

export async function createUser(user) {

}

export async function getUserByEmailAndPassword(email, password) {

}

export async function getUserByPhoneAndPassword(telephone, password) {

}