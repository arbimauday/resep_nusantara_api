import {configDB} from "../connect/db.js";

let sql = 'CREATE DATABASE ' + process.env.DB_NUSANTARA_DATABASE;
configDB().query(sql, (err, result) => {
    if (err)  {return console.log(err.sqlMessage);}

    console.log('Database created success!');
})