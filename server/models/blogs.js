import { execAsync } from './util';

export async function createBlogTable() {
  return await execAsync(`CREATE TABLE IF NOT EXISTS blogs (
    blog_id         VARCHAR(16) PRIMARY KEY,
    title           VARCHAR(255) NOT NULL,
    brief           VARCHAR(255) NOT NULL,
    text            TEXT NOT NULL,
    user_id         VARCHAR(12) NOT NULL,
    username        VARCHAR(24) NOT NULL,
    create_time     DATETIME  DEFAULT CURRENT_TIMESTAMP NOT NULL,
    last_edit_time  DATETIME ON UPDATE CURRENT_TIMESTAMP NOT NULL,
    views           INTEGER DEFAULT 0,
    is_hiden        BOOL DEFAULT false NOT NULL
    )`, undefined, "Table blogs created...");
}

