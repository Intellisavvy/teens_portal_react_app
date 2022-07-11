const { getKeys } = require('../utils/keys.utils');
const pool = require("../config/db");


getAll = () =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM vendor',  (error, elements)=>{
            if(error){
                return reject(error);
         }
            return resolve(elements);
        });
    });
};
gets = (id) =>{
    return new Promise((resolve, reject)=>{
        pool.query(`SELECT * FROM vendor  WHERE id =?`, [id],(error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
};

creates = (values) =>{
    
    return new Promise((resolve, reject)=>{
        pool.query("INSERT INTO vendor VALUES(?,?,?,?,?,?,?,?,?,?)",[null,values.Name,values.phoneNumber,values.email,values.password,values.ssn,values.address,values.cityandstate,values.zipcode,values.status],  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
         
        }

 updates = (id)=> {
    return new Promise((resolve, reject)=>{
        pool.query(`UPDATE vendor SET status = 'Deactivate' WHERE id =?`,[id],  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
        }




removes = (id)=> {
    return new Promise((resolve, reject)=>{
        pool.query(`Delete FROM vendor WHERE id =?`,[id],  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });

}


module.exports = {
    creates,
    updates,
    removes,
    gets,
    getAll
}