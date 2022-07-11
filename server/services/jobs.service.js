
const { getKeys } = require('../utils/keys.utils');
const pool = require("../config/db");


getAll = () =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM job',  (error, elements)=>{
            if(error){
                return reject(error);
         }
            return resolve(elements);
        });
    });
};
gets = (id) =>{
    return new Promise((resolve, reject)=>{
        pool.query(`SELECT * FROM job  WHERE id = ${id}`,  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
};

creates = (values) =>{
    let d = Date();
    return new Promise((resolve, reject)=>{
        pool.query("INSERT INTO job VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)",[null,values.jobdescription,values.payment,values.timestart,values.timeend,values.timmings,values.state,values.city,values.zipcode,values.contactdetails,'Activate',d,1], (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
         
        }

 updates = (id)=> {
    return new Promise((resolve, reject)=>{
        pool.query(`UPDATE job SET status = 'Deactivate' WHERE id =?`,[id],  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
        }




removes = (id)=> {
    return new Promise((resolve, reject)=>{
        pool.query(`Delete FROM job  WHERE id =?`,[id],  (error, elements)=>{
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