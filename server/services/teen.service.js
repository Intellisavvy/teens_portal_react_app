const { getKeys } = require('../utils/keys.utils');
const pool = require("../config/db");


getAll = () =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM teen',  (error, elements)=>{
            if(error){
                return reject(error);
         }
            return resolve(elements);
        });
    });
};
gets = (id) =>{
    return new Promise((resolve, reject)=>{
        pool.query(`SELECT * FROM teen  WHERE id = ${id}`,  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
};

creates = (values) =>{
    
    return new Promise((resolve, reject)=>{
        pool.query("INSERT INTO teen VALUES(?,?,?,?,?,?,?,?,?,?)",[null,values.firstName,values.lastName,values.dob,values.ssn,values.gender,values.parentName,values.parentEmail,values.address,values.status='activate'],  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
         
        }

updates = (id)=> {
    return new Promise((resolve, reject)=>{
         pool.query(`UPDATE teen SET status = 'Deactivate' WHERE id =?`,[id],  (error, elements)=>{
             if(error){
                  return reject(error);
               }
                return resolve(elements);
            });
        });
                }




removes = (id)=> {
    return new Promise((resolve, reject)=>{
        pool.query(`Delete FROM teen  WHERE id =?`,[id],  (error, elements)=>{
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