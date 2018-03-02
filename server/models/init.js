import process from 'process';
import { createUserTable } from './users';
import { createBlogTable } from './blogs';
import { createCommentTable } from './comments';

export async function initDatabase() {
  try {
    await createUserTable();
    await createBlogTable();
    await createCommentTable();
  } catch (err) {
    process.exit(1);
  }
}
