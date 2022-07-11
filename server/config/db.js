const mysql = require('mysql2');
require("dotenv").config();

    
    const pool = mysql.createPool({
        connectionLimit: 10,  
        host: process.env.HOST,
        user: process.env.USER,
        password:process.env.PASSWORD,
        database: "dev_teens_db",

    });

    
      module.exports = pool;
