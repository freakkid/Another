import { execAsync } from './util';

export async function createBlogTable() {
  return await execAsync(`CREATE TABLE IF NOT EXISTS blogs (
    blog_id         VARCHAR(16) PRIMARY KEY,
    title           NVARCHAR(255) NOT NULL,
    text            TEXT NOT NULL,
    user_id         VARCHAR(12) NOT NULL,
    username        NVARCHAR(24) NOT NULL,
    create_time     DATETIME  DEFAULT CURRENT_TIMESTAMP NOT NULL,
    last_edit_time  DATETIME ON UPDATE CURRENT_TIMESTAMP NOT NULL,
    views           INTEGER DEFAULT 0,
    is_hidden        BOOL DEFAULT false NOT NULL
    )`, undefined, 'Table blogs created...');
}

export async function dropBlogTable() {
  return await execAsync('DROP TABLE blogs', undefined, 'drop table blogs');
}

export async function createBlog(blog) {
  return await execAsync(`INSERT INTO blogs 
    (blog_id, title, text, user_id, username) VALUES (?, ?, ?, ?, ?, ?)`,
    [blog.blog_id, blog.title, blog.text, blog.user_id, blog.username],
    'create blog ' + JSON.stringify(blog));
}

export async function getOpenBlog(blog_id) {
  return await execAsync(`SELECT 
    blog_id, title, text, user_id, username, create_time, last_edit_time, views
    FROM blogs WHERE user_id = ? AND is_hidden = false`,
    [user_id],
    `get open blog list by user_id ${user_id}`);
}

export async function getOpenBlogNumber(user_id) {
  return await execAsync(`SELECT COUNT(*) FROM blogs WHERE user_id = ? AND is_hidden = false`,
    [user_id],
    `get open blog list by user_id ${user_id}`);
}

export async function getOpenBlogList(user_id, offset, limit) {
  return await execAsync(`SELECT 
    blog_id, title, user_id, username, create_time, last_edit_time, views
    FROM blogs WHERE user_id = ? AND is_hidden = false LIMIT ?, ? ORDER BY create_time DESC`,
    [user_id, limit || 10, offset || 0],
    `get open blog list by user_id ${user_id}`);
}

export async function getBlog(user_id) {
  return await execAsync(`SELECT 
    blog_id, title, text, user_id, username, create_time, last_edit_time, views 
    FROM blogs WHERE user_id = ?`,
    [user_id],
    `get open blog list by user_id ${user_id}`);
}

export async function getAllBlogsNumber(user_id) {
  return await execAsync(`SELECT COUNT(*) FROM blogs WHERE user_id = ?`,
    [user_id],
    `get open blog list by user_id ${user_id}`);
}

export async function getBlogList(user_id, offset, limit) {
  return await execAsync(`SELECT 
    blog_id, title, user_id, username, create_time, last_edit_time, views 
    FROM blogs WHERE user_id = ? LIMIT ?, ? ORDER BY create_time DESC`,
    [user_id, limit || 10, offset || 0],
    `get open blog list by user_id ${user_id}`);
}

export async function hideBlog(blog_id) {
  return await execAsync('UPDATE blogs SET is_hidden = true WHERE blog_id = ?',
    [blog_id],
    `hide blog by blog_id ${blog_id}`);
}

export async function showBlog(blog_id) {
  return await execAsync('UPDATE blogs SET is_hidden = false WHERE blog_id = ?',
    [blog_id],
    `show blog by blog_id ${blog_id}`);
}

export async function editBlog(blog_id, title, text) {
  return await execAsync('UPDATE blogs SET title = ?, text = ? WHERE blog_id = ?',
    [title, text, blog_id],
    `edit blog by blog_id ${blog_id}`);
}

export async function deleteAllBlogsByUserID(user_id) {
  return await execAsync('DELETE FROM blogs WHERE user_id = ?',
  [user_id],
  `delete all blogs by [user_id: ${user_id}]`);
}

