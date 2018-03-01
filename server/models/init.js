const process = require('process');
import { execAsync } from "./util";
import { createUserTableAsync } from "./util";
import { createBlogTableAsync } from "./util";
import { createCommentTableAsync } from "./util";

export async function initDatabaseAsync() {
  try {
    await execAsync();
    await createUserTableAsync();
    await createBlogTableAsync();
    await createCommentTableAsync();
  } catch (err) {
    process.exit(1);
  }
}

