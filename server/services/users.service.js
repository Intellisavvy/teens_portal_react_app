
const { getKeys } = require('../utils/keys.utils');
const dbCon = require("../config/db");


async function getAll() {

    const x= dbCon.query("SELECT * FROM user ");
    return x;
}
async function get(id) {

    const resp = await dbCon.query(`SELECT * FROM user WHERE id = ${id}`);
    return resp;
}

async function create(values) {
    
    dbCon.query(
        "INSERT INTO user VALUES(?,?,?,?,?)",[values.id,values.username,values.Password,values.type,values.timestamp])
         return { message: `create user`}
         
        }

async function update(id) {
    dbCon.query(
        `UPDATE user SET status = 'D' WHERE id =?`,[id]);
            return { message: `user updated` };
        }

async function remove(id) {
    dbCon.query(
    "DELETE FROM user WHERE id = ?",
    [id],
    function (err) {
    if (err) throw err;
  
    return { message: ` user deleted` };
});

}


module.exports = {
    create,
    update,
    remove,
    get,
    getAll
}