import assert from 'assert';
import { initDatabase, userModel } from '../../models';



async function testInsert() {
  var users = [{
    user_id: "revwrtgtr", username: "fgyuhijok", password: "vhnjkmlhh",
    telephone: "123456789012", email: "wueig@gui.com"
  }, {
    user_id: "erferferff", username: "fefer", password: "vhnjkmlhh",
    telephone: "12345678012", email: "wueieg@gui.com"
  }, {
    user_id: "ferferfer", username: "fgyuhijok", password: "vhnjkmlhh",
    telephone: "12345689012", email: "wueige@gui.com"
  }, {
    user_id: "dewerferf", username: "fgyuhijok", password: "vhnjkmlhh",
    telephone: "12345789012", email: "wueiges@gui.com"
  }, {
    user_id: "ferferferf", username: "fgyuhijok", password: "vhnjkmlhh",
    telephone: "12346789012", email: "wueigs@gui.com"
  }];
  try {
    await initDatabase();
    for (let user of users) {
      assert.deepEqual((await userModel.createUser(user)).affectedRows, 1);
    }
    console.log('-----------------change password-------------------')
    for (let user of users) {
      assert.deepEqual((await userModel.changePassword("123456789", user.user_id, user.password)).affectedRows, 1);
    }
    console.log('------------------get user------------------')
    for (let user of users) {
      assert.deepEqual((await userModel.getUserByEmail(user.email, "123456789")).length, 1);
    }
    console.log('-----------------delete user-------------------')
    for (let user of users) {
      assert.deepEqual((await userModel.deleteUser(user.user_id, "123456789")).affectedRows, 1);
    }
    console.log('------------------------------------')
    
  } catch (err) {
    console.log("catch error:---------------------------");
    console.log(err);
    process.exit(1);
  };
}

testInsert();
async function testSelect() {

}
