import process from 'process';
import { createUserTable, dropUserTable } from './users';
import { createBlogTable, dropBlogTable } from './blogs';
import { createCommentTable, dropCommentTable } from './comments';

export async function initDatabase() {
  try {
    await createUserTable();
    await createBlogTable();
    await createCommentTable();
  } catch (err) {
    process.exit(1);
  }
}

export async function initDatabaseForTest() {
  try {
    //? just for test
    await dropUserTable();
    await dropBlogTable();
    await dropCommentTable();
    //?-------------------
    await initDatabase();
  } catch (err) {
    process.exit(1);
  }
}
