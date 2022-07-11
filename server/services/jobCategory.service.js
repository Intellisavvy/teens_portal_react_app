const { getKeys } = require('../utils/keys.utils');
const pool = require("../config/db");


getAll = () =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM job_category',  (error, elements)=>{
            if(error){
                return reject(error);
         }
            return resolve(elements);
        });
    });
};
gets = (id) =>{
    return new Promise((resolve, reject)=>{
        pool.query(`SELECT * FROM job_category  WHERE id = ${id}`,  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
};

creates = (values) =>{
    
    return new Promise((resolve, reject)=>{
        pool.query("INSERT INTO job_category VALUES(?,?,?,?)",[values.id,values.category,values.updated_time,values.status],  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
         
        }

 updates = (id)=> {
    return new Promise((resolve, reject)=>{
        pool.query(`UPDATE job_category SET status = 'Deactivate' WHERE id =?`,[id],  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
        }




removes = (id)=> {
    return new Promise((resolve, reject)=>{
        pool.query(`Delete FROM job_category WHERE id =?`,[id],  (error, elements)=>{
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