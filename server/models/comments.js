import { execAsync } from "./util";

export async function createCommentTableAsync() {
  return await execAsync(`CREATE TABLE IF NOT EXISTS comments (
    comment_id      VARCHAR(16) PRIMARY KEY,
    blog_id         VARCHAR(16) NOT NULL,
    content         TEXT NOT NULL,
    from_uid        VARCHAR(12) NOT NULL,
    to_uid          VARCHAR(12) NOT NULL,
    create_time     DATETIME  DEFAULT CURRENT_TIMESTAMP NOT NULL,
    last_edit_time  DATETIME ON UPDATE CURRENT_TIMESTAMP NOT NULL,
    is_hiden        BOOL DEFAULT false NOT NULL
    )`, "Table comments created...");
}