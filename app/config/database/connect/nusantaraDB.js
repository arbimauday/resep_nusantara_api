import dotenv from "dotenv";
dotenv.config();
import mysql from 'mysql'

const nusantaraDB = mysql.createConnection({
    host: process.env.DB_NUSANTARA_HOST,
    user: process.env.DB_NUSANTARA_USERNAME,
    password: process.env.DB_NUSANTARA_PASSWORD,
    database: process.env.DB_NUSANTARA_DATABASE
});

nusantaraDB.connect(function(err){
    if(err)
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});

export default nusantaraDB