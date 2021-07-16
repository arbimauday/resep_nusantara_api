import dotenv from "dotenv";
dotenv.config();
import mysql from 'mysql'

export const configDB = (others = {}) => {
    return mysql.createConnection({
        host: process.env.DB_NUSANTARA_HOST,
        user: process.env.DB_NUSANTARA_USERNAME,
        password: process.env.DB_NUSANTARA_PASSWORD,
        ...others
    })
}
export const connectDB = (dbName) => configDB({database: dbName})


const nusantaraDB = connectDB(process.env.DB_NUSANTARA_DATABASE)
nusantaraDB.connect(function(err){
    if(!err)
        console.log('DB connection success!');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
    });
export const connectNusantaraDB = nusantaraDB